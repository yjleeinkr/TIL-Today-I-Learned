const express = require(`express`);
const router = express.Router();

router.get(`/groupchat`, (req, res)=>{
	try{
		res.render(`chat`);
	}catch(err){
		console.log(err.message);
	}
});

module.exports = router;