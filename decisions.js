import { budget } from 'budgetinfo';
import { getListPrice, getListCategory, getListCommType, getListSun, getListHot, returnMainList } from 'solutions.js';


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
    |||FIGURE OUT WITH ILANA|||
  }


}
