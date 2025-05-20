/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/





const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById('conversion');

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");



convertBtn.addEventListener("click", () => {
    convert(input)
})





const convert = (num) => {

    let meterToFeet = Number(num.value) * 3.281;
    let feetToMeter = Number(num.value) / 3.281;
    
    let litersToGallons = Number(num.value) * 0.264;
    let gallonToLiters = Number(num.value) / 0.264;

    let kilogramToPounds = Number(num.value) * 2.204;
    let poundsToKilograms = Number(num.value) / 2.204;

    lengthEl.textContent = `${num.value} meters = ${meterToFeet.toFixed(3)} feet | ${num.value} feet = ${feetToMeter.toFixed(3)} meters`;
    volumeEl.textContent = `${num.value} liters = ${litersToGallons.toFixed(3)} gallons | ${num.value} gallons = ${gallonToLiters.toFixed(3) } liters`;
    massEl.textContent = `${num.value} kilos = ${kilogramToPounds.toFixed(3)} pounds | ${num.value} pounds = ${poundsToKilograms.toFixed(3)} pounds`;
};

