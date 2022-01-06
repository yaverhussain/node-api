'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PersonSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Person'
  },
  martialStatus: {
    type: [{
      type: String,
      enum: ['Married', 'Single']
    }],
    default: ['Married']
  }
});

module.exports = mongoose.model('People', PersonSchema);
