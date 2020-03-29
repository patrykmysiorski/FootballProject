$(document).ready(function() {
  $.ajax({
    type: "GET",
    url:
      "https://raw.githubusercontent.com/patrykmysiorski/FootballProject/change-competitions-json-to-xml/xml/competitions.xml",
    dataType: "xml",
    success: xmlParser
  });
});

function xmlParser(xml) {
  var grids = "";
  var subPageUrl = "";
  var id = "";
  var emblemUrl = "";
  var name = "";
  var correctId = "";
  $(xml)
    .find("competition")
    .each(function() {
      subPageUrl = $(this)
        .find("subPageUrl")
        .text();
      id = $(this)
        .find("id")
        .text();
      emblemUrl = $(this)
        .find("emblemUrl")
        .text();
      name = $(this)
        .find("name")
        .text();
      grids += '<a href="leagues/' + subPageUrl + '">';
      grids += '<div class="div' + id + '">';
      correctId = id.charAt(0);
      if (correctId == 1 || correctId > 6) {
        grids += '<img src="' + emblemUrl + '"width="200" height="100" />';
      } else {
        grids += '<img src="../' + emblemUrl + '" />';
      }

      grids += "<h2>" + name + "</h2>";
      grids += "</div>";
      grids += "</a>";
    });
  $("#parent").append(grids);
}
