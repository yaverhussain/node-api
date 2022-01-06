'use strict';
module.exports = function(app) {
  var apiController = require('../controllers/apiController');

  app.route('/people')
    .get(apiController.list_all_people)
    .post(apiController.create_a_person);


  app.route('/people/:personId')
    .get(apiController.read_a_person)
    .put(apiController.update_a_person)
    .delete(apiController.delete_a_person);
};
