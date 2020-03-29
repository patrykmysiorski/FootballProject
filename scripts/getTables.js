var scriptID = document.getElementById("getTables");
var leagueCode = scriptID.getAttribute("data");
var rawbase =
  "https://raw.githubusercontent.com/patrykmysiorski/FootballProject/add-standings-for-leagues/jsons/";
var jsonloc = "";

let championsSpots = [];
let championsQualificationSpots = [];
let europaLeagueSpots = [];
let europaQualifySpots = [];
let degradationSpots = [];
let degradationPlayOffSpots = [];

switch (leagueCode) {
  case "PD":
    jsonloc = "primeradivision.json";
    championsSpots = [1, 2, 3, 4];
    europaLeagueSpots = [5];
    europaQualifySpots = [6];
    degradationSpots = [18, 19, 20];
    break;
  case "PL":
    jsonloc = "premierleague.json";
    championsSpots = [1, 2, 3, 4];
    europaLeagueSpots = [5];
    europaQualifySpots = [];
    degradationSpots = [18, 19, 20];
    break;
  case "BL1":
    jsonloc = "bundesliga.json";
    championsSpots = [1, 2, 3, 4];
    europaLeagueSpots = [5];
    europaQualifySpots = [6];
    degradationPlayOffSpots = [16];
    degradationSpots = [17, 18];
    break;
  case "SA":
    jsonloc = "seriea.json";
    championsSpots = [1, 2, 3, 4];
    europaLeagueSpots = [5];
    europaQualifySpots = [6];
    degradationSpots = [18, 19, 20];
    break;
  case "FL1":
    jsonloc = "ligue1.json";
    championsSpots = [1, 2];
    championsQualificationSpots = [3];
    europaLeagueSpots = [4];
    degradationPlayOffSpots = [18];
    degradationSpots = [19, 20];
    break;
  case "CL":
    jsonloc = "championsleague.json";
    championsSpots = [1, 2];
    europaLeagueSpots = [3];
    break;
  case "WC":
    jsonloc = "worldcup.json";
    championsSpots = [1, 2];
    break;
  case "EC":
    jsonloc = "euro.json";
    championsSpots = [1, 2];
    europaLeagueSpots = [3];
    break;
  default:
}

var table = "";
const blueCellPrefix = '<td class="blueRow">';
const championsLeagueSpot = '<td class="championsLeagueSpot">';
const europaLeagueSpot = '<td class="europaLeagueSpot">';
const championsQualificationSpot =
  '<td class="championsLeagueQualificationSpot">';
const europaQualifySpot = '<td class="europaLeagueQualfication">';
const degradationSpot = '<td class="degradationSpot">';
const degradationPlayOffSpot = '<td class="degradationPlayOffSpot">';
const whiteCellPrefix = '<td class="whiteRow">';
const cellSuffix = "</td>";
const imgTagPrefix = '<img src="';
const imgTagSuffix = '"width="20" height="20" />';
let cell = "";

$(document).ready(function() {
  $.getJSON(rawbase + jsonloc, function(data) {
    var standings = data.standings[0].table;

    $.each(standings, function(key, value) {
      table += "<tr>";

      if (championsSpots.includes(value.position)) {
        //CL SPOTS
        cell = championsLeagueSpot;
      } else if (championsQualificationSpots.includes(value.position)) {
        //CLQ SPOTS
        cell = championsQualificationSpot;
      } else if (europaLeagueSpots.includes(value.position)) {
        //EL SPOTS
        cell = europaLeagueSpot;
      } else if (europaQualifySpots.includes(value.position)) {
        //ELQ SPOTS
        cell = europaQualifySpot;
      } else if (degradationPlayOffSpots.includes(value.position)) {
        //DPO SPOTS
        cell = degradationPlayOffSpot;
      } else if (degradationSpots.includes(value.position)) {
        //D SPOTS
        cell = degradationSpot;
      } else {
        if (value.position % 2 == 1) {
          cell = blueCellPrefix;
        } else {
          cell = whiteCellPrefix;
        }
      }
      // }
      table += cell + value.position + cellSuffix;

      if (value.position % 2 == 1) {
        cell = blueCellPrefix;
      } else {
        cell = whiteCellPrefix;
      }
      table +=
        cell + imgTagPrefix + value.team.crestUrl + imgTagSuffix + cellSuffix;
      table += cell + value.team.name + cellSuffix;
      table += cell + value.playedGames + cellSuffix;
      table += cell + value.won + cellSuffix;
      table += cell + value.draw + cellSuffix;
      table += cell + value.lost + cellSuffix;
      table += cell + value.points + cellSuffix;
      table += cell + value.goalsFor + cellSuffix;
      table += cell + value.goalsAgainst + cellSuffix;
      table += cell + value.goalDifference + cellSuffix;
      table += "</tr>";
    });
    $(".tg").append(table);
  });
});
