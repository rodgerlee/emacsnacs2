const router = require("express").Router();
const e = require("express");
let PItem = require("../models/PantryItems.model");

router.route("/").get((req, res) => {
    PItem.find(function(err, pitems) {
        if (err) {
            console.log(err);
        } else {
            res.json(pitems);
        }
    });
});

router.route("/completed").get((req, res) => {
    PItem.find(function(err, pitems) {
        if (err) {
            console.log(err);
        } else {
            let completedPItems = pitems.filter(pitem => pitem_completed);
            res.json(completedPItems);
        }
    });
});

router.route("/incomplete").get((req, res) => {
    PItem.find(function(err, pitems) {
        if (err) {
            console.log(err);
        } else {
            let incompletePItems = pitems.filter(pitem => !pitem.pitem_completed);
            res.json(incompletePItems);
        }
    });
});

router.route("/:id").get((req, res) => {
    let id = req.params.id;
    PItem.findById(id, (err, pitem) => {
        res.json(pitem);
    });
});

router.route("/add").post((req, res) => {
    const pitem = new PItem(req.body);

    pitem
        .save()
        .then(pitem => {
            res 
                .status(200)
                .json({ addedPItem: pitem, pitems: "Item added successfully." });
        })
        .catch(err => {
            res.status(400).json({ pitems: "ERROR: Item could not be added." });
        });
});

router.route("/update/:id").post(function(req, res) {
    PItem.findById(req.params.id, function(err, pitem) {
        if (!pitem) res.status(404).send("data is not found");
        else pitem.pitem_description = req.body.pitem_description;
            pitem.pitem_responsible = req.body.pitem_responsible;
            pitem.pitem_priority = req.body.pitem_priority;
            pitem.pitem_completed = req.body.pitem_completed;
        pitem
            .save()
            .then(pitem => {
                res.json("Item updated!");
            })
            .catch(err => {
                res.status(400).send("Cannot update item");
            });
    });
});

module.exports = router;