let displayValue = '0';

function input(value) {
    if (displayValue === '0') {
        displayValue = value.toString();
    } else {
        displayValue += value.toString();
    }
    document.getElementById('display').innerText = displayValue;
}

function del() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    document.getElementById('display').innerText = displayValue;
}

function reset() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace('x', '*'));
        document.getElementById('display').innerText = displayValue;
    } catch (e) {
        displayValue = 'Error';
        document.getElementById('display').innerText = displayValue;
    }
}
