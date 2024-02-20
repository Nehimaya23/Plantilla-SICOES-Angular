var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const mysql= require('../modules/Database');
var http = require('http');
var request = require('request');

// ----------------Lista de solicitantes ---------------------------------------------------->

router.get('/listApplicant',async (req, res)=> {
    try {
        const result = await mysql.pool.query(`
            SELECT * FROM applicant
        `);
        res.send(result);
    } catch (err) {
        console.log(err)
        res.send(err);
        
    }
});


// -------------Creacion de un nuevo solicitante------------------------------------------->

router.post('/createApplicant',async(req,res)=>{
    try {
        console.log(req.body)
        const {Full_name,RTN,DNI,Email,Phone_number,Department,Municipality,Addres} = req.body;
        const resultRTN = await mysql.pool.query(`
            SELECT * FROM applicant WHERE RTN = ?`,[RTN]);
        console.log(resultRTN[0])
        if(resultRTN[0] !=undefined){
            res.json({change:false,msj:`Error: Beneficiario ya esta creado ${resultRTN[0].Full_Name}`});
        }else{
            const result = await mysql.pool.query("INSERT INTO applicant(Full_name,RTN,DNI,Email,Phone_number,Department,Municipality,Addres) VALUES(?,?,?,?,?,?,?,?)",[Full_name,RTN,DNI,Email,Phone_number,Department,Municipality,Addres]);
            if(result.affectedRows>0){
                const resultApplicantRTN= await mysql.pool.query(`SELECT * FROM applicant WHERE RTN = ?`,[RTN]);
                if(resultApplicantRTN[0] !=undefined && resultApplicantRTN[0] !=undefined){
                    const resultPC = await mysql.pool.query("INSERT INTO applicant(id) VALUES(?,?)",[resultApplicantRTN[0].id]);
                };
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


// ----------Modificacion--------------------------------->

router.post('/saveResPartner',async(req, res)=>{
    try {
        const {Personery, email, fullName, RTN, DNI, Mobile, phone, address} = req.body.object;
        const result = await mysql.pool.query(`
            UPDATE RES_PARTNER 
                SET Personery = ?,
                email = ?,
                fullName = ?,
                RTN = ?,
                DNI = ?,
                Mobile = ?,
                phone = ?,
                address = ?,
                image_res_partner = ? 
            WHERE id = ?`,[Personery, email, fullName, RTN, DNI, Mobile, phone, address, req.body.image, req.body.id]);
        if(result.affectedRows>0){
            res.json({update:true});
        }else{
            res.json({update:false});
        };
    } catch (error) {
        res.json({
            update:false,
        });
    };
});

module.exports = router;