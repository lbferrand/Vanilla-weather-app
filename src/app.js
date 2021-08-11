let date = new Date(timestamp);

let apiKey = "4e6401358feb8a28e9ae1c46c2f907bc";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
