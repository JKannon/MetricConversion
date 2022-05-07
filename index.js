let numberEl = document.querySelector('#number_display');
let metersEl = document.querySelector('#converted_meters');
let feetEl = document.querySelector('#converted_feet');
let gallonsEl = document.querySelector('#converted_gallons');
let litersEl = document.querySelector('#converted_liters');
let poundsEl = document.querySelector('#converted_pounds');
let kilosEl = document.querySelector('#converted_kilos');
// let numberDisplayedEl = 40;
let initialUnitEls = document.querySelectorAll('.initial_unit');

function updateUnits() {
    convertUnits();
}

function convertUnits() {
    let numberInputEl = document.querySelector('#number_input').value;
    numberDisplayedEl = numberInputEl;
    initialUnitEls.forEach((element) => {
        element.textContent = numberDisplayedEl;
    });

    metersEl.textContent = (numberDisplayedEl / 3.28084).toFixed(3);
    feetEl.textContent = (numberDisplayedEl * 3.28084).toFixed(3);
    litersEl.textContent = (numberDisplayedEl * 3.78541).toFixed(3);
    gallonsEl.textContent = (numberDisplayedEl / 3.78541).toFixed(3);
    poundsEl.textContent = (numberDisplayedEl * 2.20462).toFixed(3);
    kilosEl.textContent = (numberDisplayedEl / 2.20462).toFixed(3);
}
convertUnits();