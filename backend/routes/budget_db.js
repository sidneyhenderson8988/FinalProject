const express = require("express");
const router = express.Router();
const Budget = require("../models/budget_schema");

router.get("/myBudget", (req,res) => {
    Budget.find().then((budget) => {
        if (!budget){
            return res.status(404).json({error: "Theres no data."});
        }
        return res.status(200).json(budget)
    }).catch((e) => res.status(404).json(e));
});

router.post("/register", (req,res) => {
    const newBudget = new Budget({
        title: req.body.title,
        budget: req.body.budget,
        color: req.body.color,
    });
    newBudget.save().then((budget) => res.status(201).json(budget)).catch((err) => console.log(err));
});

router.delete("/delete/:id", (req,res) => {
    const {id} = req.params;
    budget.remove({_id:id}).then((data) => res.status(200).json(data)).catch((e) => {
        console.log(e);
        res.status(404).json(e);
    });
});

router.put("/update/:id", (req,res) => {
    const {id} = req.params;
    budget.updateOne(
        {_id:id},
        {
            $set:{
                title: req.body.title,
                budget: req.body.budget,
                color: req.body.color,
            }
        },
        (err) => {
            console.log(err);
        }
    ).then((data) => res.status(200).json(data)).catch((e) => res.status(404).json(e));
});

module.exports = router;