const { alertMove }= require('../util/alertMove.js');

exports.auth = (req, res, next) => {
	const token = req.cookies.loginUser;
	if(token !== undefined){
		next();
	} else{
		res.send(alertMove('/user/login', '로긴 플리즈'));
	}
};