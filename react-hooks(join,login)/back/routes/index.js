const express = require('express')
const router = express.Router()
const { pool } = require('../model/db.js')

router.post('/user/join', async (req, res) => {
  console.log(req.body)
  const { userid, userpw } = req.body
  const joinSql = `INSERT INTO user(userid,userpw) VALUES('${userid}','${userpw}')`
  const conn = await pool.getConnection()
  try {
    const [result] = await conn.query(joinSql)
    const response = {
      idx: result.insertId
    }
    res.send(response)
  } catch (err) {
    console.log(err)
  } finally {
    conn.release()
  }
})

router.post('/user/idCheck', async (req, res) => {
  const { userid } = req.body
  console.log(userid)
  const checkSql = `SELECT userid FROM user WHERE userid='${userid}'`
  try {
    const [[result]] = await pool.execute(checkSql)
    console.log(result)
    let response
    if (!result) {
      response = { isNewId: true }
    } else {
      response = { isNewId: false }
    }
    res.send(response)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router