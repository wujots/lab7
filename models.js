
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
  title: String,
  date: {type: Date, default: Date.now},
  summary: String,
  image: String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


