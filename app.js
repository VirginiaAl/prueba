function getWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city },ES&APPID=4102b1f13a4cd8fab6424c32c2cf63b8`)
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      draw(data);
      console.log(data)
    })
    .catch(e => {

    })
  }

  document.getElementById('button').addEventListener('click', () => {
    let city = document.getElementById('search').value;
    //document.getElementById('location').innerHTML = city;
    getWeather(city);
  })

function draw(o) {

document.getElementById('location').innerHTML = o.name;
let celsius = Math.round(parseFloat(o.main.temp)-273,15);
document.getElementById('temp').innerHTML = celsius +  'ºC';
document.getElementById('icon').src = `http://openweathermap.org/img/w/${o.weather[0].icon}.png`;
document.getElementById('description').innerHTML = o.weather[0].description;
}
