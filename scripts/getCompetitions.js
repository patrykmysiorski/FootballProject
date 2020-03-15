var rawbase =
  "https://raw.githubusercontent.com/patrykmysiorski/FootballProject/";
var jsonloc = "add-competitions/competitions.json";
$(document).ready(function() {
  $.getJSON(rawbase + jsonloc, function(data) {
    var firstRowCompetitions = "";
    var secondRowCompetitions = "";
    $.each(data, function(key, value) {
      $.each(value, function(key, value) {
        if (value.id <= 4) {
          firstRowCompetitions += "<td>";
          firstRowCompetitions += '<div class="competition">';
          firstRowCompetitions +=
            '<img src="' + value.emblemUrl + '"width="200" height="200">';
          firstRowCompetitions += "<h2>" + value.name + "</h2>";
          firstRowCompetitions += "</div>";
          firstRowCompetitions += "</td>";
        } else {
          secondRowCompetitions += "<td>";
          firstRowCompetitions += '<div class="competition">';
          secondRowCompetitions +=
            '<img src="' + value.emblemUrl + '"width="200" height="200">';
          secondRowCompetitions += "<h2>" + value.name + "</h2>";
          secondRowCompetitions += "</div>";
          secondRowCompetitions += "</td>";
        }
      });
    });
    $("#firstRowCompetitions").append(firstRowCompetitions);
    $("#secondRowCompetitions").append(secondRowCompetitions);
  });
});
