const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
const pool = require('./models/db.js').pool;

const { makeJwt, decodePayload } = require('./util/jwt.js');
const { alertMove } = require('./util/alertMove.js');
const { auth } = require('./middleware/auth.js');
const app = express();

app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });

app.use(express.urlencoded({ extended: true, }));
app.use(cookieParser());

app.get('/', (req, res)=>{
	const token = req.cookies.loginUser;
	if( token !== undefined ){
		const loginUser = decodePayload(token);
		res.render('index.html', { loginUser });
	} else{
		res.render('index.html');
	}
});

app.get('/user/login', (req, res)=>{
	res.render('login');
});

app.post('/user/login', async (req, res)=>{
	const { userid, userpw } = req.body;
	const sql = 'SELECT * FROM user WHERE userid = ? AND userpw = ?';
	const [[ result ]] = await pool.execute(sql, [ userid, userpw ]);
	try{
		if(result === undefined) throw new Error;
		delete result.userpw;
		const payload = {
			...result
		};
		console.log(payload);
		const token = makeJwt(payload);
		res.cookie('loginUser', token)
		   .redirect('/');
	}catch(err){
		console.log(err.message);
		res.send(alertMove('/', '아이디와 비번을 다시 확인해주세요'));
	}
});

app.get('/user/profile', auth, (req, res)=>{
	const token = req.cookies.loginUser;
	const loginUser = decodePayload(token);
	res.render('profile', { loginUser });
});


app.get('/user/logout', auth, (req, res)=>{
	res.clearCookie('loginUser')
	   .send(alertMove('/', '로그아웃되었습니다'));
});

app.get('/user/join', (req, res)=>{
	res.render('join');
});

app.listen(3000, ()=>{
	console.log('server is running');
});