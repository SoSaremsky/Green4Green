//temp lat < 40 = hot
//temp lat >= 40 = cold
//sunshine 29 < sun <=50   low
//sunshine 50 < sun <= 70  med
//sunshine 70 < sun <= 90  hi

function coordsByZipcode(){

	var location = {
		sunlevel: 0,
		commType: "",
		temp: ""
	};

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var reqhttp = new XMLHttpRequest();
	
  var zip = document.getElementById("zip").value	
  var url = "https://pcmiler.alk.com/apis/rest/v1.0/service.svc/locations?postcode=";
  url = url + zip;

  reqhttp.responseType = "json";
  reqhttp.open("GET", url, true);
  reqhttp.setRequestHeader("Content-type", "application/json");
	reqhttp.setRequestHeader("Authorization", "910771335EB6744C9F9449F304EC3FF5");
  reqhttp.send();


  var coords = [];

  reqhttp.onreadystatechange = processRequest;
  function processRequest(e) {
    if (reqhttp.readyState == 4 && reqhttp.status == 200) {
        var response = JSON.parse(reqhttp.responseText);
        coords[0] = response[0].Coords.Lat;
        coords[1] = response[0].Coords.Lon;
		var city = distanceCities(coords[0], coords[1]);
		var fs = require('fs');
		var textByLine = fs.readFileSync('data.txt').toString().split("\n");
		var parts = textByLine[city].toString().split(" #");
		var sunshine = parseFloat(parts[3].substring(10));
		var temp = 1; //cold
		if (sunshine >= 30 && sunshine <= 50)
			sunshine = 1;
		else if (sunshine > 50 && sunshine <= 70)
			sunshine = 2;
		else
			sunshine = 3;
		if (coords[0] > 45)
			temp = 2;
		location.sunlevel = sunshine;
		if(temp === 1){
			location.temp = "cold";
		}else{
			location.temp = "hot";
		}
		location.commType = document.getElementById("community").value;
		localStorage.setItem("loc", location);i
    }
  }
}

function distanceCities(lat1,lon1){
	var fs = require('fs');
	var textByLine = fs.readFileSync('data.txt').toString().split("\n");
	var init = textByLine[0].toString().split(" #");
	var smol = distance(lat1, lon1, parseFloat(init[1].substring(5)), parseFloat(init[2].substring(6)));
	var index = 0;
	for (var i = 1; i < 155; i++){
		parts = textByLine[i].toString().split(" #");
		var dist = distance(lat1, lon1, parseFloat(parts[1].substring(5)), parseFloat(parts[2].substring(6)));
		if (dist < smol){
			smol = dist;
			index = i;
		}
	}
	return index;
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

coordsByZipcode("90009");
