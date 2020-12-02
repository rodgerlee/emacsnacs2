//base url from rapidAPI, attached to the BASE_URL, can be /food, or /recipes, etc.
export const BASE_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.port || 4000;

app.get('/',(req,res) => {
    res.json({ message: "API Working" });
});



export * from './useNavigation'