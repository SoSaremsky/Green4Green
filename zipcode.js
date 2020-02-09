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


function hehe(city, state){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xml = new XMLHttpRequest();
    var url = "https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations?city="
    url = url + city;
    var url2 = "&state="
    url2 = url2 + state;
    url = url + url2;

    xml.responseType = "json";
    xml.open("GET", url, true);
    xml.setRequestHeader("Content-type", "application/json");
    xml.setRequestHeader("Authorization", "910771335EB6744C9F9449F304EC3FF5");

    xml.send();

    xml.onreadystatechange = processRequest;

    function processRequest(e) {
      if (xml.readyState == 4 && xml.status == 200) {
          var response = JSON.parse(xml.responseText);
          console.log(city);
          console.log(response[0].Coords.Lat);
          console.log(response[0].Coords.Lon);
      }
    }
}

function helppp(){
  var fs = require('fs');
  var textByLine = fs.readFileSync('sunshine.txt').toString().split("\n");
  for (var i = 0; i < 157; i++){
    var split = textByLine[i].toString().replace(",","\t").split("\t");
    console.log(split[2].trim().substring(0,2));
    //hehe(split[0].trim(),split[1].trim());
  }
}
helppp()
