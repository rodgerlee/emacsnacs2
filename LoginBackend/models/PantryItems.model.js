//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

let PItem = new Schema(
    {
        pitem_description: {
            type: String
        },
        pitem_responsible: {
            type: String
        },
        pitem_priority: {
            type: String
        },
        pitem_completed: {
            type: Boolean
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model("PantryItem", PItem);