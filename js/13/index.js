let citysearch = document.getElementById('citysearch');
let city = document.getElementById('city');
let schbtn = document.getElementById('search');
let temperature = document.getElementById('temperature');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let visibility = document.getElementById('visibility');
let feels = document.getElementById('feels');
let uvindex = document.getElementById('uvindex');

//create the xml request variable
let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.weatherapi.com/v1/current.json?key=ef22d27e28904575896122747251706&q=London&aqi=no');

schbtn.addEventListener('click', ()=>{
   setInterval(() => {
     let cityname = citysearch.value;
    if(cityname === ''){
        // alert('Please enter a city name');
    }else{
        xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=ef22d27e28904575896122747251706&q=${cityname}&aqi=no`);
        xhr.send();
    }
   }, 1000);
});

xhr.onload = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr);
        let data = JSON.parse(xhr.responseText);
        console.log(data);
        city.innerHTML = data.location.name;
        temperature.innerHTML = data.current.temp_c ;
        wind.innerHTML = data.current.wind_kph + ' kph';
        humidity.innerHTML = data.current.humidity + ' %';
        pressure.innerHTML = data.current.pressure_mb + ' mb';
        visibility.innerHTML = data.current.vis_km + ' km';
        feels.innerHTML = data.current.feelslike_f + ' °F';
        uvindex.innerHTML = data.current.uv + ' / 10';



        
    }
}




// xhr.send();
