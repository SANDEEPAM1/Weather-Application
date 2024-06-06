const url = "https://api.openweathermap.org/data/2.5/weather?q="
const key = "9be89e6df736d8fcd664b38ea98d0f14"

const input = document.querySelector(".search input")
const inputBtn = document.querySelector(".search button")
const weatheIcon = document.querySelector(".weather-icon")

function changeIcon(src){
	weatheIcon.src = src
}



async function getData(city){

	let data;
try{
const response = await fetch(url + city + `&appid=${key}`)
 data = await response.json();
 if(data.cod === '404'){
	input.value = data.message + ` please enter valid city name`;
	console.log("ener errror")
	document.querySelector(".weather").style.display ='none'
	return;
 }
 console.log(data)
}catch(error){
	console.log("error occured")
}

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".tmp").innerHTML = Math.round(data.main.temp-273.15) + `°C`;
document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`

const weatherStatus = data.weather[0].main;
switch(weatherStatus){
case "Clear":
	changeIcon("images/clear.png")
	break;
case "Clouds":
	changeIcon("images/clouds.png")
	break;
case "Rain":
	changeIcon("images/rain.png")
	break;
case "Drizzle":
	changeIcon("images/drizzle.png")
	break;
case "Mist":
	changeIcon("images/mist.png")
	break;
default:
	changeIcon("images/rain.png")
}

document.querySelector(".weather").style.display ='block'

}
inputBtn.addEventListener('click',()=>{
	getData(input.value)
})
