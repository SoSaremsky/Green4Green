function budget(){

     var profile = {
       available: 0,
       food: 0,
       housing: 0,
       water: 0,
       electricity: 0,
       transportation: 0,
       apparel: 0,
       healthcare: 0,
       entertainment: 0,
       personal_care: 0,
       education: 0,
       donation: 0,
       insurance_taxes: 0,
       misc: 0,
       overbudget: 0
     };

     var inputs = [];
/*
     var salary;
     if(document.getElementById("salary") != ""){
       salary = Number(document.getElementById("salary"));
       inputs[0] = salary;
     }else{
       alert("Please input a salary.");
     }

     var food;
     if(document.getElementById("food") != ""){
       food = Number(document.getElementById("food"));
     }else{
       food = -1;
     }
     inputs[1] = food;

     var housing;
     if(document.getElementById("housing") != ""){
       housing = Number(document.getElementById("housing"));
     }else{
       housing = -1;
     }
     inputs[2] = housing;

     var water;
     if(document.getElementById("water") != ""){
       water = Number(document.getElementById("water"));
     }else{
       water = -1;
     }
     inputs[3] = water;

     var electricity;
     if(document.getElementById("electricity") != ""){
       electricity = Number(document.getElementById("electricity"));
     }else{
       electricity = -1;
     }
     inputs[4] = electricity;

     var transportation;
     if(document.getElementById("transportation") != ""){
       transportation = Number(document.getElementById("transportation"));
     }else{
       transportation = -1;
     }
     inputs[5] = transportation;

     var apparel;
     if(document.getElementById("apparel") != ""){
       apparel = Number(document.getElementById("apparel"));
     }else{
       apparel = -1;
     }
     inputs[6] = apparel;

     var healthcare;
     if(document.getElementById("healthcare") != ""){
       healthcare = Number(document.getElementById("healthcare"));
     }else{
       healthcare = -1;
     }
     inputs[7] = healthcare;

     var entertainment;
     if(document.getElementById("entertainment") != ""){
       entertainment = Number(document.getElementById("entertainment"));
     }else{
       entertainment = -1;
     }
     inputs[8] = entertainment;

     var pCare;
     if(document.getElementById("pCare") != ""){
       pCare = Number(document.getElementById("pCare"));
     }else{
       pCare = -1;
     }
     inputs[9] = pCare;

     var education;
     if(document.getElementById("education") != ""){
       education = Number(document.getElementById("education"));
     }else{
       education = -1;
     }
     inputs[10] = education;

     var donations;
     if(document.getElementById("donations") != ""){
       donations = Number(document.getElementById("donations"));
     }else{
       donations = -1;
     }
     inputs[11] = donations;

     var insTax;
     if(document.getElementById("insTax") != ""){
       insTax = Number(document.getElementById("insTax"));
     }else{
       insTax = -1;
     }
     inputs[12] = insTax;

     var misc;
     if(document.getElementById("misc") != ""){
       misc = Number(document.getElementById("misc"));
     }else{
       misc = -1;
     }
     inputs[13] = misc;

     var contribution;
     if(document.getElementById("contribution") != ""){
       contribution = Number(document.getElementById("contribution"));
     }else{
       contribution = -1;
     }
     inputs[14] = contribution;
     */

     var totalKnown = 0;
     for(var i = 1; i < inputs.length; i++){
       totalKnown += (inputs[i] * 12);
     }

     if(totalKnown > salary){
       profile.overbudget = 1;
     }

     /*Array values [0: Food, 1: Housing, 2: Water, 3: Electricity, 4: Transportation, 5: Apparel, 6: Healthcare, 7: Entertainment, 8: Personal Care, 9: Education,
     10: Donations, 11: Insurance/Tax, 12: Misc, 13: Contribution]*/

     //US averages
     var avgs = []
     var avgSalary = 74664;
     avgs[0] = 7687 / avgSalary; //Food
     avgs[1] = 16706 / avgSalary; //Housing
     avgs[2] = 840 / avgSalary; //Water
     avgs[3] = 1340 / avgSalary; //Electricity
     agvs[4] = 9049 / avgSalary; //Transportation
     avgs[5] = 1803 / avgSalary; //Apparel
     avgs[6] = 4612 / avgSalary; //Healthcare
     avgs[7] = 3031 / avgSalary; //Entertainment
     avgs[8] = 707 / avgSalary; //Personal Care
     avgs[9] = 1329 / avgSalary; //Education
     avgs[10] = 2081 / avgSalary; //Donations
     avgs[11] = 17320 / avgSalary; //InsTax
     avgs[12] = 1296 / avgSalary; //Misc
     avgs[13] = undefined; //Not necessary for avgs

     //User averages
     var userPcts = []
     userPcts[0] = (food * 12) / salary;
     userPcts[1] = (housing * 12) / salary;
     userPcts[2] = (water * 12) / salary;
     userPcts[3] = (electricity * 12) / salary;
     userPcts[4] = (transportation * 12) / salary;
     userPcts[5] = (apparel * 12) / salary;
     userPcts[6] = (healthcare * 12) / salary;
     userPcts[7] = (entertainment * 12) / salary;
     userPcts[8] = (pCare * 12) / salary;
     userPcts[9] = (education * 12) / salary;
     userPcts[10] = (donations * 12) / salary;
     userPcts[11] = (insTax * 12) / salary;
     userPcts[12] = (misc * 12) / salary;
     userPcts[13] = (contribution * 12) / salary;

     //Gets what percent of the USERS salary is accounted for by fields they entered (Based on what they didn't enter)
     var accounted = 0;
     var unaccountedModel = 0;
     for(var i = 1; i < inputs.lenght; i++){
        if(inputs[i] >= 0){
          accounted += userPcts[i-1];
        }else{
          unaccountedModel += avgs[i-1];
        }
     }

     //IF ANY NUMBERS ARE INCORRECT, IT IS PROBABLY THIS CALCULATION!!!
     //PLEASE BE ADVISED LATER JACK!!!!
     //IF UR NOT JACK AND U READ THIS AND ARE DEBUGGING, PLEASE LET JACK KNOW HE FORKED UP!!!!

     //Adds "expected" values to the input array
     var unaccounted = 100 - accounted;
     var extra = (1 - (6863 / avgSalary)) * (salary - totalKnown);
     for(var i = 1; i < inputs.lenght; i++){
        if(inputs[i] === -1){
          var thisAvg = unaccounted / unaccountedModel * avgs[i-1];
          inputs[i] = thisAvg * extra;
          userPcts[i-1] = (inputs[i] * 12) / salary;
        }
     }

     for(var i = 0; i < userPcts.length - 1; i++){
       if(userPcts[i] > (avgs[i] * 1.05)){
         if(i === 0){
           profile.food = 1;
         }else if(i === 1){
           profile.housing = 1;
         }else if(i === 2){
           profile.water = 1;
         }else if(i === 3){
           profile.electricity = 1;
         }else if(i === 4){
           profile.transportation = 1;
         }else if(i === 5){
           profile.apparel = 1;
         }else if(i === 6){
           profile.healthcare = 1;
         }else if(i === 7){
           profile.entertainment = 1;
         }else if(i === 8){
           profile.personal_care = 1;
         }else if(i === 9){
           profile.education = 1;
         }else if(i === 10){
           profile.donation = 1;
         }else if(i === 11){
           profile.insurance_taxes = 1;
         }else if(i === 12){
           profile.misc = 1;
         }
       }
     }

     var expectedAccounted = 0;
     for(var i = 1; i < inputs.length - 1; i++){
       expectedAccounted += (inputs[i] * 12);
     }

     if(inputs[14] !== -1){
       profile.available = inputs[14];
     }else{
       profile.available = (salary - expectedAccounted) / 12;
     }
     return profile;
}













