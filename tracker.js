const request = require('postman-request')
const chalk = require('chalk')
const caseTracker = (country,callback)=>{
    
    const url = 'https://api.covid19api.com/total/country/'+country+'/status/confirmed?from=2020-09-11T00:00:00Z&to=2020-09-12T00:00:00Z'
    request({url,json:true},(error,{body})=>{
        if(error){
            callback(chalk.red.inverse("Cannot connect to covid-tracker services"),undefined);
        }else if(body === undefined){
            callback(chalk.red.inverse("Cannot provide details for the required input values"),undefined);
        }else{
        //console.log(body[0])
            callback(undefined,"The total number of cases in "+country+" are "+body[0].Cases)
        }
    })
}



module.exports = caseTracker

//https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-09-11T00:00:00Z&to=2020-09-12T00:00:00Z