const express = require(`express`);
const router = express.Router();
const pool = require(`../models/db.js`);
const passport = require(`passport`);
const bcrypt = require(`bcrypt`);
const { makeJwt } = require(`../util/jwt.js`);
const { alertMove } = require(`../util/alertMove.js`);

// const { isLogin, isNotLogin } = require(`../middleware/auth.js`);

router.get(`/join`, (req, res)=>{
	res.render(`join`);
});

router.post(`/join`, async (req, res)=>{
	const conn = await pool.getConnection();
	const { userid, userpw, usermobile } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedpw = await bcrypt.hash(userpw, salt);
	try{
		const checkSql = `SELECT * FROM userAcc WHERE userid='${userid}'`;
		const [[exUser]] = await conn.query(checkSql);
		if(exUser) throw new Error(`중복 아이디`);
		const sql = `INSERT INTO userAcc(userid, userpw, usermobile) VALUES(?,?,?)`;
		const param = [userid, hashedpw, usermobile];
		await conn.query(sql, param);
		res.send(alertMove(`/`, `회원가입이 완료되었습니다`));
	}catch(err){
		console.log(err.message);
		res.send(alertMove(`/user/join`, `아이디가 중복됩니다`));
	}finally{
		conn.release();
	}
});

router.get(`/login`, (req, res)=>{
	res.render(`login`);
});

router.post(`/login`, (req, res)=>{
	try{
		passport.authenticate(`local`, (passportError, user, info)=>{
			if(passportError || !user ){
				res.send(alertMove(`/user/login`, `로그인 오류 - 관리자에게 문의해주세요`));
				return;
			}
			req.login( user, { session: false }, (loginError)=>{
				if(loginError){
					res.send(alertMove(`/user/login`, `해당 아이디, 비번 다시 확인바랍니다`));
					return;
				}
				console.log(user);
				const { useridx, userid } = user;
				const payload = { useridx, userid };
				const token = makeJwt(payload);
				const cookieOpt = { maxAge: 60*60*1000, httpOnly: true };
				res.cookie(`jwt`, token)
					.send(alertMove(`/`, `로그인 완료`));
			});
		})(req, res); // 이걸 왜 붙여주는건가...
	}catch(err){
		console.log(err.message);
	}
});

module.exports = router;