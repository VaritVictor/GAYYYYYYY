const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res)=>{
   res.sendFile( __dirname + "/cal.html");
} );

app.post("/",(req, res)=>{
    var num1 = Number(req.body.num1); // อ่านค่าจาก num1 แต่รับมาเป็น Text
    var num2 = Number(req.body.num2); // อ่านค่าจาก num2
    var result = num1 + num2;
    res.send("The calculation result is : " + result);
});
