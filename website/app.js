/* Global Variables */
// Personal API Key for OpenWeatherMap API
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '1a03b8d2530728b02e7dab283b20c3da';
let zipCode = document.getElementById('zip');
let feeling = document.getElementById('feelings');

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', generateTemp);

/* Function called by event listener */
function generateTemp()
{
    zipCode = zipCode.value;
    feeling = feeling.value;
    const getTemp = async (url) => {
        const response = await fetch(url);
        try {
            const newData = await response.json();
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    }

    // const postTemp = async (url = '', data = {}) => {
    //     console.log(data)
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });

    //     try {
    //         const newData = await response.json();
    //         return newData;
    //     } catch (error) {
    //         console.log('error', error);
    //     }
    // }
    const postTemp = async (url) => {
        const response = await fetch(url);
        try {
            const newData = await response.json();
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    }
    
    if (zipCode < 100) {
        alert('Wrong ZIP Code')
    } else {
        console.log(zipCode);
        console.log(feeling);
        getTemp(baseURL + zipCode + '&units=metric&appid=' + apiKey)
        .then(function (data){
            console.log(data);
            postTemp('/saveRecord', { temp: data.main.temp, date: newDate, userResponse: feeling, });
        });
    }
};

/* Function to GET Web API Data*/

/* Function to POST data */

/* Function to GET Project Data */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();