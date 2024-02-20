var express = require('express');
var router = express.Router();
const mysql= require('../modules/Database');



router.get('/listSystemInformations',async(req, res)=>{
    try {
        const result = await mysql.pool.query(`
            SELECT 
                *
            FROM CONFIG_SYSTEM WHERE id = 1
        `);
        var index =0;
        for(const resu of result){
            // logoSecretary,logoPolice
            if(resu.logoSecretary!=null){
                result[index].logoSecretary = new Buffer.from(resu.logoSecretary).toString('base64');
            };
            if(resu.logoPolice!=null){
                result[index].logoPolice = new Buffer.from(resu.logoPolice).toString('base64');
            };
            index++;
        };
        const result_template = await mysql.pool.query(`
            SELECT 
                * 
            FROM TEMPLATE_REPORT
        `);
        index = 0;
        for(const resu of result_template){
            if(resu.coverFront!=null){
                result_template[index].coverFront = new Buffer.from(resu.coverFront).toString('base64');
            };
            if(resu.coverRear!=null){
                result_template[index].coverRear = new Buffer.from(resu.coverRear).toString('base64');
            };
            if(resu.digitalSignature!=null){
                result_template[index].digitalSignature = new Buffer.from(resu.digitalSignature).toString('base64');
            };
            index++;
        };
        res.json({config:result[0],template:result_template})
        // res.send(result[0]);
    } catch (error) {
        res.json({
        });
    };
});
router.post('/save',async(req,res)=>{
    try {
        if(req.body.config!=undefined){
            const {id,name,qrCodeUrl,logoSecretary,logoPolice} = req.body.config;
            const result = await mysql.pool.query(`
                UPDATE CONFIG_SYSTEM SET name = ? , qrCodeUrl = ? , logoSecretary = ? , logoPolice = ?
                WHERE id = ?
            `,[name,qrCodeUrl,logoSecretary,logoPolice,id]);
            if(result.affectedRows>0){
                res.json({update:true});
            }else{
                res.json({update:false});
            };
        };
    }catch(error) {
        res.json({update:false});
    };
});
router.post('/saveTemplate',async(req,res)=>{
    try {
        if(req.body.obj != undefined){
            const {id,msj,responsible,responsibleJob,responsibleUO,digitalSignature,coverFront,coverRear} = req.body.obj;
            const result = await mysql.pool.query(`
                UPDATE TEMPLATE_REPORT SET msj = ?, responsible =? , responsibleJob=? , responsibleUO=? , digitalSignature=? , coverFront=? , coverRear=? 
                WHERE id = ?
            `,[msj,responsible,responsibleJob,responsibleUO,digitalSignature,coverFront,coverRear,id]);
            if(result.affectedRows>0){
                res.json({update:true});
            }else{
                res.json({update:false});
            };
        };
    }catch(error) {
        res.json({update:false});
    };
});
module.exports = router;