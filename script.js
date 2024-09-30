const form = document.querySelector('form');
const time_location = document.querySelector('.time_location span');
const weather_condition = document.querySelector('.weather_condition span');
const location1 = document.querySelector('.time_location p');
const city = document.querySelector('.searchField');
const tempEle = document.querySelector('.temp');
const imgEle = document.querySelector('.weather_condition p img');

function updateDOM(temp, localTime, conditionName, locationName, conditionEmoji) {
    const exactDate = localTime.split(' ')[0];
    const exactTime = localTime.split(' ')[1];

    const dayNumber = new Date(localTime).getDay();
    const dayName = getDayName(dayNumber);
  
    time_location.innerText = exactTime + ' - ' + exactDate + ' ' + dayName;
    tempEle.innerText = temp + "°C"; 
    weather_condition.innerText = conditionName;
    location1.innerText = locationName;
    imgEle.src = conditionEmoji; 
}

async function getData_Using_AsyncAwait(cityName) {
    const url = `https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=${cityName}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // response fields
        const locationName = data.location.name;
        const localTime = data.location.localtime; 
        const temp = data.current.temp_c;
        const conditionName = data.current.condition.text;
        const conditionEmoji = data.current.condition.icon;

        updateDOM(temp, localTime, conditionName, locationName, conditionEmoji);
    } catch (error) {
        console.log("ERROR", error.message);
        alert("Error occurred please enter valid city name");
    }
}

function handleSearch(ev) {
    ev.preventDefault();
    const cityName = city.value;
    getData_Using_AsyncAwait(cityName);
}

form.addEventListener('submit', handleSearch);

function getDayName(dayNumber) {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return days[dayNumber];
}

// Function to get the current location weather
function getCurrentLocationWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const cityName = `${lat},${lon}`; // Using lat and lon to fetch weather
            getData_Using_AsyncAwait(cityName);
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Call the function on page load
window.onload = getCurrentLocationWeather;
