var ObjectId = require('mongodb').ObjectID;
var CRUD = function(app){
	this.db = app.dbconn;
	this.response = app.resp;
};

module.exports = CRUD;

CRUD.prototype.list = function(req,cbk){

    var self = this;
    self.db.collection('users').find({}).toArray(function(err, result) {
          if(!err && result.length > 0){
              self.response.data = result
              self.response.status = true
              cbk(self.response)
          }
          else{
              cbk(self.response)
          }
    });
}


CRUD.prototype.insert = function(req, cbk){

	var self = this;
	self.db.collection('users').insert(req.body, function(err, result) {
		  if(!err){
			  self.response.status = true
			  cbk(self.response)
		  }
		  else{
			  cbk(self.response)
		  }
	});

};
CRUD.prototype.find = function(req, cbk){

	var self = this;
	var query = {
	    "_id" : ObjectId(req.query.id)
	}
	self.db.collection('users').findOne(query, function(err, result) {
		  if(!err){
			  self.response.data = result
			  self.response.status = true
			  cbk(self.response)
		  }
		  else{
			  cbk(self.response)
		  }
	});

};
CRUD.prototype.delete = function(req, cbk){

	var self = this;
	var query = {
	    "_id" : ObjectId(req.query.id)
	}
	self.db.collection('users').remove(query, function(err, result) {
		  if(!err){
			  self.response.status = true
			  cbk(self.response)
		  }
		  else{
			  cbk(self.response)
		  }
	});

};