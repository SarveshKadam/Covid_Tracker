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
const port = 3000

hbs.registerPartials(partialsDirectory,(error)=>{})

app.get('/',(req,res)=>{
    res.render('index',{
        desc:"This gives cases counts"
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/covid',(req,res)=>{
    const locationCountry = req.query.country

    tracker(locationCountry,(error,data)=>{
           res.send({
               error : error,
               data : data
           })
        })
    
})

app.listen(port,()=>{
    console.log("App is listing at "+port);
})





// tracker("india",(error,data)=>{
//     // res.send(error)
//     // res.send(data)
//  })

// const country = process.argv[2]
// if(country === undefined){
//     console.log(chalk.red.inverse("Please enter a location"));
// }else{
// tracker(country,(error,data)=>{
//    console.log('Error',error)
//    console.log('Data',data)
// })
// }


// tracker('south-africa',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
//  })