const express =require('express');
const app = express();
const cors =require('cors');
var mongoose=require("mongoose");
const routes=require("./routes");
const port = 3000;
var url = "mongodb://localhost:27017/budget";
var budgetModel=require('./models/budgetData');
const budget = require("./budget");
const router = express.Router();




mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>{
            app.use(express.json())
            app.use("/api",routes)
        })
        .catch((connectionError)=>{
          console.log(connectionError)
        })

app.use(cors());





app.get('/budget', (req,res)=>{
    res.json(budget);
});

app.listen(port,() =>{
    console.log('Example API listening at http://localhost:${port}')
});