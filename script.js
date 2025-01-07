const display = document.getElementById('display');

function appendValue(value) {
    display.textContent = display.textContent === '0' ? value : display.textContent + value;
}

function clearDisplay() {
    display.textContent = '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
