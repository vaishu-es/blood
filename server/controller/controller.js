let datas=require("../model/get");

exports.create=(req,res)=>{
    const chk=new datas({
        name:req.body.name,
        age:req.body.age,
        email:req.body.age,
        phone:req.body.phone,
        blood:req.body.blood
    });
    chk.save().then(doc=>{
        console.log(doc)
        res.redirect("/");
    })
}
exports.find=(req,res)=>{
    datas.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })
}



  




exports.findname=(req,res)=>{
    datas.findById(req.params.id).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }    
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
}