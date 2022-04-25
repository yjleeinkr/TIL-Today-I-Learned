const express = require(`express`);
const router = express.Router();
const userRouter = require(`./userRouter.js`);
const chatRouter = require(`./chatRouter.js`);
const passport = require(`passport`);

router.use(`/user`, userRouter);
router.use(`/chat`, passport.authenticate(`jwt`, { session: false }), chatRouter);

router.get(`/`, (req, res)=>{
	res.render(`index.html`);
});

module.exports = router;