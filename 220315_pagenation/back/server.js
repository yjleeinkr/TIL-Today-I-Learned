const express= require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');
app.use(cors({
	origin: true,
	credentials: true,
}));

app.post('/api/board/list', async (req, res)=>{
	const sql = 'SELECT idx,subject,nickname,DATE_FORMAT(date, \'%Y-%m-%d\') as date, hit FROM board ORDER BY idx DESC';
	const conn = await pool.getConnection();
	let response = {
		result: [],
		errno: 1,
	};
	try{
		const [ result ] = await conn.query(sql);
		if(result.length === 0) throw new Error;
		response = {
			...response,
			errno: 0,
			result,
		};
	}catch(err){
		console.log(err.message);
	}finally{
		conn.release();
	}
	res.json(response);
});

app.listen(4001, ()=>{
	console.log('back server is running');
});