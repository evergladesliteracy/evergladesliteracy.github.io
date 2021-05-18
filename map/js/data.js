var schoolsData;
var teachersData;
var countyNames = [
  {
    "id": "ALACHUA",
    "name": "Alachua"
  },
  {
    "id": "BAKER",
    "name": "Baker"
  },
  {
    "id": "BAY",
    "name": "Bay"
  },
  {
    "id": "BRADFORD",
    "name": "Bradford"
  },
  {
    "id": "BREVARD",
    "name": "Brevard"
  },
  {
    "id": "BROWARD",
    "name": "Broward"
  },
  {
    "id": "CALHOUN",
    "name": "Calhoun"
  },
  {
    "id": "CHARLOTTE",
    "name": "Charlotte"
  },
  {
    "id": "CITRUS",
    "name": "Citrus"
  },
  {
    "id": "CLAY",
    "name": "Clay"
  },
  {
    "id": "COLLIER",
    "name": "Collier"
  },
  {
    "id": "COLUMBIA",
    "name": "Columbia"
  },
  {
    "id": "DESOTO",
    "name": "DeSoto"
  },
  {
    "id": "DIXIE",
    "name": "Dixie"
  },
  {
    "id": "DUVAL",
    "name": "Duval"
  },
  {
    "id": "ESCAMBIA",
    "name": "Escambia"
  },
  {
    "id": "FLAGLER",
    "name": "Flagler"
  },
  {
    "id": "FRANKLIN",
    "name": "Franklin"
  },
  {
    "id": "GADSDEN",
    "name": "Gadsden"
  },
  {
    "id": "GILCHRIST",
    "name": "Gilchrist"
  },
  {
    "id": "GLADES",
    "name": "Glades"
  },
  {
    "id": "GULF",
    "name": "Gulf"
  },
  {
    "id": "HAMILTON",
    "name": "Hamilton"
  },
  {
    "id": "HARDEE",
    "name": "Hardee"
  },
  {
    "id": "HENDRY",
    "name": "Hendry"
  },
  {
    "id": "HERNANDO",
    "name": "Hernando"
  },
  {
    "id": "HIGHLANDS",
    "name": "Highlands"
  },
  {
    "id": "HILLSBOROUGH",
    "name": "Hillsborough"
  },
  {
    "id": "HOLMES",
    "name": "Holmes"
  },
  {
    "id": "INDIAN_RIVER",
    "name": "Indian River"
  },
  {
    "id": "JACKSON",
    "name": "Jackson"
  },
  {
    "id": "JEFFERSON",
    "name": "Jefferson"
  },
  {
    "id": "LAFAYETTE",
    "name": "Lafayette"
  },
  {
    "id": "LAKE",
    "name": "Lake"
  },
  {
    "id": "LEE",
    "name": "Lee"
  },
  {
    "id": "LEON",
    "name": "Leon"
  },
  {
    "id": "LEVY",
    "name": "Levy"
  },
  {
    "id": "LIBERTY",
    "name": "Liberty"
  },
  {
    "id": "MADISON",
    "name": "Madison"
  },
  {
    "id": "MANATEE",
    "name": "Manatee"
  },
  {
    "id": "MARION",
    "name": "Marion"
  },
  {
    "id": "MARTIN",
    "name": "Martin"
  },
  {
    "id": "MIAMI_DADE",
    "name": "Miami-Dade"
  },
  {
    "id": "MONROE",
    "name": "Monroe"
  },
  {
    "id": "NASSAU",
    "name": "Nassau"
  },
  {
    "id": "OKALOOSA",
    "name": "Okaloosa"
  },
  {
    "id": "OKEECHOBEE",
    "name": "Okeechobee"
  },
  {
    "id": "ORANGE",
    "name": "Orange"
  },
  {
    "id": "OSCEOLA",
    "name": "Osceola"
  },
  {
    "id": "PALM_BEACH",
    "name": "Palm Beach"
  },
  {
    "id": "PASCO",
    "name": "Pasco"
  },
  {
    "id": "PINELLAS",
    "name": "Pinellas"
  },
  {
    "id": "POLK",
    "name": "Polk"
  },
  {
    "id": "PUTNAM",
    "name": "Putnam"
  },
  {
    "id": "ST_JOHNS",
    "name": "St. Johns"
  },
  {
    "id": "ST_LUCIE",
    "name": "St. Lucie"
  },
  {
    "id": "SANTA_ROSA",
    "name": "Santa Rosa"
  },
  {
    "id": "SARASOTA",
    "name": "Sarasota"
  },
  {
    "id": "SEMINOLE",
    "name": "Seminole"
  },
  {
    "id": "SUMTER",
    "name": "Sumter"
  },
  {
    "id": "SUWANNEE",
    "name": "Suwannee"
  },
  {
    "id": "TAYLOR",
    "name": "Taylor"
  },
  {
    "id": "UNION",
    "name": "Union"
  },
  {
    "id": "VOLUSIA",
    "name": "Volusia"
  },
  {
    "id": "WAKULLA",
    "name": "Wakulla"
  },
  {
    "id": "WALTON",
    "name": "Walton"
  },
  {
    "id": "WASHINGTON",
    "name": "Washington"
  }
];
$(function() {
  //Initialize the Map
  impactMap.init();
  //$(".dataContainerWrapper").prepend("<p>"+$(window).width()+"</p>");

  $( "#countySelector" )
  .change(function () {
    //alert('change' + $( "#countySelector" ).val());
    if($( "#countySelector" ).val() != ""){
    $('svg g#'+$( "#countySelector" ).val()).trigger('click');
}
    // $('.dataContainer').show();
    // $('.datakey').hide();

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

//setCounties();
});


function setCounties(){

}

var impactMap = {
  dataContainer:'.dataContainer',
  teachersData:{},
  schoolsData:{},
  availableCounties:[],
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
      $.each(json, function(i, v) {
        impactMap.schoolsData = json;
        //Update styles for counties with data
        console.log(v['County']);
        $('#'+v['County']).addClass('selectable');
        $('#'+v['County']).find('path').removeClass('noData').addClass('hasData');
        $('#'+v['County']).find('polygon').removeClass('noData').addClass('hasData');

        $('#'+v['County']).find('text').removeClass('text5').addClass('text2');
        impactMap.availableCounties[v['County']] = v['County'];




      });
impactMap.loadAvailableCounties();

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
        console.log("loading teachers");
        console.log(impactMap.teachersData);
        $(impactMap.teachersData).each(function(j,k){
          console.log($(this));
          console.log(k);
          $('#'+k['County']).addClass('selectable');
          $('#'+k['County']).find('path').removeClass('noData').addClass('hasData');
          $('#'+k['County']).find('polygon').removeClass('noData').addClass('hasData');
          $('#'+k['County']).find('text').removeClass('text5').addClass('text2');
          console.log("adding: " + k['County']);
          impactMap.availableCounties[k['County']] = k['County'];


        });
        impactMap.loadAvailableCounties();
        //Update styles for counties with data
      });

    });
  },
  loadAvailableCounties:function(){
    $('#countySelector').html('');
    for (const [key, value] of Object.entries(impactMap.availableCounties)) {
      console.log(`${key}: ${value}`);
        $('#countySelector').append('<option value="'+`${value}`+'">'+impactMap.getCountyName(`${value}`)+'</option>');
    }
    $(impactMap.availableCounties).each(function(i,e){
      console.log(i);

    });
  },
  loadData: function(id){
    $(".champion_schools_container").hide();
    //$(".education_team_members_container").hide()
  //   if (impactMap.teamCounties.includes(id)) {
  //   // found element
  //   //$(".education_team_members_container").show()
  // }
  var championCount = 0;
  var championSchools = [];
  var otherSchools = [];
  var cName = impactMap.getCountyName(id);
    $('h2.county').html( impactMap.getCountyName(id) );
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
  }, getCountyName: function(id) {
    var _temp = "";
    $(countyNames).each(function(i,e){

      if(e.id == id) {
        _temp = e.name
      }
    });
    return _temp;
  }
}
