const request = require('postman-request')
const caseTracker = (country,callback)=>{
    const url = 'https://covid2019-api.herokuapp.com/country/'+country
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("unable to access covid tracker service",undefined)
        }else{
            if(body[country] == undefined){
               callback("There is no such country",undefined)
            }else{
                console.log(body);
                console.log(body[country])
                callback(undefined,body)
        }  
        }
    })
}

module.exports = caseTracker
