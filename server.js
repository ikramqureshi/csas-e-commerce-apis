const express=require("express");
const app = express()
app.get('/products',(req,res)=>{res.json({name:'tea_leaves', price:1000})})

app.listen(3000,()=>{console.log(' Server Listening on Port no: 3000')})