function search() {
  console.log("hello javascript has been loaded")
}
async function searchit(){
      try {


        let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + result.value + "&appid=0dc01ff384695838aec3784b537bccdf&units=metric")
        data = await data.json()
        humidity.innerHTML = data.main.humidity;
        temp.innerHTML = data.main.temp;
        city.innerHTML = "weather in "+data.name;
        speed.innerHTML = data.wind.speed + "KM/hr";
      }
      catch (error) {
        console.log(error)
      }
    }

const result = document.querySelector(".input-field");
const x = document.querySelector(".search-icon");
const humidity = document.querySelector(".humidity-value");
const temp = document.querySelector(".temp-value");
const city = document.querySelector(".city");
const speed = document.querySelector(".speed-value");
x.addEventListener("click", searchit());
result.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    searchit()
    result.value=""
  }
}
)
//addEventListener("")