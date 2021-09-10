
let service = require("./service");


//create (save product)

let product = async(req,res)=>{
let saveproduct = await service.SaveProduct(req.body);
if(saveproduct){
    let result = "product successfully submitted"
    res.send({"Result":result});
}else{
    let result = "some thing went wrong"
    res.send({"Result":result});
  }
}

//read (find product)

let findproduct = async(req,res)=>{
    let findpro = await service.Findproduct({email:req.body.email});
    if(findpro.length>0){
        if(req.body.customerId==findpro[0].customerId){
            let result = "successully Logined !"
            res.send({"Result":result});
        }else{
            let result = "wrong customerId"
            res.send({"Result":result});
        }
    }else{
        let result = "no user found"
        res.send({"Result":result});
    }
}

//read (show seprate product by mail id)

let showproduct = async(req,res)=>{
    let findpro = await service.Findproduct(req.body);
    if(findpro.length>0){
        res.send({"Result":findpro});
    }else{
        let result = "NO RECORD"
        res.send({"Result":result});
    }
              
}

//update product
    
let updatedetails = async(req,res)=>{
    // console.log(req.body,"hii");
    let findpro = await service.UpDatePro(req.body);
    if(findpro!=null){
        res.send({"Result":findpro});
    }else{
        let result = "no records"
        res.send({"Result":result})
    }
    
}

//delete product

let deleteproduct = async(req,res)=>{
    let findpro = await service.DeletePro({customerId:req.body.customerId});
        res.send({"Result":findpro});
}


//show product

let ShowOne = async(req,res)=> {
    let showdata = await service.FindProd(req.body);
    if(showdata.length>0){
        res.send({"Result":showdata});
    }else{
        let result="No Records FOUND";
        res.send({"Result":result});
    }
    
} 



module.exports={
    product,
    findproduct,
    showproduct,
    updatedetails,
    deleteproduct,
    ShowOne
};