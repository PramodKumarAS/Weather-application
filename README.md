# Weather App

A simple weather application that allows users to enter a city name and get the current weather report. This app uses the OpenWeatherMap API to fetch real-time weather data and dynamically displays it on the webpage.

## Features

- Users can enter a city name in the input field.
- The app fetches the current weather information for the entered city.
- Weather data includes:
  - Temperature
  - Humidity
  - Weather Description
  - Wind Speed
- The weather information is dynamically displayed on the page.

## Live Demo

You can view the live version of the app [here](https://pramodkumaras.github.io/Weather-application/).

## Requirements

When the user enters a city name and clicks the "Search" button, the app will:
1. Fetch weather data from the OpenWeatherMap API.
2. Display the current weather details for the entered city.

## Approach

1. **Create HTML Structure**
   - Build a basic layout with an input field for the city name and a button to trigger the search.
   
2. **Style with CSS**
   - Apply CSS to style the input, button, and weather display area to make the app visually appealing.

3. **JavaScript Logic**
   - Add an event listener to the search button.
   - Get the city name entered by the user.
   - Fetch the weather data from the OpenWeatherMap API.
   - Update the DOM with the fetched data.

## Technologies Used

- **HTML**: For creating the structure of the app.
- **CSS**: For styling the app and making it responsive.
- **JavaScript**: For handling the logic of fetching data and updating the DOM.
- **OpenWeatherMap API**: For fetching weather data.

## Installation

1. **Clone the repository**

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/PramodKumarAS/Weather-application.git
