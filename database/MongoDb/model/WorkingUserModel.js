/**
 * This is user that will try to update/access the system..
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkingUserSchema = new Schema({
   
  firstname:String,
  
  lastname :String,
  
  role : String,
  
  apikey : String
 
},{collection: 'WorkingUser' });

module.exports = mongoose.model('WorkingUser',WorkingUserSchema);