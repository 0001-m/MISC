function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "bb1d3904a7221cac21fcfe53726499af";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod !== 200) {
                document.getElementById("result").innerText = data.message;
                return;
            }

            let temp = data.main.temp;
            let condition = data.weather[0].main;

            document.getElementById("result").innerText =
                "Temperature: " + temp + "°C, Condition: " + condition;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Error fetching data";
        });
}



