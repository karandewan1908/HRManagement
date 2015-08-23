/**
 * 
 */

var mongoose = require('mongoose');

function toObjectID(id) {
  return  mongoose.Types.ObjectId(id);
  
}
module.exports.toObjectID = toObjectID;
