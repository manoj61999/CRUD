const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    "productname":String,
	"productId":String,
    "customerId":String,
	"email":String,
    "age":Number,
	"date":String,
	"phone":Number,
    "address":String
  }); 
  const model = mongoose.model('product',productSchema);

  //create 

let SaveProduct = async(data)=>{
    try{
        const product = new model(data);
    const saveproduct = await product.save();
    return saveproduct;
    }catch(err){
        return false
    }
}

//read
 
let Findproduct = async(data)=>{
    try{
    const findpro = await model.find({email:data.email});
    return findpro;
    }catch(err){
        return false
    }
}

//update

let UpDatePro = async(data)=>{
    try{
    console.log(data,"data")
    const findpro = await model.findOneAndUpdate({"customerId":data.customerId},
        {$set:{"phone":data.phone,
               "address":data.address,
               "isActive" :true,
               }},
        {new :true}
        );
    return findpro;
}catch(err){
    return false
}
}

//delete

let DeletePro = async(data)=>{
    try{
    console.log(data);
    const findpro = await model.deleteOne({"cutomerId":data.customerId});
    return findpro;
}catch(err){
    return false
}
}

//read all the data

let FindProd = async(data)=>{
    try{
    const showdata = await model.find({});
    return showdata;
}catch(err){
    return false
}
}





module.exports={
    SaveProduct,
    Findproduct,
    UpDatePro,
    DeletePro,
    FindProd
};