
//Variables
const billAmount = document.querySelector(".billAmount")
const serviceQuality = document.querySelector(".serviceQuality");
const totalPeople = document.querySelector(".totalPeople");
const calculateButton = document.querySelector(".calculate");
const each = document.querySelector(".tip");

//Function to calculate the tip
function tipCalculator() {

    if (billAmount.value == "" || billAmount.value == 0) {
        alert("Please enter your bill amount");
    } else if (totalPeople.value == "" || totalPeople.value < 1) {
        alert("Please enter how many people are sharing the bill");
        return each.innerHTML = "0.00";
    } else if (serviceQuality.value == 0) {
        alert("Please enter how was your service");
    } else {
        each.innerHTML = (Math.floor((billAmount.value * serviceQuality.value) / totalPeople.value));
    }

};

//Calculate Button
calculateButton.addEventListener("click", tipCalculator);