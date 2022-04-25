const express = require(`express`);
const app = express();
const nunjucks = require(`nunjucks`);
const router = require(`./routes/index.js`);
const cookieParser = require(`cookie-parser`);
const passport = require(`passport`);
const passportConfig  = require(`./passport/localStrategy.js`);


app.set(`view engine`, `html`);
nunjucks.configure(`views`, { express: app, watch: true, });
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(router);
app.use(passport.initialize()); // passport 등록
passportConfig(); // passport 설정


app.listen(3001, ()=>{
	console.log(`hi server`);
});
