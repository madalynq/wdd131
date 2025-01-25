document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const temperature = 81;
const wind = 13;

let windChill = "N/A";


function calculateWindChill() {
    const calculatedChill = (
        35.74 + 
        0.6215 * temperature - 
        35.75 * Math.pow(wind, 0.16) +
        0.4275 * temperature * Math.pow(wind, 0.16)
    ).toFixed(2);
    return `${calculatedChill} °F`;
}
    
if (temperature <= 50 && wind > 3) {
    windChill = calculateWindChill();
 }    
 document.querySelector(".Weather li:last-child label").textContent = `Wind Chill: ${windChill}`;
 
