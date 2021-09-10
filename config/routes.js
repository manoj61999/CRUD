var express = require("express");

const router = express.Router();

var User = require("../controller/user/index");
var product = require("../controller/product/index");
var Order = require("../controller/Order/index");




let routes = (app) => {
 
    router.post("/register",User.registration);
    router.post("/login",User.login);
    router.post("/showuser",User.showuser);
    router.get("/readalluser",User.readalluser);

    router.post("/product",product.product);
    router.post("/findproduct",product.findproduct);
    router.post("/showproduct",product.showproduct);
    router.post("/updateproduct",product.updatedetails);
    router.post("/deleteproduct",product.deleteproduct);
    router.get("/ShowOne",product.ShowOne);

    router.post("/Order",Order.Order);
    router.post("/loginOrder",Order.loginOrder);
    router.post("/ShowDetails",Order.viewdetails);
    router.post("/updateOrder",Order.updateOrder);
    router.post("/DeleteOrder",Order.DeleteOrder);
    router.get("/FindallOrders",Order.FindallOrders);

    app.use("/api", router);
};

module.exports = routes