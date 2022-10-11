const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "10222478",
    database: "cia",
    port: "3306",
});  

// db.connect((error) => {
//     if(error){
//         throw error
//     }
//     else{
//         console.log("hola")
//     }
// })

app.post('/dashboard', (req, res)=> {
    id = req.body.id
    db.connect(() => {
        db.query("SELECT * FROM dashboard WHERE id = " + "'" + id + "'", (err,result) =>{
           if(err){
               console.log(err)
           }
            res.json({message : result})
        })
    })
    //res.json({message: "no entro"})
})

app.post('/login', (req, res)=> {
    user = req.body.username;
    pass = req.body.password;
    db.connect(() => {
        db.query("SELECT * FROM estudiante WHERE ID_est = " + "'" +user + "'" +" AND password = " + "'" + pass + "'",
        (err,result) =>{
            if(err){
                console.log(err);
            }
            else{
                res.json({message : result})
            }
            

        })
    })
    //res.json({message: "no entro"})
})

app.post('/calificacion', (req, res)=> {
    id = req.body.ID_est
    console.log(id);
    console.log(req.body);
    db.connect(() => {
        db.query("SELECT * FROM calificaciontest WHERE ID_est = " + "'" + id + "'", (err,result) =>{
           if(err){
               console.log(err)
           }
            res.json({message : result})
        })
    })
    //res.json({message: "no entro"})
})

app.listen(3001, () => {
    console.log("running server");
});