var rawbase =
  "https://raw.githubusercontent.com/patrykmysiorski/FootballProject/";
var jsonloc = "add-competitions/competitions.json";

$(document).ready(function() {
  $.getJSON(rawbase + jsonloc, function(data) {
    var grids = "";
    $.each(data, function(key, value) {
      $.each(value, function(key, value) {
        grids += '<a href="' + value.subPageUrl + '">';
        grids += '<div class="div' + value.id + '">';
        if (value.id == 1 || value.id > 6) {
          grids +=
            '<img src="' + value.emblemUrl + '"width="200" height="100" />';
        } else {
          grids += '<img src="../' + value.emblemUrl + '" />';
        }

        grids += "<h2>" + value.name + "</h2>";
        grids += "</div>";
        grids += "</a>";
      });
    });
    $("#parent").append(grids);
  });
});
