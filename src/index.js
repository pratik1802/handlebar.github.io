
const express = require('express');
const app = express();
const port = process.env.PORT || 8000 

const path = require('path')
const hbs = require('hbs')


const partialsPath = path.join(__dirname, '../views/partials')
app.use(express.static('.'))

app.set('view engine','hbs')

hbs.registerPartials(partialsPath)




app.get('/',(req,res)=>{
    res.render('home',{
        name : "Mahesh"
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        id : 12
    })
})


app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})