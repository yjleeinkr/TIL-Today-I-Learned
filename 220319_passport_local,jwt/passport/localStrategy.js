require(`dotenv`).config({ path: `../.env` });
const pool = require(`../models/db.js`);
const bcrypt = require(`bcrypt`);
const passport = require(`passport`);
const { Strategy: LocalStrategy } = require(`passport-local`);
const { ExtractJwt, Strategy: JWTStrategy } = require(`passport-jwt`); // ExtractJwt 사용못함...
const passportConfig = { usernameField: `userid`, passwordField: `userpw` };

const passportVerify = async(userid, userpw, done)=>{
	const conn = await pool.getConnection();
	const sql = `SELECT * FROM userAcc WHERE userid='${userid}'`;
	try{
		const [[ user ]] = await conn.query(sql);
		if(!user){
			done(null, false, { reason: `해당 아이디가 존재하지 않습니다.` });
			return;
		} 
		const comparedResult = await bcrypt.compare(userpw, user.userpw);
		console.log(comparedResult);
		if(comparedResult){
			done(null, user);
			return;
		}else{
			done(null, false, { reason: `아이디,비밀번호가 틀립니다` });
		}
	}catch(err){
		console.log(err.message);
		done(err);
	}finally{
		conn.release();
	}
};

const cookieExtractor = function(req) {
	let token = null;
	if (req && req.cookies)
	{
		token = req.cookies[`jwt`];
	}
	return token;
};

const JWTConfig = {
	// jwtFromRequest: ExtractJwt.fromHeader(`Authorization`),
	jwtFromRequest: cookieExtractor,
	secretOrKey: process.env.JWT_SALT
};

const JWTVerify = async (jwt_payload, done)=>{
	const conn = await pool.getConnection();
	const sql = `SELECT * FROM userAcc WHERE userid='${jwt_payload.userid}'`;
	try{
		const [[user]] = await conn.query(sql);
		console.log(`jwtVerify성공?`, user);
		if(user === undefined ) throw new Error;
		done(null, user);
	}catch(err){
		console.log(err.message);
	}finally{
		conn.release();
	}
};

module.exports = () => {
	passport.use(`local`, new LocalStrategy(passportConfig, passportVerify));
	passport.use(`jwt`, new JWTStrategy(JWTConfig, JWTVerify));
}; 


