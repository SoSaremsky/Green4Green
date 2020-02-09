//temp lat < 40 = hot
//temp lat >= 40 = cold
//sunshine 29 < sun <=50   low
//sunshine 50 < sun <= 70  med
//sunshine 70 < sun <= 90  hi

/*function coordsByZipcode(){

	var location = {
		sunlevel: 0,
		commType: "",
		temp: ""
	};

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var reqhttp = new XMLHttpRequest();

  var zip = document.getElementById("zip").value
  var url = "https://cors-anywhere.herokuapp.com/https://pcmiler.alk.com/apis/rest/v1.0/service.svc/locations?postcode=13902";
  url = url + zip;


//  reqhttp.responseType = "application/json";
  reqhttp.open("GET", url);
  //reqhttp.setRequestHeader("Content-type", "application/json");
	reqhttp.setRequestHeader("Authorization", "910771335EB6744C9F9449F304EC3FF5");
  reqhttp.setRequestHeader("Origin", "http://localhost")
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
*/
function distanceCities(lat1,lon1){
	var fs = require('fs');
	var textByLine = fs.readFileSync('data.txt').toString().split("\n");
  console.log(fs.readFileSync('data.txt').toString().split(" #"))
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
/*
function coordsFromCity(city, state){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xml = new XMLHttpRequest();
    var url = "https://cors-anywhere.herokuapp.com/https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/locations?city="
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
*/
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

//coordsByZipcode("90009");

distanceCities(45, -45);

/*{
  'name: Los Angeles',
  'lat: 33.9771',
  'long: -118.241559',
  'sunshine: 73',
  'name: Grand Junction',
  'lat: 39.040343',
  'long: -108.516074',
  'sunshine: 71',
  'name: Flagstaff',
  'lat: 35.285217',
  'long: -111.748916',
  'sunshine: 78',
  'name: Milford',
  'lat: 33.91861',
  'long: -94.08528',
  'sunshine: 70',
  'name: Redding',
  'lat: 35.68',
  'long: -93.77694',
  'sunshine: 88',
  'name: Little Rock',
  'lat: 31.11444',
  'long: -87.38889',
  'sunshine: 62',
  'name: Odessa',
  'lat: 39.457332',
  'long: -75.661317',
  'sunshine: 74',
  'name: Amarillo',
  'lat: 35.220769',
  'long: -101.83102',
  'sunshine: 73',
  'name: Denver',
  'lat: 32.99389',
  'long: -85.60667',
  'sunshine: 69',
  'name: Miami',
  'lat: 33.399217',
  'long: -110.868724',
  'sunshine: 70',
  'name: Las Vegas',
  'lat: 36.173959',
  'long: -115.12302',
  'sunshine: 85',
  'name: Winnemucca',
  'lat: 40.973581',
  'long: -117.734304',
  'sunshine: 68',
  'name: Yuma',
  'lat: 32.699185',
  'long: -114.574888',
  'sunshine: 90',
  'name: Roswell',
  'lat: 34.2075',
  'long: -86.53667',
  'sunshine: 74',
  'name: Concordia',
  'lat: 39.570834',
  'long: -97.662543',
  'sunshine: 67',
  'name: Lake Charles',
  'lat: 28.1163',
  'long: -82.4811',
  'sunshine: 72',
  'name: Cheyenne',
  'lat: 39.17667',
  'long: -98.63861',
  'sunshine: 66',
  'name: Lubbock',
  'lat: 33.577841',
  'long: -101.855143',
  'sunshine: 72',
  'name: Abilene',
  'lat: 36.14556',
  'long: -119.05278',
  'sunshine: 70',
  'name: Phoenix',
  'lat: 33.451095',
  'long: -112.077428',
  'sunshine: 85',
  'name: Pueblo',
  'lat: 38.270621',
  'long: -104.607368',
  'sunshine: 76',
  'name: Tucson',
  'lat: 32.210636',
  'long: -110.967733',
  'sunshine: 85',
  'name: Reno',
  'lat: 38.95278',
  'long: -77.07861',
  'sunshine: 79',
  'name: Dodge City',
  'lat: 34.178709',
  'long: -86.847497',
  'sunshine: 70',
  'name: Ely',
  'lat: 41.873619',
  'long: -91.585177',
  'sunshine: 73',
}
*/
