
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
    
    const temperature = 85;
    const windSpeed = 15;
    
    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
});

function calculateWindChill(temp, windSpeedMph) {
    if (temp <= 50 && windSpeedMph > 3) {
        const chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * temp * Math.pow(windSpeedMph, 0.16);
        return chill.toFixed(1) + " ℉";
    } else {
        return "N/A";
    }
}


