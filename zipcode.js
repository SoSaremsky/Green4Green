function coordsByZipcode(zip){
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var reqhttp = new XMLHttpRequest();

  var url = "https://pcmiler.alk.com/apis/rest/v1.0/service.svc/locations?postcode=";
  url = url + zip;

  reqhttp.responseType = "json";
  reqhttp.open("GET", url, true);
  reqhttp.setRequestHeader("Content-type", "application/json");
  reqhttp.setRequestHeader("Authorization", "910771335EB6744C9F9449F304EC3FF5");
  reqhttp.send(JSON.stringify({Locations:[{"Address": {"Zip":  }}]}));

  var coords = [];

  reqhttp.onreadystatechange = processRequest;
  function processRequest(e) {
    if (reqhttp.readyState == 4 && reqhttp.status == 200) {
        var response = JSON.parse(reqhttp.responseText);
        console.log(coords[0] = response[0].Coords.Lat);
        console.log(coords[1] = response[0].Coords.Lon);
    }
  }
  return coords;
}

function main(){
  var userCoords = coordsByZipcode("10603");
  console.log(userCoords[0]);
  console.log(userCoords[1]);
}

function coordsFromCity(city, state){
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
          console.log(response[0].Coords.Lat);
          console.log(response[0].Coords.Lon);
      }
    }
}

function distance(lat1, lon1, lat2, lon2) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		return dist;
	}
}

function sunshine(){
  var fs = require('fs');
  var textByLine = fs.readFileSync('sunshine.txt').toString().split("\n");
  for (var i = 0; i < 157; i++){
    //hehe(split[0].trim(),split[1].trim());
  }
}



main();