var totalList = [];

/// TEMPLATE
/*
var method {

  category: food, water, electricity, transportation, apparel, entertainment,
            personal care, donations, misc
  price: low, medium, high
  commtype: urban, suburban, rural
  sun: 1, 2, 3
  temp: low, medium, high
  mdescription: main description
  edescription: explanation
}
*/

// CHANGE THIS LATER
var monthlyDollars = 10000;

//
// FOOD
//

var meatType = {

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase less red meat and more white meat and fish.",
  edescription: "Red meat production is often associated with polllution through fossil fuel usage, animal methane, effluent waste, and water and land. Chicken, turkey, and salmon are the 3 most energy efficient meats. They are also cheaper than red meats, saving money."

}

totalList.push(meatType);

var reusableBag = {

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use reusable bags.",
  edescription: "Reusable bags prevent plastic bags from being used in excess and save money in the long run (many states even have a tax for using plastic bags)."

}

totalList.push(reusableBag);

var ownFood ={

  category: "food",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Buy more of your own food.",
  edescription: "Reusable bags prevent plastic bags from being used in excess and save money in the long run (many states even have a tax for using plastic bags)."

}

totalList.push(ownFood);

var bulkCook ={

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Buy and cook food in bulk",
  edescription: "Buying food in bulk tends to be cheaper, and cooking food in bulk saves heat and electricity as well."

}

totalList.push(bulkCook);

//
// WATER
//

var shortShower= {

  category: "water",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Take shorter showers",
  edescription: "Most showers use 2.5 gallons of water per minute. Taking shorter showers will save both water and money from the water bill."

}

