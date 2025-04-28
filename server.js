const express=require("express");
const app = express()

const routes=require('./routes/index')

//authentication: bolto andar aane ki ijazat hai ya nai
//authorization: andar aaye baad kam karna ka permission hai ya nai
//.use is for middlewares


app.use('/',routes);
app.listen(3000,()=>{console.log(' Server Listening on Port no: 3000')})
console.log("Samjhe?, Ya Samjhaun?")

