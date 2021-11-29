const express= require("express");
const dotenv=require("dotenv");

dotenv.config();

const app=express();

const PORT=process.env.PORT;
app.use(express.json())

app.listen(PORT,()=>{
    console.log(`SERVER RUN ON ${PORT}`);
})