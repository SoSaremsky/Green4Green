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
var monthlyDollars = 10,000;

//
// FOOD
//

var meatType {

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase less red meat and more white meat and fish.",
  edescription: "Red meat production is often associated with polllution through fossil fuel usage, animal methane, effluent waste, and water and land. Chicken, turkey, and salmon are the 3 most energy efficient meats. They are also cheaper than red meats, saving money."

}

var totalList[0] = meatType;

var reusableBag {

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use reusable bags.",
  edescription: "Reusable bags prevent plastic bags from being used in excess and save money in the long run (many states even have a tax for using plastic bags)."

}

var totalList[1] = reusableBag;

var ownFood {

  category: "food",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Buy more of your own food.",
  edescription: "Reusable bags prevent plastic bags from being used in excess and save money in the long run (many states even have a tax for using plastic bags)."

}

var totalList[2] = ownFood;

var bulkCook {

  category: "food",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Buy and cook food in bulk",
  edescription: "Buying food in bulk tends to be cheaper, and cooking food in bulk saves heat and electricity as well."

}

var totalList[3] = bulkCook;

//
// WATER
//

var shortShower {

  category: "water",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Take shorter showers",
  edescription: "Most showers use 2.5 gallons of water per minute. Taking shorter showers will save both water and money from the water bill."

}

var totalList[4] = shortShower;

var teethBrush {

  category: "water",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Turn off the water while brushing your teeth",
  edescription: "On average, people who don't turn the water off while brushing their teeth use 1000 gallons more per year. Save water and electricity!"

}

var totalList[5] = teethBrush;

var showerHead {

  category: "water",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase a WaterSense showerhead",
  edescription: "WaterSense showerheads save families an average of 2900 gallons of water per year, saving both water and money."

}

var totalList[6] = showerHead;

var waterButt {

  category: "water",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Install a water butt.",
  edescription: "Water butts collect rainwater. Use this water to clean your car, water your plants, etc. It saves both money and water."

}

var totalList[7] = waterButt;

var washMachine {

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an Energy Star washing machine",
  edescription: "On average, you save about $35 a year on utility bills compared to a standard model, as well as 2000 gallons of water per year."

}

var totalList[8] = washMachine;

var toilet {

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an energy efficient toilet",
  edescription: "High efficiency toilets save an average of 3,000 gallons per year."

}

var totalList[9] = toilet;

var xeriscaping {

  category: "water",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "hot",
  mdescription: "Xeriscape your property.",
  edescription: "Xeriscaping can reduce water usage in your property by between 50-75% (averaging 60%)."

}

var totalList[10] = xeriscaping;

//
// ELECTRICITY
//

var drying {

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Hang clothes to dry",
  edescription: "Dryers use a lot of electricity. Instead of using a dryer, try hanging clothes to dry to save electricity."

}

var totalList[11] = drying;

var thermostat {

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Don't adjust your thermostat as much on hot or cold days.",
  edescription: "Heating and cooling costs constitute nearly half of an average home's utility bills. These reductions can save a significant amount of electricity."

}

var totalList[12] = thermostat;

var lightBulb {

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use energy efficient light bulbs.",
  edescription: "Halogen incadescent buls, compact fluorescent lights, and light-emitting diode bulbs use anywhere from 25-80% less electricity and last 3-25x longer."

}

var totalList[13] = lightBulb;

var powerStrip {

  category: "electricity",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Purchase smart power strips",
  edescription: "It is estimated that 75% of the energy used to power household electronics is consumed when they are switched off, costing up to $200 per year. Smart power strips eliminate that problem."

}

var totalList[14] = powerStrip;

var lightSwitch {

  category: "electricity",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Use smart light switches.",
  edescription: "Installing motion sensored light switches can save up to $100 a year and will turn off autoomatically so you don't waste electricity."

}

var totalList[15] = lightSwitch;

var heatWindows {

  category: "electricity",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "cold",
  mdescription: "Install energy efficient windows that contain heat.",
  edescription: "Heat escaping through windows can amount to 10-25% a total heating bill. Energy efficient windows with \"low-e\" coatings can reduce heat loss by 10-20%."

}

var totalList[16] = heatWindows;

var coolWindows {

  category: "electricity",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "hot",
  mdescription: "Install energy efficient windows that prevent heat gain.",
  edescription: "Heat gain through windows can be a problem in warmer climates. Low-e coatings on windows can reduce heat gain by reflecting more light, and can save $20-$95 each year on utility bills."

}

