const path = require('path')
const tracker = require('./utils/tracker')
const chalk = require('chalk')
const express = require('express')
const hbs = require('hbs')

const app = express()
app.set('view engine','hbs')
const publicDirectory = path.join(__dirname,'../public')
const viewsDirectory = path.join(__dirname,'../template/views')
const partialsDirectory = path.join(__dirname,'../template/partials')

app.set('views',viewsDirectory)

app.use(express.static(publicDirectory))
const port = process.env.PORT || 3000

hbs.registerPartials(partialsDirectory,(error)=>{})

app.get('/',(req,res)=>{
    res.render('index',{
        desc:"It provides the Case Count"
    })
})


app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/covid',(req,res)=>{
    let locationCountry = req.query.country

    tracker(locationCountry,(error,data)=>{
        if(error){
            return res.send({error})
        }
        
        res.send({
               error : error,
               data : data
           })
        })
    
})

app.get('*',(req,res)=>{
    res.send("<h1>Page Not Found</h1>")
})


app.listen(port,()=>{
    console.log("App is listing at "+port);
})