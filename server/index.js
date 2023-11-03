const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const cors = require('cors');
const { listRouter } = require("./routes/list.routes");
const app = express()
require ("dotenv").config();
app.use(express.json());
app.use(cors())

// Here are the routes present

app.use("/users",userRouter)
app.use("/list",listRouter)


app.listen(process.env.port,async()=>{
 
    try {
        await connection;
        console.log(`Server is running at Port ${process.env.port} and also connected to DataBase`)
    } catch (error) {
        console.log(error.message)
    }
})