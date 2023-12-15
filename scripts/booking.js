/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const dayContainer = document.querySelectorAll(".day-selector li");
let dayCounter = 0;
const clearButton = document.querySelector("#clear-button");
const fullDayButton = document.querySelector("#full");
const halfDayButton = document.querySelector("#half");
const fullCost = 35;
const halfCost = 20;
let rate = fullCost;
let cost = 0;
function updateCost() {
    cost = dayCounter * rate;
    document.querySelector("#calculated-cost").innerHTML = cost;
}

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function colourChange() {
    if (this.classList.contains("clicked")) {
        this.classList.remove("clicked");
    } else {
        this.classList.add("clicked");
    }
    dayCounter = document.querySelectorAll(".day-selector li.clicked").length;
    updateCost();
}

for (var i = 0; i < dayContainer.length; i++) {
    dayContainer[i].addEventListener("click", colourChange());
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    for (var i = 0; i < dayContainer.length; i++) {
        dayContainer[i].classList.remove("clicked");
    }
    dayCounter = 0;
    updateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function() {
    rate = halfCost;
    this.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", function() {
    rate = fullCost;
    this.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    updateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// up in dayContainer event listener.