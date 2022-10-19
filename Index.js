const express = require ('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended: true}))

app.get('', (req,res) => {
    res.send('Olá Mundo')
})


app.listen(3000, (err)=> {
    if(err){
        console.log('400')
    } else {
        console.log('200')
    }
})