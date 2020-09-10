/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '1a03b8d2530728b02e7dab283b20c3da';
let zipCode = document.getElementById('zip');
let feeling = document.getElementById('feelings');

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', generateTemp);

/* Function called by event listener */
function generateTemp()
{
    if (zipCode < 100) {
        alert('Wrong ZIP Code')
    } else {
        let userResponse = feeling.value;
        getTemp(baseURL + zipCode.value + '&units=metric&appid=' + apiKey)
        .then(function (data){
            postTemp('/saveRecord', { temp: data.main.temp, date: newDate, userResponse: userResponse, });
            updateUI();
        });
        zipCode.value = '';
        feeling.value = '';
    }
};

/* Function to GET Web API Data*/
const getTemp = async (url) => {
  const response = await fetch(url);
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to POST data */
const postTemp = async (url = "", data = {}) => {
  // console.log(data)
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    // if we need to show all the records will loop on it and append it in div the append this div to it's perant 
    // allData.forEach(element => {
    // });
    document.getElementById("date").innerHTML =
      allData[allData.length - 1].date;
    document.getElementById("temp").innerHTML =
      allData[allData.length - 1].temp;
    document.getElementById("content").innerHTML =
      allData[allData.length - 1].userResponse;
  } catch (error) {
    console.log("error", error);
  }
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();