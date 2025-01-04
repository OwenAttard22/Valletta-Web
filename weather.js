document.addEventListener("DOMContentLoaded", () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Valletta,MT&units=metric&appid=34625e58b9767aaa3559e5c385bf5ed8`;

    // fetch data func
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // weather variables
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;

            // display format
            document.getElementById("temperature").innerText = `${temperature}°C`;
            document.getElementById("humidity").innerText = `${humidity}%`;
            document.getElementById("wind").innerText = `${wind} kph`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});
