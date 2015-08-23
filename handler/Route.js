/**
 * 
 * This will hold all the routing information for our urls..
 * 
 * This will called after authroization of user..
 * 
 * 
 */

var validEntity = {
    
    "employee" :true,
    "investor" :true,
    "consultant" :true
};

var validActions = {
    
    "edit" :true,
    "add" :true,
    "drop":true
    
};


function convertRequestUrlToObject(reqUrl) {
  
  var ret = {};
  var bits = reqUrl.split("/");
  
  if(bits.length < 4) {
    return null;
  }
  
  ret.entity = bits[2];
  ret.action = bits[3];
  
  if(bits.elngth > 4) {
    ret.remaininBits = bits.slice(4);
  }
  return ret;
}
module.exports.convertRequestUrlToObject = convertRequestUrlToObject;


function checkRequestValid(reqObj) {
  
  var action = reqObj.action;
  var entity = reqObj.entity;
  if(!(entity in validEntity)) {
    console.log("ERR - Inavlid entity requested "+entity);
    return false;
  }
  
  if(!(action in validActions)) {
    console.log("ERR - Inavlid action requested "+action);
    return false;
  }
  
  return true;
  
  
}

module.exports.checkRequestValid = checkRequestValid;

function routeTheRequest() {
  
}