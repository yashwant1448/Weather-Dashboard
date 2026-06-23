const weather = document.getElementById("weather");

async function getWeather() {

    const city =
    document.getElementById("city").value;

    try {

        const res = await fetch(
        `https://wttr.in/${city}?format=j1`
        );

        if(!res.ok)
            throw new Error("City not found!");

        const data = await res.json();

        weather.innerHTML = `
            <h2>${city}</h2>
            <p>🌡 Temp:
            ${data.current_condition[0].temp_C}°C</p>

            <p>💧 Humidity:
            ${data.current_condition[0].humidity}%</p>

            <p>🌬 Wind:
            ${data.current_condition[0].windspeedKmph}
            km/h</p>
        `;

    } catch(error) {

        weather.innerHTML =
        `<p>${error.message}</p>`;
    }
}