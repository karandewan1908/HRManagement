/**
 * 
 * This is the controller for getting working user data..
 */


var dbQuerymanager = require('../database/DatabaseQueryManager');
var tables = require('../database/DBTable');
var workinguser = require('../datastructure/WorkingUser');

var Util = require('../util/Utilities');

function populate(userid,cb) {
  
  var receiveCB = makeUserDataReceiveCB(userid,cb);
  
  //we need database query manager now to get data for user from database..
  
  var query = {};
  
  query.tbName = tables.WorkingUser;
  
  query.obj = {};
  
  if(!userid || userid.length < 12) {
    receiveCB(new Error("Invalid user id"));
    return;
  }
  
  query.obj._id = Util.toObjectID(userid);
    
  dbQuerymanager.selectUniqueTuple(query,receiveCB);
  
  
}
module.exports.populate = populate;


function makeUserDataReceiveCB(userid,cb) {
  
  function gotUserData(err,data) {
  
    var user = null;
    if(data) {
      //we got valid data lets now just make the user object
      user = new workinguser(data);
      
    }
    
    if(cb) {
      cb(err,user);
    }
    
    
  }
  return gotUserData;
  
}
 


