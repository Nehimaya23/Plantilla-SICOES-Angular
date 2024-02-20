const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
const port = 8891;

var applicantRouter = require('./routes/applicant-router');
var companyRouter = require('./routes/Company');
var legal_representative = require('./routes/legal_representative');


app.use(cors());//Libreria que permite realizar los metodos desde otros origines
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/applicant', applicantRouter);
app.use('/company', companyRouter);
app.use('/legal_representative', legal_representative);



app.post("/", (req, res) => {
    res.json({ message: "ok" });
});

app.listen(port, () => console.log(`Listening on port ${port}`))