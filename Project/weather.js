import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import fetch from 'node-fetch'; // Make sure to install this with: npm install node-fetch

const API_KEY = 'c2a86d019f39f2b85186b1d1872dc137';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({ input, output });

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City "${city}" not found. Please check the spelling.`);
        }

        const weatherData = await response.json();

        console.log('\nWeather information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
};


const city = await rl.question('Enter a city name: ');
await getWeather(city);
rl.close();
