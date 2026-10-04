import {Drink, sequelize } from "../models/Drink.js";
await sequelize.sync();
const drink = {
  index: async (req, res) => {
    res.send("Index Page");
  },
  insert:async(req,res) => {
    const {Name, Brand, Description , Color, DateCreated} = req.body;
    const e = await Drink.create({
        Name, Brand, Description, Color, DateCreated

    });
    res.status(201).json({
        "status":"true",
        "data": e

    });
  },
  all:async(req,res)=>{
    const data = await Drink.findAll();
    res.json({
        "data":data

    })
  },
  findOne: async(req,res)=> {
    const id = req.params.id;
    const data = await Drink.findByPk(id);
    res.json({
        "data":data
    })
  }
};
export { drink };