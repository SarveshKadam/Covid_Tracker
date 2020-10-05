
const textMessageOne = document.querySelector('.textMessageOne')
const textMessageTwo = document.querySelector('.textMessageTwo')
const search = document.querySelector('input')

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = capitalize(search.value)
    const country = location.replace(/\s/g,'_') 
    textMessageOne.textContent = ""
    fetch('/covid?country='+country).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error);
                return textMessageOne.textContent = data.error
                
            }
            const allData = data.data[country]
            console.log(data.data[country]);
            textMessageOne.textContent = `The total number of confirmed cases in ${location} are ${allData.confirmed}`
            const activeCount = allData.confirmed - (allData.deaths + allData.recovered)
            var ctx = document.getElementById('chart').getContext('2d');
            var pollchart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Active', 'Confirmed', 'Death', 'Recovered'],
                datasets: [{
                    label: '# of Votes',
                    data: [activeCount, allData.confirmed, allData.deaths, allData.recovered],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            }
});

        })
    })
})

//Capitalize and underscoring country name

function capitalize(input) {  
    return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
} 


