const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    "UserName":String,
	"UserId":String,
	"email":String,
	"password":String,
	"phone":Number,
    "address":String,
    "gender" :String
  }); 
  const model = mongoose.model('user',userSchema);

  //save user
  let saveData = async(data)=>{
    try {
    const user = new model(data);
    const savedata = await user.save();
    return savedata;
    } catch(err){
        return false
    }
  }

  //show data by using email
  let Finddata = async(data)=>{
      try{
      const finddata = await model.find({email:data.email});
      return finddata;
      }catch(err){
          return false
      }
  }

  //show all user data
  let ReadData = async(data)=>{
      try{
      const readdata = await model.find({});
      return readdata;
  }catch(err){
      return false
  }
}









  module.exports={
      saveData,
      Finddata,
      ReadData
  }