var CRUD = function(app){
	this.db = app.dbconn;
	this.response = app.resp;
};

module.exports = CRUD;

CRUD.prototype.list = function(req,cbk){

    var self = this;

    cbk(this.response)
}


CRUD.prototype.insert = function(req, cbk){

	var self = this;
	var response = {
		status : false,
		err : null,
		data : null
	};
	var reqObj = req.query;
	var query = {
	    inSession:true
    }

	self.db.collection('users').find(query).toArray(function(err, result) {
		  if(!err && result.length > 0){
			  response["data"] = result
			  response["status"] = true
			  cbk(response)
		  }
		  else{
			  response['err'] = 'No Active Users';
			  cbk(response)
		  }
	});

};