totalList.push(shortShower);

var teethBrush ={

  category: "water",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Turn off the water while brushing your teeth",
  edescription: "On average, people who don't turn the water off while brushing their teeth use 1000 gallons more per year. Save water and electricity!"

}

totalList.push(teethBrush);

var showerHead ={

  category: "water",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase a WaterSense showerhead",
  edescription: "WaterSense showerheads save families an average of 2900 gallons of water per year, saving both water and money."

}

totalList.push(showerHead);

var waterButt ={

  category: "water",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Install a water butt.",
  edescription: "Water butts collect rainwater. Use this water to clean your car, water your plants, etc. It saves both money and water."

}

totalList.push(waterButt);

var washMachine ={

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an Energy Star washing machine",
  edescription: "On average, you save about $35 a year on utility bills compared to a standard model, as well as 2000 gallons of water per year."

}

totalList.push(washMachine);

var toilet ={

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an energy efficient toilet",
  edescription: "High efficiency toilets save an average of 3,000 gallons per year."

}

totalList.push(toilet);

var xeriscaping ={

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "hot",
  mdescription: "Xeriscape your property.",
  edescription: "Xeriscaping can reduce water usage in your property by between 50-75% (averaging 60%)."

}

totalList.push(xeriscaping);

//
// ELECTRICITY
//

var drying ={

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Hang clothes to dry",
  edescription: "Dryers use a lot of electricity. Instead of using a dryer, try hanging clothes to dry to save electricity."

}

totalList.push(drying);

var thermostat= {

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Don't adjust your thermostat as much on hot or cold days.",
  edescription: "Heating and cooling costs constitute nearly half of an average home's utility bills. These reductions can save a significant amount of electricity."

}

totalList.push(thermostat);

var lightBulb ={

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use energy efficient light bulbs.",
  edescription: "Halogen incadescent buls, compact fluorescent lights, and light-emitting diode bulbs use anywhere from 25-80% less electricity and last 3-25x longer."

}

totalList.push(lightBulb);

var powerStrip ={

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase smart power strips",
  edescription: "It is estimated that 75% of the energy used to power household electronics is consumed when they are switched off, costing up to $200 per year. Smart power strips eliminate that problem."

}

totalList.push(powerStrip);

var lightSwitch ={

  category: "electricity",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use smart light switches.",
  edescription: "Installing motion sensored light switches can save up to $100 a year and will turn off autoomatically so you don't waste electricity."

}

totalList.push(lightSwitch);

var heatWindows= {

  category: "electricity",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "cold",
  mdescription: "Install energy efficient windows that contain heat.",
  edescription: "Heat escaping through windows can amount to 10-25% a total heating bill. Energy efficient windows with \"low-e\" coatings can reduce heat loss by 10-20%."

}

totalList.push(heatWindows);

var coolWindows ={

  category: "electricity",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "hot",
  mdescription: "Install energy efficient windows that prevent heat gain.",
  edescription: "Heat gain through windows can be a problem in warmer climates. Low-e coatings on windows can reduce heat gain by reflecting more light, and can save $20-$95 each year on utility bills."

}

totalList.push(coolWindows);

var car= {

  category: "electricity",
  price: "high",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Save for an energy efficient car.",
  edescription: "If you save for " + (Math.ceil(25000/monthlyDollars)).toString(10) + " months, you can buy an energy efficient car and save both energy and money."

}

totalList.push(car);

var solar ={

  category: "electricity",
  price: "high",
  commtype: "not urban",
  sun: "not 1",
  temp: "all",
  mdescription: "Install solar panels.",
  edescription: "If you save for " + (Math.ceil(12000/monthlyDollars)).toString(10) + " months, you can afford to install solar panels and save both energy and money."

}

totalList.push(solar);

//
// APPAREL
//

var pact ={

  category: "apparel",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Pact clothing.",
  edescription: "Organic, GOTS Certified, fair trade, eco-friendly, and cheap clothing."

}

totalList.push(pact);

var thredUP ={

  category: "apparel",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "thredUP clothing.",
  edescription: "Upcycling clothing at a relatively low cost (90% markdown)"

}

totalList.push(thredUP);

var everlane ={

  category: "apparel",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Everlane clothing.",
  edescription: "Ethically made adult apparel for a moderate cost."

}

totalList.push(everlane);

var tentree ={

  category: "apparel",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tentree clothing.",
  edescription: "Ethically made, organic, eco-friendly, gives back to the environment by planting ten trees for every item purchased. They have planted over 35 million trees around the world. Moderately priced clothing."

}

totalList.push(tentree);

var able ={

  category: "apparel",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Able clothing.",
  edescription: "Artisan-made in Peru with fair labor practices. Women are hired and paid well to help them provide for themselves to end generational poverty."

}

