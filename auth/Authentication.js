/**
 * 
 * In this we will authenticate whether specified user is allowed to access the system or not
 * Userid would be use to get user details from the datastore and user will have roles id..
 * each role have permissions.. we will access the roleid and look up permission table to see if 
 * user is allowed to perform action he/she trying to do..
 */
var WorkingUser = require('../controller/WorkingUser');

var capability = require('./Capability');


function authenticate(userid,cb) {
  
  //we will make connection with data store here and would create a user object with 
  //permission in that..
  
  //lets get user from database for the userid and user permissions..
 
  if(!userid) {
    console.trace();
    console.error("ERR- Inavlid userid");
    
    if(cb) {
      cb(new Error("ERR - Invalid userid"));
    }
  }

  WorkingUser.populate(userid,workingUserCb);
  
  function workingUserCb(err,wu) {
   
    if(cb) {
      cb(err,wu);
    }
    
  }
  
}
module.exports.authenticate = authenticate; 


function canUserPerformAction(user,options,cb) {
  
  var ret = false;
  
  
  return ret;
  
  
}
module.exports.canUserPerformAction = canUserPerformAction;

