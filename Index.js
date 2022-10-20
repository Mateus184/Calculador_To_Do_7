const readlineSync = require ("readline-sync")
const express = require ('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))

const Calc = require('./Controller/Calculadora')


app.listen(3000, (err)=> {
    if(err){
        console.log('400')
    } else {
        console.log('200')
        
    }
});
//app.get('/', (req,res) => {
    //res.sendFile(__dirname + '/Calculadora.html')
   // res.status(200).send(`${response}`)
//});




 function somar (num1, num2){
     return parseInt(num1) + parseInt(num2)
 }
 function multiplicar(num1, num2){
     return parseInt(num1) * parseInt(num2);
 }
 function dividir(num1, num2){
     return parseInt(num1) / parseInt(num2)
 }
 function subtrair(num1, num2){
     return parseInt(num1) - parseInt(num2)
 }



    app.get("/soma", (req, res) => {
        const n1 = readlineSync.question('digite um numero: ');;
        const n2 = readlineSync.question('digite um numero: ');;
        const response = somar(n1,n2)
    res.send(`<h1>${response}</h1>`)
   
})           
    app.get("/multiplicar", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');
        const n2 = readlineSync.question('digite um segundo numero: ');
        const response = ServiceConta.multiplicar(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })       
    app.get("/dividir", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');;
        const n2 = readlineSync.question('digite um numero: ');;
        const response = dividir(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })    
    app.get("/subtrair", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');;
        const n2 = readlineSync.question('digite um numero: ');;
        const response = subtrair(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })





