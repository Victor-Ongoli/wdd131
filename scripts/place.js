const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const temperature = 10;
const windSpeed = 5;

document.querySelector("#current-year").textContent = `© ${currentYear}`;
document.querySelector("#last-modified").textContent = `Last updated: ${lastModified}`;

// windchill calculation function
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}
// apply conditions
let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(2) + "°C";
} else {
    windChill = "N/A";
}

document.querySelector("#windChill").textContent = windChill;
