const express= require('express');
const nunjucks = require('nunjucks');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'html');
nunjucks.configure('views', {
	express: app,
	watch: true,
});

app.get('/', (req, res)=>{
	res.render('index.html');
});

app.get('/board/write', (req, res)=>{
	res.render('board_write.html');
});

app.get('/board/list', (req, res)=>{
	res.render('board_list.html');
});

app.listen(3001, ()=>{
	console.log('frt server is running');
});