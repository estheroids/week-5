/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */




/* =====================
 Leaflet setup - feel free to ignore this
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */
/*  var url = "https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json";
*/

var parseData = function(pD){
  return JSON.parse(pD);};

var plotMarkers = function(pM){
  _.map(pM, function(plot){
    return L.marker(plot).addTo(map);
  });
};

var removeMarkers = function(rM){
  _.each(rM,function(rM){
    map.removeLayer(rM);}
  );
};

$("button").click(function(){

  $("#text1").text("ENTER URL");
  $("#text-input1").val();

  $("#text2").text("ENTER LAT/Y");
  $("#text-input2").val();

  $("#text3").text("ENTER LNG/X");
  $("#text-input3").val();

  $.ajax($("#text-input1").val()).done(function(url){
    var parsed = parseData(url);
    console.log(parsed);

    var makeMarkers = function(mM){
      return _.map(mM, function(make){ return[make[$("#text-input2").val()], make[$("#text-input3").val()]];
    });};

    var markers = makeMarkers(parsed);
    plotMarkers(markers);

    });
});





/*$(document).ready(function() {

  $("button").click(function(){
    $("#text1").text("ENTER URL");
    $("#text-input1").val();

    $("#text2").text("ENTER LAT");
    $("#text-input2").val();

    $("#text3").text("ENTER LNG");
    $("#text-input3").val();


    var downloadData = $.ajax($("#text-input1").val());
    var parseData = function(pD){
      return JSON.parse(pD);};
    var makeMarkers = function(mM){
      return _.map(mM, function(make){ return[make.LAT, make.LNG];
    });};
    var plotMarkers = function(pM){
      _.map(pM, function(plot){
        return L.marker(plot).addTo(map);
      });
    };

    downloadData.done(function(data) {
        var parsed = parseData(data);
        var markers = makeMarkers(parsed);
        plotMarkers(markers);
    });

});


});


/*Y X -solar installation

var resetMap = function() {
  _.each(appState.markers, function(marker, i) {
    map.removeLayer(marker);
  });
  appState.markers = [];
};

  resetMap(); */

/*
    var removeMarkers = function(rM){
      _.each(rM,function(rM){
        map.removeLayer(rM);}
      );
    };
*/



/*downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
  removeMarkers(markers);
});*/
