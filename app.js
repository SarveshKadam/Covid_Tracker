const tracker = require('./tracker')
const chalk = require('chalk')

const country = process.argv[2]


if(country === undefined){
    console.log(chalk.red.inverse("Please enter a location"));
}else{
tracker(country,(error,data)=>{
   console.log('Error',error)
   console.log('Data',data)
})
}


// tracker('south-africa',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
//  })