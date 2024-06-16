const apiKey = ""
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=17b597e4cfd4affb7c3ad0a2331e6db8&units=metric"

// https://api.openweathermap.org/data/2.5/forecast?q=bangalore&appid=17b597e4cfd4affb7c3ad0a2331e6db8&units=metric

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=17b597e4cfd4affb7c3ad0a2331e6db8&units=metric`);
    let data = await response.json();

    if (data.cod == 200){

        document.querySelector('.city-name').innerHTML = city;
        console.log(data);

        let date = new Date();

        console.log(date);
        let today_date1 = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
        let today_date2 = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() + 1}`
        let today_date3 = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() + 2}`
        let today_date4 = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() + 3}`
        let today_date5 = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate() + 4}`

        // console.log( today_date1 + " " + today_date2 + " " + today_date3 + " " + today_date4 + "  " + today_date5);

        let d1 = false;
        let d2 = false;
        let d3 = false;
        let d4 = false;
        let d5 = false;

        for(let i=0; i<data.list.length; i++){
                // console.log(i + " " + data.list[i].dt_txt);
                let today = data.list[i].dt_txt.split(" ")[0];
                console.log(today);
                if(today_date1 == today && d1 == false){
                    document.querySelector('.weather-image').src = `images/${data.list[i].weather[0].main}.png`;
                    document.querySelector('.day1-temp').innerHTML = `temperature : ${data.list[i].main.temp}°c`
                    document.querySelector('.today-temp').innerHTML = `${data.list[i].main.temp}°c`
                    document.querySelector('.temp').innerHTML = `${data.list[i].main.temp}°c`
                    d1=true;
                    document.querySelector('.day1-wind').innerHTML = `wind speed :  ${data.list[i].wind.speed}km/h`
                    document.querySelector('.today-wind').innerHTML = `${data.list[i].wind.speed}km/h`
                    console.log("matched");
                }

                if(today_date2 == today  && d2 == false){
                    document.querySelector('.day2-temp').innerHTML = `temperature : ${data.list[i].main.temp}°c`
                    document.querySelector('.day2-wind').innerHTML = `wind speed :  ${data.list[i].wind.speed}km/h`
                    d2=true;
                }

                if(today_date3 == today && d3 == false){
                    document.querySelector('.day3-temp').innerHTML = `temperature : ${data.list[i].main.temp}°c`
                    document.querySelector('.day3-wind').innerHTML = `wind speed :  ${data.list[i].wind.speed}km/h`
                    d3=true;

                }

                if(today_date4 == today && d4 == false){
                    document.querySelector('.day4-temp').innerHTML = `temperature : ${data.list[i].main.temp}°c`
                    document.querySelector('.day4-wind').innerHTML = `wind speed :  ${data.list[i].wind.speed}km/h`
                    d4=true;
                    
                }

                if(today_date5 == today && d5 == false){
                    document.querySelector('.day5-temp').innerHTML = `temperature : ${data.list[i].main.temp}°c`
                    document.querySelector('.day5-wind').innerHTML = `wind speed :  ${data.list[i].wind.speed}km/h`
                    d5=true;

                }

                

        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.city').style.display = 'flex';
        document.querySelector('.humi-wind').style.display = 'flex';
        document.querySelector('.days').style.display = 'block';

    }
    else{
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.city').style.display = 'none';
        document.querySelector('.humi-wind').style.display = 'none';
        document.querySelector('.days').style.display = 'none';
    }
    


}

let input = document.querySelector('.input-city');
let btn = document.querySelector('.btn');

btn.addEventListener('click' , ()=>{
    let city = input.value;

    checkWeather(city);

})

