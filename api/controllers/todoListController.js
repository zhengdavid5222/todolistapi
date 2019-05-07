'use strict';


var mongoose = require('mongoose'),
  form = mongoose.model('forms');

exports.list_all_forms = function(req, res) {
  form.find({}, function(err, form) {
    if (err)
      res.send(err);
    res.json(form);
  });
};




exports.create_a_form = function(req, res) {
  var new_form = new form(req.body);
  new_form.save(function(err, form) {
    if (err)
      res.send(err);
    res.json(form);
  });
};


exports.read_a_form = function(req, res) {
  form.findById(req.params.formId, function(err, form) {
    if (err)
      res.send(err);
    res.json(form);
  });
};


exports.update_a_form = function(req, res) {
  form.findOneAndUpdate({_id: req.params.formId}, req.body, {new: true}, function(err, form) {
    if (err)
      res.send(err);
    res.json(form);
  });
};


exports.delete_a_form = function(req, res) {


  form.remove({
    _id: req.params.formId
  }, function(err, form) {
    if (err)
      res.send(err);
    res.json({ message: 'form successfully deleted' });
  });
};

