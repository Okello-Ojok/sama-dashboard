var mongoose = require('mongoose');
var dataSchema = new mongoose.Schema({
  name : String,
  cUnit : String,
  olevel : Number,
  alevel : Number,
  bStudents : Number,
  dStudents : Number,
  mStudents : Number,
  fStudents : Number,
  bFeeS3 : Number,
  bFeeS5 : Number,
  dFeeS3 : Number,
  dFeeS5 : Number,
  schoolID : Number,
  noStudents : Number,
  noTeachers : Number,
  location : String,
  date: String
});

//var dataModel = mongoose.model('Data', dataSchema, 'sama');
//module.exports dataModel;
mongoose.model('Data', dataSchema, 'sama');
