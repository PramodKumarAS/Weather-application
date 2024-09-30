const form = document.querySelector('form')
const time_location = document.querySelector('.time_location span')
const weather_condition = document.querySelector('.weather_condition span')
const location1 = document.querySelector('.time_location p')
const city = document.querySelector('.searchField')
const tempEle = document.querySelector('.temp');
const imgEle = document.querySelector('.weather_condition p img');


function updateDOM(temp,localTime,conditionName,locationName,conditionEmoji){
    const exactDate = localTime.split(' ')[0];
    const exactTime = localTime.split(' ')[1];

    const dayNumber = new Date(localTime).getDay();
    const dayName = getDayName(dayNumber);
  
    time_location.innerText  =  exactTime+' - '+exactDate+' '+dayName;
    tempEle.innerText  =  temp;
    weather_condition.innerText  =  conditionName;
    location1.innerText  =  locationName;
    imgEle.src =conditionEmoji; 
}

async function getData_Using_AsyncAwait(cityName){
    
    const url = `https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=${cityName}&aqi=no`

    try{
        const response = await fetch(url); // Returns a Promise that resolves to a Response object.
        const data = await response.json();//The response.json() method is called to parse the Response object into a JavaScript object or array. This returns a new Promise that resolves to the parsed data.
        console.log(data);

         // response fields..
        const locationName = data.location.name;
        const localTime = data.location.localtime; 
        const temp = data.current.temp_c;
        const conditionName = data.current.condition.text;
        const conditionEmoji = data.current.condition.icon;

        updateDOM(temp,localTime,conditionName,locationName,conditionEmoji);
    } 
    
    catch(error){
        console.log("ERROR " ,error.message);
        alert("Error occured please enter valid city name")
    }
}

function handleSearch(ev){
    
    ev.preventDefault();
    const cityName = city.value;
    getData_Using_AsyncAwait(cityName)
}

form.addEventListener('submit',handleSearch) 

function getDayName(dayNumber){
    switch(dayNumber){

        case 0:
            return 'SUNDAY'
        case 1:
            return 'MONDAY'
        case 2:
            return 'TUESDAY'
        case 3:
            return 'WEDNESDAY'
        case 4:
            return 'THURSDAY'
        case 5:
            return 'FRIDAY'
        case 6:
            return 'SATURDAY'
    }
}

/*function getData_Using_ThenCatch(cityName){
    
    const url = `https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=${cityName}&aqi=no`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data here
            // response fields..
           const locationName = data.location.name;
           const localTime = data.location.localtime; 
           const temp = data.current.temp_c;
           const conditionName = data.current.condition.text;
           const conditionEmoji = data.current.condition.icon;
   
           updateDOM(temp,localTime,conditionName,locationName,conditionEmoji);
        })
        .catch(error=>{
            alert("Error occured please enter valid city name")
        })
}*/
