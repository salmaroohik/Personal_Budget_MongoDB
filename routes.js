const express = require("express")
const budget=require("./models/budgetData")
const router = express.Router()

router.get("/budget", async (req, res) => {
	const data = await budget.find()
	res.send(data)
})

router.post("/postdata", async (req, res) => {
	
	const budgetVal = new budget({
		title: req.body.title,
        cost: req.body.cost,
        color: req.body.color
	})
	await budgetVal.save()
	res.send(budgetVal)
})

module.exports = router