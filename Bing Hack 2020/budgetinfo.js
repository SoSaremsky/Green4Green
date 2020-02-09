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

     var inputs = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

     var salary;
     if(document.getElementById("salary").value != ""){
       salary = Number(document.getElementById("salary").value);
       inputs[0] = salary;
     }else{
       alert("Please input a salary.");
     }

     var food;
     if(document.getElementById("food").value != ""){
       food = Number(document.getElementById("food").value);
     }else{
       food = -1;
     }
     inputs[1] = food;

     var housing;
     if(document.getElementById("housing").value != ""){
       housing = Number(document.getElementById("housing").value);
     }else{
       housing = -1;
     }
     inputs[2] = housing;

     var water;
     if(document.getElementById("water").value != ""){
       water = Number(document.getElementById("water").value);
     }else{
       water = -1;
     }
     inputs[3] = water;

     var electricity;
     if(document.getElementById("electricity").value != ""){
       electricity = Number(document.getElementById("electricity").value);
     }else{
       electricity = -1;
     }
     inputs[4] = electricity;

     var transportation;
     if(document.getElementById("transportation").value != ""){
       transportation = Number(document.getElementById("transportation").value);
     }else{
       transportation = -1;
     }
     inputs[5] = transportation;

     var apparel;
     if(document.getElementById("apparel").value != ""){
       apparel = Number(document.getElementById("apparel").value);
     }else{
       apparel = -1;
     }
     inputs[6] = apparel;

     var healthcare;
     if(document.getElementById("healthcare").value != ""){
       healthcare = Number(document.getElementById("healthcare").value);
     }else{
       healthcare = -1;
     }
     inputs[7] = healthcare;

     var entertainment;
     if(document.getElementById("entertainment").value != ""){
       entertainment = Number(document.getElementById("entertainment").value);
     }else{
       entertainment = -1;
     }
     inputs[8] = entertainment;

     var pCare;
     if(document.getElementById("pCare").value != ""){
       pCare = Number(document.getElementById("pCare").value);
     }else{
       pCare = -1;
     }
     inputs[9] = pCare;

     var education;
     if(document.getElementById("education").value != ""){
       education = Number(document.getElementById("education").value);
     }else{
       education = -1;
     }
     inputs[10] = education;

     var donations;
     if(document.getElementById("donations").value != ""){
       donations = Number(document.getElementById("donations").value);
     }else{
       donations = -1;
     }
     inputs[11] = donations;

     var insTax;
     if(document.getElementById("insTax").value != ""){
       insTax = Number(document.getElementById("insTax").value);
     }else{
       insTax = -1;
     }
     inputs[12] = insTax;

     var misc;
     if(document.getElementById("misc").value != ""){
       misc = Number(document.getElementById("misc").value);
     }else{
       misc = -1;
     }
     inputs[13] = misc;

     var contribution;
     if(document.getElementById("contribution").value != ""){
       contribution = Number(document.getElementById("contribution").value);
     }else{
       contribution = -1;
     }
     inputs[14] = contribution;

     var totalKnown = 0;
     for(var i = 1; i < inputs.length; i++){
       if(inputs[i] >= 0){
         totalKnown += (inputs[i] * 12);
       }
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
     avgs[4] = 9049 / avgSalary; //Transportation
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
     var userPcts = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
     for(var i = 1; i < 15; i++){
       if(inputs[i] >= 0){
         userPcts[i-1] = (inputs[i] * 12) / salary
       }
     }

     //Gets what percent of the USERS salary is accounted for by fields they entered (Based on what they didn't enter)
     var accounted = 0;
     var unaccountedModel = 0;
     for(var i = 1; i < 14; i++){
        if(inputs[i] >= 0){
          accounted += userPcts[i-1];
        }else{
          unaccountedModel += avgs[i-1];
        }
     }

     unaccountedModel += (6863 / avgSalary)

     //IF ANY NUMBERS ARE INCORRECT, IT IS PROBABLY THIS CALCULATION!!!
     //PLEASE BE ADVISED LATER JACK!!!!
     //IF UR NOT JACK AND U READ THIS AND ARE DEBUGGING, PLEASE LET JACK KNOW HE FORKED UP!!!!

     //Adds "expected" values to the input array
     var unaccounted = 1 - accounted;
     var extra = (1 - (6863 / avgSalary)) * (salary - totalKnown);
     for(var i = 1; i < 14; i++){
        if(inputs[i] === -1){
          var thisAvg = unaccounted / unaccountedModel * avgs[i-1];
          inputs[i] = thisAvg * extra;
          userPcts[i-1] = (inputs[i] * 12) / salary;
        }
     }

     for(var i = 0; i < userPcts.length - 1; i++){
       if((userPcts[i] / 12) > (avgs[i] * 1.1)){
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
     for(var i = 1; i < 15 - 1; i++){
       expectedAccounted += (inputs[i]);
     }

     if(inputs[14] !== -1){
       profile.available = inputs[14];
     }else{
       profile.available = (salary - expectedAccounted) / 12;
     }

     console.log(profile);
     profile = JSON.stringify(profile);
     localStorage.setItem("data", profile);
}
