import {Wheel, sequelize } from "../models/Wheel.js";
await sequelize.sync();
const wheel ={
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Model, Description , Type, DateCreated} = req.body;
    const e = await Wheel.create({
        Name, Model, Description, Type, DateCreated

    });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res)=>{
    const data = await Wheel.findAll();
    res.json({
        "data":data

    })
  },
  findOne: async(req,res)=> {
    const id = req.params.id;
    const data = await Wheel.findByPk(id);
    res.json({
        "data":data
    })
  }
};
export {wheel};