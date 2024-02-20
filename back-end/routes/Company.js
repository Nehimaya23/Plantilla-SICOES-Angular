var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const mysql= require('../modules/Database');
var http = require('http');
var request = require('request');



// ----------------Lista de Empresa---------------------------------------------------->

router.get('/listCompany',async (req, res)=> {
    try {
        const result = await mysql.pool.query(`
            SELECT * FROM company
        `);
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err);
        
    }
});


// -------------Creacion de un nueva Empresa------------------------------------------>

router.post('/createCompany',async(req,res)=>{
    try {
        console.log(req.body);
        const {RTN,NameCompany,Email,PhoneNumber,Department,Municipality,Address} = req.body;
        const resultRTN = await mysql.pool.query(`
            SELECT * FROM company WHERE RTN = ?`,[RTN]);
        console.log(resultRTN[0])
        if(resultRTN[0] !=undefined){
            res.json({change:false,msj:`Error: Beneficiario ya esta creado ${resultRTN[0].NameCompany}`});
        }else{
            const result = await mysql.pool.query("INSERT INTO company(RTN,NameCompany,Email,PhoneNumber,Department,Municipality,Address) VALUES(?,?,?,?,?,?,?)",[RTN,NameCompany,Email,PhoneNumber,Department,Municipality,Address]);
            if(result.affectedRows>0){
                res.json({change:true,msj:'Cambios guardados'});
            }else{
                res.json({change:false,msj:'cambio no permitido'});
            };
        };
    } catch (error) {
        console.log(error)
        res.json({change:false,msj:'cambio no permitido'});
    };

});

module.exports = router;