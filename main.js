const submitBtn = document.querySelector('button');
const inputEle = document.querySelector('#temperature-input');
const resultEle = document.querySelector('#result');


submitBtn.addEventListener('click', () => {
    const tempScales = document.querySelector('input[type="radio"]:checked').getAttribute('value');
    let tempNum = Number(inputEle.value);
    let celsiusTemp = convertToCelsius(tempNum);
    if (tempScales === 'celsius') {
        resultEle.textContent = `${tempNum} degree Fahreheit converted to celsius is: ${celsiusTemp}`;
    } else {
        resultEle.textContent =  `${tempNum} degree Celsius converted to Fahrenheit is: ${convertToFahreheit(tempNum)} degrees Fahrenheit`
    }
})

function convertToFahreheit(temp) {
    return Math.round((temp * 9 / 5) + 32);
}

function convertToCelsius(temp) {
    return Math.round((temp - 32) * 5 / 9);
}