const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    "orderId":String,
	"paymentmethod":String,
    "customername":String,
	"email":String,
    "branch":String,
	"pincode":Number,
	"phone":Number
  }); 
  const model = mongoose.model('order',orderSchema);

//save order

let SaveOrder = async(data)=>{
try{
const Order = new model(data);
const saveOrder = await Order.save();
return saveOrder;
}catch(err){
    return false
}
}

//login order

let FindOrder = async(data)=>{
    try{
    const finddata = await model.find(data);
    return finddata;
}catch(err){
    return false;
}
}

//show order by emailId

let  ShowOrders = async(data)=> {
    try{
    const showdata = await model.find({email:data.email});
    return showdata;
  }catch(err){
      return false;
  }
}

//update Order

let UpdateDetails = async(data)=> {
    try{
    const updatedata = await model.findOneAndUpdate({"email":data.email},
    {$set:{"customername":data.customername,
            "pincode":data.pincode,
            "isActive":true,
            }},
       {new : true}
      );
    return updatedata;
}catch(err){
    return false
}
}

//delete Order

let DeleteData = async(data)=> {
    try {
    let deletedata = await model.deleteOne({email:data.email});
    return deletedata;
    }catch(err){
        return false
    }
}

//show all Orders

let ShowAllOrders = async(data)=>{
    try{
    let allOrders = await model.find({});
    return allOrders;
}catch(err){
    return false;
}
}





module.exports={
    SaveOrder,
    FindOrder,
    ShowOrders,
    UpdateDetails,
    DeleteData,
    ShowAllOrders
};