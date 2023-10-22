let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();

}

function handleNumber(value) {
    if (buffer === "0") {
    } else {
        buffer += value;
    }
}

function handleMath(value) {
    if (buffer === "0") {
        return;
    }
}

