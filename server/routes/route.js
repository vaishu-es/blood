const express = require('express');
const route = express.Router(); 

const ser=require("../services/render");
const controller=require("../controller/controller");

route.get("/",ser.render);
route.get("/form",ser.form);
route.get("/f",ser.ren);

route.post("/api/users", controller.create);
route.get("/api/users",controller.find);
route.get("/api/users/:id",controller.findname);

module.exports=route;