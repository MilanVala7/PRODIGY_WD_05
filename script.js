const city_name = document.getElementById("city_name");
const weather_img = document.querySelector(".weather-img")
const desc = document.getElementsByClassName("description")
const wind_speed_value = document.getElementsByClassName("wind-speed-value")
const searchbtn = document.getElementById("search")

searchbtn.addEventListener('click',() => {
        getweather(city_name.value);
})

async function getweather(cityname){
    const apikey = "8fc0a931f64a40503e0afc559cd63b24"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
    const response = await fetch(`${url}`)
    const data = await response.json();
    if(data.cod === `404`){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".container2").style.display = "none";
        console.log("error");
        return;
    }
 
   document.querySelector(".wind-speed-value").innerHTML = data.wind.speed + "KM/H";
   document.getElementById("temp").innerHTML = Math.round(data.main.temp - 273) + "°C";
   document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
   document.querySelector(".description").innerHTML = data.weather[0].description;

   switch(data.weather[0].main){
    case 'Clouds':
        weather_img.src = "/weather_app/cloud.png";
        break;
    case 'Clear':
        weather_img.src = "/weather_app/clear.png";
        break;
    case 'Rain':
        weather_img.src = "/weather_app/rain.png";
        break;
    case 'Mist':
        weather_img.src = "/weather_app/mist.png";
        break;
    case 'Snow':
        weather_img.src = "/weather_app/snow.png";
        break;

}
document.querySelector(".invalid").style.display = "none";
  document.querySelector(".container2").style.display = "flex";
}