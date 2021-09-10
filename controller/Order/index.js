
let service = require("./service");

let Order = async(req,res)=> {
  let saveOrder = await service.SaveOrder(req.body); 
  if(saveOrder){
      let result = "succfully saved"
      res.send({"Result":result});
  }else{
      let result = "some thing went wrong"
      res.send({"Result":result});
  }
}

let loginOrder = async(req,res)=>{
    let finddata = await service.FindOrder({email:req.body.email});
    if(finddata.length>0){
        if(req.body.phone==finddata[0].phone){
            let result = "SUCCESSFULLY LOGINED"
            res.send({"Result":result});
        }else{
            let result = "WRONG NUMBER"
            res.send({"Result":result});
        }
    }else{
        let result = "NO USER FOUND"
        res.send({"Result":result});
    }

}

let viewdetails = async(req,res)=>{
    let showdata = await service.ShowOrders(req.body);
    if(showdata.length>0){
        res.send({"Result":showdata});
    }else{
        let result = "No Records Found"
        res.send({"Result":result});
    }
}

let updateOrder = async(req,res)=>{
    let updatedata = await service.UpdateDetails(req.body);
    if(updatedata!=null){
        let result="successfully updated"
        res.send({"Result":result});
    }else{
        let result = "no Records found"
        res.send({"Result":result});
    }

}

let DeleteOrder = async(req,res)=> {
    let deletedata =  await service.DeleteData(req.body);
        res.send({"Result":deletedata});
   
    }

//show all orders

let FindallOrders =  async(req,res)=>{
    let allOrders = await service.ShowAllOrders({email:req.body.email});
    if(allOrders.length>0){
        res.send({"Result":allOrders});
    }else{
        let result = "no records FOUND"
        res.send({"Result":result})
    }
    
}
    





module.exports={
    Order,
    loginOrder,
    viewdetails,
    updateOrder,
    DeleteOrder,
    FindallOrders

};