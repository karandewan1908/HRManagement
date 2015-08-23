/**
 * 
 */



function getModel(modelName) {
  
 
  var modelName = modelName+"Model";
  var ret = require('./'+modelName);
  
  return ret;
  
  
}
module.exports.getModel = getModel;