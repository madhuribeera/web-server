var middleware = {
	requireAuthnetication: function(req, res, next){
		console.log("Login Success!!")
		next();
	},
	
	
	logger:function(req, res, next){
		console.log(req.method);
		next();
	}
};

module.exports = middleware;