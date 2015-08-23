/**
 * 
 * In this we will authenticate whether specified user is allowed to access the system or not
 * Userid would be use to get user details from the datastore and user will have roles id..
 * each role have permissions.. we will access the roleid and look up permission table to see if 
 * user is allowed to perform action he/she trying to do..
 */
var WorkingUser = require('../controller/WorkingUser');



function authenticate(userid,cb) {
  
  //we will make connection with data store here and would create a user object with 
  //permission in that..
  
  //lets get user from database for the userid and user permissions..
 
  
  WorkingUser.populate("55d9d410585025845d4b5cc7",workingUserCb);
  
  function workingUserCb(wu) {
    
    if(cb) {
      cb(wu);
    }
    
  }
  
}
module.exports.authenticate = authenticate; 


