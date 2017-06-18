var crud = require('./actions/crud');


var fs = require("fs");

var Routes = function(app){
	this.app = app;
	this.crud = new crud(app);
	this.init();
}
module.exports = Routes;

var sessionCheck = function(req, res, next){
	
	/*if(req.session && req.session.user){
		 next();
	}
	else{
		res.redirect("/");
	}*/
	 next();
	
};


Routes.prototype.init = function(){
	var self = this;
	
	self.app.get('/list', function (req, res) {
		self.crud.list(req, function(response){
            res.json(response.data);
        })
	});

	self.app.post('/add',function(req,res){
        self.crud.insert(req, function(response){
            res.json(response.data);
        })
    });

    self.app.post('/find',function(req,res){
        self.crud.find(req, function(response){
            res.json(response.data);
        })
    });
    self.app.post('/delete',function(req,res){
        self.crud.delete(req, function(response){
            res.json(response.data);
        })
    });
};



