import {Motor, sequelize } from "../models/Motor.js";
await sequelize.sync();
const motor ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Model, Description , Type, DateCreated} = req.body;
    const e = await Motor.create({
        Name, Model, Description, Type, DateCreated

    });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res)=>{
    const data = await Motor.findAll();
    res.json({
        "data":data

    })
  },
  findOne: async(req,res)=> {
    const id = req.params.id;
    const data = await Motor.findByPk(id);
    res.json({
        "data":data
    })
  }
};
export {motor};