totalList.push(able);

var peopleTree= {

  category: "apparel",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "People Tree clothing.",
  edescription: "Fair trade, certified organic clothing made to last. Fairly pricey but will last years."

}

totalList.push(peopleTree);

//
// PERSONAL CARE
//

var toothpaste ={

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tom's of Maine toothpaste",
  edescription: "Relatively cheap toothpaste from an eco-friendly company with good business practices. They only use natural ingredients and use recycled packaging and donate 10% of profits to non-profits."

}

totalList.push(toothpaste);

var deoderant ={

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tom's of Maine deoderant.",
  edescription: "Natural long lasting deoderant that is aluminum-free with a recyclable plastic container."

}

totalList.push(deoderant);

var haircare ={

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Burt's Bees Shampoo and Conditioner.",
  edescription: "Uses post-consumer recycled materials in their packaging and the container is recyclable once it's empty. Good working conditions and no animal testing. They also donate 10% of their online sales to non-profits."

}

totalList.push(haircare);

var soap= {

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Organic pure castile liquid soap.",
  edescription: "Cheap, doesn't use chemical-laden fragrance. Vegetable-based, organic, and used for anything: hand-soap, dish soap, etc."

}

totalList.push(soap);


//
// TRANSPORTATION
//

var nonElectric ={

  category: "transportation",
  price: "low",
  commtype: "urban",
  sun: "all",
  temp: "all",
  mdescription: "Find other methods of transportation.",
  edescription: "Walk, bike, skateboard, etc. Not using public transportation or a car is an energy efficient way to get around."

}

totalList.push(nonElectric);

var carpool ={

  category: "transportation",
  price: "low",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Carpool.",
  edescription: "Carpooling with two or three people will cut back significantly on car emissions."

}

totalList.push(nonElectric);

var publicTransport ={

  category: "transportation",
  price: "medium",
  commtype: "urban",
  sun: "all",
  temp: "all",
  mdescription: "Use public transport.",
  edescription: "The more people take busses and subways, the fewer cars are on the road, lowering emissions."

}

totalList.push(publicTransport);

var electricVehicle ={

  category: "transportation",
  price: "high",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an energy efficient car.",
  edescription: "If you save for " + (Math.ceil(25000/monthlyDollars)).toString(10) + " months, you can buy an energy efficient car and save both energy and money."

}

totalList.push(publicTransport);

//
// STUFF
//

function returnMainList(){
  return totalList;
}

function getListPrice(worklist, pricerange, all){
  var retlist = [];
  for(var sol in worklist){
    if(sol.price === pricerange || all){
      retlist.push(sol);
    }
  }
  return retlist;
}

function getListCategory(worklist, catArr, all){
  var retlist = [];
  for(var sol in worklist){
    if(sol.category === catArr[0] && catArr[0] === 1){
      retlist.push(sol);
    }else if(sol.category === catArr[1] && catArr[1] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[1] && catArr[1] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[2] && catArr[2] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[3] && catArr[3] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[4] && catArr[4] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[5] && catArr[5] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[6] && catArr[6] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[7] && catArr[7] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[8] && catArr[8] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[9] && catArr[9] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[10] && catArr[10] === 1){
      retList.push(sol);
    }else if(sol.category === catArr[11] && catArr[11] === 1){
      retList.push(sol);
    }
  }
  return retlist;
}

function getListCommType(worklist, comm, all){
  var retlist = [];
  for(var sol in worklist){
    if(sol.commtype === comm || all){
      retlist.push(sol);
    }
  }
  return retlist;
}

function getListSun(worklist, sun, all){
  var retlist = [];
  for(var sol in worklist){
    if(sol.sun === sun || all){
      retlist.push(sol);
    }
  }
  return retlist;
}

function getListTemp(worklist, temp, all){
  var retlist = [];
  for(var sol in worklist){
    if(sol.temp === temp || all){
      retlist.push(sol);
    }
  }
  return retlist;
}






















let duck;
fetch("/budData")
  .then(response=>resonse.json)
  .then(response=>duck =response)
  .catch((err)=>console.log(err));
  console.log(duck);

function overbudget(profile){
  if (profile.overbudge === 1){
    return true;
  }
  return false;
}

function getList(profile){
  var catList = ( profile.food, profile.housing, profile.water, profile.electricity, profile.transportation, profile.apparel, profile.healthcare, profile.entertainment, profile.personal_care, profile.education, profile.donation, profile.insurance_taxes, profile.misc);
  return getListTemp();
}

function main(){
  var profile = budget();

  if (overbudget(profile)){
  //  |||FIGURE OUT WITH ILANA|||
  }


}
