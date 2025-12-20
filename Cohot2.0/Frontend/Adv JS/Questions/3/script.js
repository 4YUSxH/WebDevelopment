// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

let result = document.querySelector(".result"); 
let button = document.querySelector("button");
let error = document.querySelector(".error");
let cityInput = document.querySelector("#cityInput");

let apikey = "1a5e016e1555d7e0478cbad542bca7c0";

button.addEventListener("click", () => {
  async function print(city) {
    let raw = await fetch( // await code ka executiion stop kar dega jab tak data nahi aata api se
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );
    let finalOp = await raw.json(); // await jab tak data nahi aata api se cause raw ke upar hi json() karana hai hence raw is required

    try{
        if(finalOp.cod == 404){
            throw new Error("Please enter valid city.")
        }
    }
    catch(err){
        error.innerHTML = err.message;
    }

    console.log(finalOp);
    console.log(finalOp.main.temp);
    result.innerHTML = `Temprature : ${finalOp.main.temp} °C`;
  }
  print(cityInput.value);
  result.innerHTML = "";
  error.innerHTML = "";
});
