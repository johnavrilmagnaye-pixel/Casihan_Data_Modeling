import {Plant, sequelize } from "../models/Plant.js";
await sequelize.sync();
const plant ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Shape, Description , type, DateFound} = req.body;
    const e = await Plant.create({
        Name, Shape, Description, type, DateFound

    });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res)=>{
    const data = await Plant.findAll();
    res.json({
        "data":data

    })
  },
  findOne: async(req,res)=> {
    const id = req.params.id;
    const data = await Plant.findByPk(id);
    res.json({
        "data":data
    })
  }
};
export {plant};