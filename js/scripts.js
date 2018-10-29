function Places(cityName, countryName, landMark, visitorsPerYear, timeOfYear) {
    this.city = cityName,
    this.country = countryName,
    this.landmark = landMark
    this.visitors = visitorsPerYear
    this.time = timeOfYear
}

var place1 = new Places("Arizona", "USA", "Grand Canyon", "4.5 million", "summer");
var place2 = new Places("Paris", "France", "Eiffel Tower", "7 million", "winter");
var place3 = new Places("Cairo", "Egypt", "The Great Pyramids", "10 million", "spring");



$(document).ready(function() {
  $("#gc").click(function() {
    $("#gcObject").empty();
    $("#gcObject").append("<li>" + "Location: " + place1.city + "</li>");
    $("#gcObject").append("<li>" + "Country: " + place1.country + "</li>");
    $("#gcObject").append("<li>" + "Landmark: " + place1.landmark + "</li>");
    $("#gcObject").append("<li>" + "Visitors per year: " + place1.visitors + "</li>");
    $("#gcObject").append("<li>" + "Visitors per year: " + place1.time + "</li>");
  });
  $("#et").click(function() {
    $("#etObject").empty();
    $("#etObject").append("<li>" + "Location: " + place2.city + "</li>");
    $("#etObject").append("<li>" + "Country: " + place2.country + "</li>");
    $("#etObject").append("<li>" + "Landmark: " + place2.landmark + "</li>");
    $("#etObject").append("<li>" + "Visitors per year: " + place2.visitors + "</li>");
    $("#etObject").append("<li>" + "Visitors per year: " + place2.time + "</li>");
  });
  $("#gp").click(function() {
    $("#gpObject").empty();
    $("#gpObject").append("<li>" + "Location: " + place3.city + "</li>");
    $("#gpObject").append("<li>" + "Country: " + place3.country + "</li>");
    $("#gpObject").append("<li>" + "Landmark: " + place3.landmark + "</li>");
    $("#gpObject").append("<li>" + "Visitors per year: " + place3.visitors + "</li>");
    $("#gpObject").append("<li>" + "Visitors per year: " + place3.time + "</li>");
  });

});