var totalList[17] = coolWindows;

var car {

  category: "electricity",
  price: "high",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Save for an energy efficient car.",
  edescription: "If you save for " + str(Math.ciel(25000/monthlyDollars)) + " months, you can buy an energy efficient car and save both energy and money."

}

var totalList[18] = car;

var solar {

  category: "electricity",
  price: "high",
  commtype: "not urban",
  sun: "not 1",
  temp: "all",
  mdescription: "Install solar panels.",
  edescription: "If you save for " + str(Math.ciel(12000/monthlyDollars)) + " months, you can afford to install solar panels and save both energy and money."

}

var totalList[19] = solar;

//
// APPAREL
//

var pact {

  category: "apparel",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Pact clothing.",
  edescription: "Organic, GOTS Certified, fair trade, eco-friendly, and cheap clothing."

}

var totalList[20] = pact;

var thredUP {

  category: "apparel",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "thredUP clothing.",
  edescription: "Upcycling clothing at a relatively low cost (90% markdown)"

}

var totalList[21] = thredUP;

var everlane {

  category: "apparel",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Everlane clothing.",
  edescription: "Ethically made adult apparel for a moderate cost."

}

var totalList[22] = everlane;

var tentree {

  category: "apparel",
  price: "medium",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tentree clothing.",
  edescription: "Ethically made, organic, eco-friendly, gives back to the environment by planting ten trees for every item purchased. They have planted over 35 million trees around the world. Moderately priced clothing."

}

var totalList[23] = tentree;

var able {

  category: "apparel",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Able clothing.",
  edescription: "Artisan-made in Peru with fair labor practices. Women are hired and paid well to help them provide for themselves to end generational poverty."

}

var totalList[24] = able;

var peopleTree {

  category: "apparel",
  price: "high",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "People Tree clothing.",
  edescription: "Fair trade, certified organic clothing made to last. Fairly pricey but will last years."

}

var totalList[25] = peopleTree;

//
// PERSONAL CARE
//

var toothpaste {

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tom's of Maine toothpaste",
  edescription: "Relatively cheap toothpaste from an eco-friendly company with good business practices. They only use natural ingredients and use recycled packaging and donate 10% of profits to non-profits."

}

var totalList[26] = toothpaste;

var deoderant {

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Tom's of Maine deoderant.",
  edescription: "Natural long lasting deoderant that is aluminum-free with a recyclable plastic container."

}

var totalList[27] = deoderant;

var haircare {

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Burt's Bees Shampoo and Conditioner.",
  edescription: "Uses post-consumer recycled materials in their packaging and the container is recyclable once it's empty. Good working conditions and no animal testing. They also donate 10% of their online sales to non-profits."

}

var totalList[28] = haircare;

var soap {

  category: "personal care",
  price: "low",
  commtype: "all",
  sun: "all",
  temp: "all",
  mdescription: "Organic pure castile liquid soap.",
  edescription: "Cheap, doesn't use chemical-laden fragrance. Vegetable-based, organic, and used for anything: hand-soap, dish soap, etc."

}

var totalList[29] = soap;


//
// TRANSPORTATION
//

var nonElectric {

  category: "transportation",
  price: "low",
  commtype: "urban",
  sun: "all",
  temp: "all",
  mdescription: "Find other methods of transportation.",
  edescription: "Walk, bike, skateboard, etc. Not using public transportation or a car is an energy efficient way to get around."

}

var totalList[30] = nonElectric;

var carpool {

  category: "transportation",
  price: "low",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Carpool.",
  edescription: "Carpooling with two or three people will cut back significantly on car emissions."

}

var totalList[31] = nonElectric;

var publicTransport {

  category: "transportation",
  price: "medium",
  commtype: "urban",
  sun: "all",
  temp: "all",
  mdescription: "Use public transport.",
  edescription: "The more people take busses and subways, the fewer cars are on the road, lowering emissions."

}

var totalList[32] = publicTransport;

var electricVehicle {

  category: "transportation",
  price: "high",
  commtype: "not urban",
  sun: "all",
  temp: "all",
  mdescription: "Purchase an energy efficient car.",
  edescription: "If you save for " + str(Math.ciel(25000/monthlyDollars)) + " months, you can buy an energy efficient car and save both energy and money."

}

var totalList[33] = publicTransport;

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
    if(sol.sun === not 1 || all){
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
