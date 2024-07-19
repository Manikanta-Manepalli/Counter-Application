let counterElement = document.getElementById("counterValue");

function onIncrement() {
    let prevcounterValue = counterElement.textContent;
    let updatedcounterValue = parseInt(prevcounterValue) + 1;
    counterElement.textContent = updatedcounterValue;

    if (updatedcounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterValue < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}
function onDecrement() {
    let prevcounterValue = counterElement.textContent;
    console.log(typeof(prevcounterValue));
    let updatedcounterValue = parseInt(prevcounterValue) - 1;
    counterElement.textContent = updatedcounterValue;
    if (updatedcounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterValue < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}
function onReset() {
    let updatedcounterValue = 0;
    counterElement.textContent = updatedcounterValue;
    if (updatedcounterValue > 0) {
        counterElement.style.color = "green";
    } else if (updatedcounterValue < 0) {
        counterElement.style.color = "red";

    } else {
        counterElement.style.color = "black";

    }
}