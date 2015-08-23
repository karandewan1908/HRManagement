/**
 * 
 * This is the controller for getting working user data..
 */


var dbQuerymanager = require('../database/DatabaseQueryManager');
var tables = require('../database/DBTable');

var Util = require('../util/Utilities');

function populate(userid,cb) {
  
  var receiveCB = makeUserDataReceiveCB(userid,cb);
  
  //we need database query manager now to get data for user from database..
  
  var query = {};
  
  query.tbName = tables.WorkingUser;
  
  query.obj = {};
  
  query.obj._id = Util.toObjectID("55d9d24d585025845d4b5cc5");
    
  dbQuerymanager.selectUniqueTuple(query,receiveCB);
  
  
}
module.exports.populate = populate;


function makeUserDataReceiveCB(userid,cb) {
  
  function gotUserData(err,data) {
  
    console.log(data);
    
  }
  return gotUserData;
  
}
 


