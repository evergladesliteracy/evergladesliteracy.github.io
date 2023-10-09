var schoolsData;
var teachersData;
$(function() {
  //Initialize the Map
  impactMap.init();

$('svg g').on('mouseover', function() {

  });
  $( "#countySelector" )
  .change(function () {
    // $('.dataContainer').show();
    // $('.datakey').hide();
    $( "select option:selected" ).each(function() {
      // var _id = $( this ).text();
      // $('h1').html($( this ).text());
      // impactMap.loadData($( this ).text());
      $('svg g#'+$( this ).text()).trigger('click');
    });
  })
  .change();

  $('svg g').on('click', function() {
    if($(this).hasClass('selectable')){
    $('.dataContainer').show();
    $('.datakey').hide();
    $('svg g').removeClass('active');
    $(this).toggleClass('active');
    //process data
    var _id = $(this).attr('id');
    $('h1').html(_id);
    impactMap.loadData(_id);}
  });
  $('.close').on('click', function() {
    $('svg g').removeClass('active');
    $('.datakey').show();
    $(impactMap.dataContainer).hide();
  });


setCounties();
});


function setCounties(){

}

var impactMap = {
  dataContainer:'.dataContainer',
  teachersData:{},
  schoolsData:{},
  teamCounties:["MIAMI_DADE","ORANGE","MARTIN","PALM_BEACH"],
  teachersDataUrl:"data/teachersdata.json",
  schoolsDataUrl:"data/schoolsdata.json",
  init: function(){
    impactMap.resetDataContainer();

    impactMap.loadSchools();
    impactMap.loadTeachers();
    $('.team_list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      });
  },
  loadSchools: function(){
    $.ajax({
      url: impactMap.schoolsDataUrl,
      cache: false
    })
    .done(function(json) {
      //console.log(json);
      var count = 0;
      var _availableCounties = [];
      $.each(json, function(i, v) {
        impactMap.schoolsData = json;
        //Update styles for counties with data
        $('#'+v['County']).addClass('selectable');
        $('#'+v['County']).find('path').removeClass('noData').addClass('hasData');
        $('#'+v['County']).find('polygon').removeClass('noData').addClass('hasData');

        $('#'+v['County']).find('text').removeClass('text5').addClass('text2');
        _availableCounties[v['County']] = v['County'];



      });
      console.log('_availableCounties');
      console.log(_availableCounties);
      for (const [key, value] of Object.entries(_availableCounties)) {
        console.log(`${key}: ${value}`);
          $('#countySelector').append('<option>'+`${value}`+'</option>');
      }
      $(_availableCounties).each(function(i,e){
        console.log(i);

      });
    });
  },
  loadTeachers: function(){
    $.ajax({
      url: impactMap.teachersDataUrl,
      cache: false
    })
    .done(function(json) {
      var count = 0;
      $.each(json, function(i, v) {
        impactMap.teachersData = json;
        //Update styles for counties with data
      });

    });
  },
  loadData: function(id){
    $(".champion_schools_container").hide();
    $(".education_team_members_container").hide()
    if (impactMap.teamCounties.includes(id)) {
    // found element
    $(".education_team_members_container").show()
  }

  var championCount = 0;
  var championSchools = [];
  var otherSchools = [];
    $('h2.county').html(id.replace("_"," "));
    impactMap.teachersData;
    //School Data
    $(impactMap.schoolsData).each(function(j,k){
      if((k['County'] == id) && k['Url'] != "") {
        championCount++;
        var _tempSchool = { school: k['School'], url: k['Url']  };
        championSchools.push(_tempSchool);
        $(".champion_schools_container").show();
      } else if(k['County'] == id)  {
              var _tempSchool = { school: k['School'], url: k['Url']  };
              otherSchools.push(_tempSchool);
              //$(".champion_schools_container").show();
            }
    });
    //post

    // $(championSchools).each(function(m,n){
    //   var link = $('<a href="'+ n.url +'">'+ n.school +'</a>');
    //   console.log(link)
    //   $('.team_list').append(link);
    // });
    $('.total_champion_schools').html(championCount);

    // $(otherSchools).each(function(m,n){
    //   var span = $('<span>'+ n.school +'</span>');
    //   $('.team_list').append(span);
    // });

    var totalSchools = championSchools.length + otherSchools.length;
    // Number of schools per column
    var pageSize = 10;
    if(pageSize > totalSchools) {
      pageSize = Math.ceil(totalSchools/2);
    }
    //Remove all slides
    $('.team_list').slick('removeSlide', null, null, true);
    var totalColumns = Math.ceil(totalSchools/pageSize);
    var allSchools = championSchools.concat(otherSchools);
    var count = 0;
    //First div
    var _tempDiv;
    $(allSchools).each(function(index,school){
      // Create a new container for the column every x page
      if(count == 0) {
         _tempDiv = $("<div/>");
      }
      var _elem;
      if(school.url != "") {
        _elem = $('<a href="'+ school.url +'" target="_blank">'+ school.school +'</a>');
      } else {
        _elem = $('<span>'+ school.school +'</span>');

      }
      $(_tempDiv).append(_elem);
      count++;
      if((count == pageSize) || (index == (totalSchools-1))){
        //Reset the count
        count = 0;
        //$('.team_list').append(_tempDiv);
        $('.team_list').slick('slickAdd', _tempDiv);
      }
    });

    //TODO combine championcount and other count
    //TODO determine column division
    //TODO determine total columns
    //TODO split total school among columns
    //present slide show or scroll jquery control



    var teacherCount = '';

    $(impactMap.teachersData).each(function(m,n){
      if(n['County'] == id) {
        teacherCount = n['Teachers'];
        $(".teachers_trained_count").show();
      }
      $('.teachers_trained_count').html(teacherCount);

    });


  },
  resetDataContainer: function() {
    $('.datakey').show();
    $(impactMap.dataContainer).hide();
  }
}