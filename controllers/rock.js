import {Rock, sequelize } from "../models/Rock.js";
await sequelize.sync();
const rock ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Shape, Description , type, DateFound} = req.body;
    const e = await Rock.create({
        Name, Shape, Description, type, DateFound

    });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res)=>{
    const data = await Rock.findAll();
    res.json({
        "data":data

    })
  },
  findOne: async(req,res)=> {
    const id = req.params.id;
    const data = await Rock.findByPk(id);
    res.json({
        "data":data
    })
  }
};
export {rock};