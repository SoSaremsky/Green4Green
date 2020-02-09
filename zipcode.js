var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var reqhttp = new XMLHttpRequest();

var url = "https://pcmiler.alk.com/apis/rest/v1.0/service.svc/locations?postcode=";
//var zip = document.getElementById("zip");
var zip = 10603
url = url + zip;


reqhttp.responseType = "json";
reqhttp.open("GET", url, true);
reqhttp.setRequestHeader("Content-type", "application/json");
reqhttp.setRequestHeader("Authorization", "910771335EB6744C9F9449F304EC3FF5");

reqhttp.send();

reqhttp.onreadystatechange = processRequest;

function processRequest(e) {
  if (reqhttp.readyState == 4 && reqhttp.status == 200) {
      var response = JSON.parse(reqhttp.responseText);
      console.log(response[0].Coords.Lat);
      console.log(response[0].Coords.Lon);
  }
}
