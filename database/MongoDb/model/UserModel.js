/**
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  
  type:[String],
  typeHash : String,
  firstname :String,
  secondname :String,
  properties : Schema.Types.Mixed
});


UserSchema.index({typeHash:1})
//we will index on type hash also..


module.exports = mongoose.model('User',UserSchema);