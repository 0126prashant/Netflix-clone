const express = require("express");
const { ListModel } = require("../models/list.model");
const { auth } = require("../middleware/middleware");
const listRouter = express.Router()
require ("dotenv").config();


// listRouter.use(auth)
listRouter.post("/add",async(req,res)=>{
  const {title,overview,img_url} = req.body
  try {
    const post = await ListModel.create({title,overview,img_url,creatorName:req.name,creatorId:req.userID})
        res.status(200).send(post)
  } catch (error) {
    res.status(400).send({error:error.message})
  }
})

// getting posts from list Page

listRouter.get("/",async(req,res)=>{

    try {
        const post = await PostModel.find({creatorId:req.userID})
        // const post = await ListModel.find({})
        res.status(200).send(post)
    } catch (error) {
        res.status(400).send({error:error.message})
    }

})

module.exports={
    listRouter
}


