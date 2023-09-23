// const axios = require('axios');


// exports.indfiles=(req,res)=>{


//    axios.get('http://localhost:4001/api/users')
    
//     .then(function(response){
//         console.log(response);
//         res.render('index', { users : response.data });
//     })
//     .catch(err =>{
//         res.send(err);
//     })
// }
const axios = require("axios");

exports.render=(req,res)=>{
    axios.get("http://localhost:10000/api/users")
    .then(function(response){
        console.log(response);
        res.render("index",{users : response.data});
    })
    .catch(err=>{res.send(err);})
 }

exports.form=(req,res)=>{
    res.render("form");
}



exports.ren=(req,res)=>{
    axios.get("http://localhost:10000/api/users/64c1d45c0a71c86720ed3b62")
    .then(function(response){
        console.log("checking data",response);
        console.log("checking ",response.data); 
        res.render("indexid",{us : response.data});
    })
    .catch(err=>{res.send(err);})
}