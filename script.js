//algorithm for fecth api
// 1. copy the url fo the api and also take the api keys
// 2. then response this api and converts into json form
//3. use ternaly opr. and fetch this json data into html code using this opr (ternaly)

// 4. console the data and see now the data in json form.

// 5 ,html sequence put the value   of api using .value operation 

// follow the process and also add addEventListner on btn and after the user click on  the btn data is filtered




let cityname = document.getElementById("inpcity");
let btn = document.getElementById("submit");
let cityn = document.getElementById("city");



const options = {
	method : 'GET',
	headers : {
		'X-RapidAPI-Key' : 'b07dfacfaemsh6ce4994345843c1p1ea2d8jsne02f721d8746',
        		'X-RapidAPI-Host' : 'weather-by-api-ninjas.p.rapidapi.com',
	}
};


    // fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi', options)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
 const getweather =(city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
			
			temp_h.innerHTML = response.temp 
feels_like.innerHTML = response.feels_like 
humidity.innerHTML = response.humidity 

max_t.innerHTML = response.max_temp 
min_t.innerHTML = response.min_temp 
// sunrise.innerHTML = response.sunrise
// sunset.innerHTML = response.sunset 
// temp.innerHTML = response.temp  
wind_deg.innerHTML = response.wind_degrees 
wind_speed.innerHTML = response.wind_speed  




	})

	.catch(err => console.log(err));
 }
	
 inpcity.addEventListener("change" , function(e){
    e.preventDefault();
    getweather(cityname.value);
	cityn.innerHTML=cityname.value;
	let date = new Date();
	let year = date.getFullYear()
	let month = date.getHours();
	let day = date.getDay();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds()
	let dateview = document.getElementById("date").innerHTML ="Date  " + "  : " + day + "/" + month + "/" + year;
});
btn.addEventListener("click" , function(e){
    e.preventDefault();
    getweather(cityname.value);
	cityn.innerHTML=cityname.value;
	let date = new Date();
	let year = date.getFullYear()
	let month = date.getHours();
	let day = date.getDay();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds()
	let dateview = document.getElementById("date").innerHTML ="Date  " + "  : " + day + "/" + month + "/" + year;
});
getweather("pali");




// const option = {
// 	method= response.method'GET',
// 	headers= response.headers{
// 		'
// 	}
// };




