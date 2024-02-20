var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const mysql= require('../modules/Database');
var http = require('http');
var request = require('request');


// ----------------Lista de Empresa---------------------------------------------------->

router.get('/listlegal_representative',async (req, res)=> {
    try {
        const result = await mysql.pool.query(`
            SELECT * FROM legal_representative
        `);
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err);
        
    }
});


// -------------Creacion de un nueva Empresa------------------------------------------>

router.post('/createlegal_representative',async(req,res)=>{
    try {
        console.log(req.body);
        const {DNI,FullName,Email,PhoneNumber,NumeroColegia} = req.body;
        const resultDNI = await mysql.pool.query(`
            SELECT * FROM legal_representative WHERE DNI = ?`,[DNI]);
        console.log(resultDNI[0])
        if(resultDNI[0] !=undefined){
            res.json({change:false,msj:`Error: Beneficiario ya esta creado ${resultDNI[0].FullName}`});
        }else{
            const result = await mysql.pool.query("INSERT INTO legal_representative(DNI,FullName,Email,PhoneNumber,NumeroColegia) VALUES(?,?,?,?,?)",[DNI,FullName,Email,PhoneNumber,NumeroColegia]);
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