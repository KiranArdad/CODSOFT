let display = document.getElementById("display");

function press(num) {
    display.value += num;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function pi() {
    document.getElementById("display").value = Math.PI;
}


function calculate() {
    try {
        display.value = eval(display.value);
    } 
    catch {
        display.value = "Error";
    }
}

function percentage() {
    try {
        display.value = eval(display.value) / 100;
    }
    catch {
        display.value = "Error";
    }
}
