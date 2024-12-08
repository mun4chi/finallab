/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
document.addEventListener("DOMContentLoaded", function () {
    const dayButtons = document.querySelectorAll(".days button");
    const fullButton = document.querySelector(".booking p button:nth-of-type(1)"); 
    const halfButton = document.querySelector(".booking p button:nth-of-type(2)"); 
    const weeklyCostDisplay = document.getElementById("weekly-cost");
    
    

    
    let selectedDays = new Set(); 
    let isFullDay = false; 

    
    const FULL_DAY_COST = 40;
    const HALF_DAY_COST = 20;

    
    dayButtons.forEach(button => {
        button.addEventListener("click", function () {
            const day = button.textContent; 
            if (selectedDays.has(day)) {
                selectedDays.delete(day); 
                button.classList.remove("clicked"); 
            } else {
                selectedDays.add(day); 
                button.classList.add("clicked"); 
            }
            updateCost();
        });
    });

    
    fullButton.addEventListener("click", function () {
        isFullDay = true; 
        fullButton.classList.add("clicked"); 
        halfButton.classList.remove("clicked"); 
        updateCost();
    });

    
    halfButton.addEventListener("click", function () {
        isFullDay = false; 
        halfButton.classList.add("clicked"); 
        fullButton.classList.remove("clicked"); 
        updateCost();
    });

    
    function updateCost() {
        const numDays = selectedDays.size; 
        let totalCost = 0;

        if (isFullDay) {
            totalCost = numDays * FULL_DAY_COST; 
        } else {
            totalCost = numDays * HALF_DAY_COST; 
        }

        
        weeklyCostDisplay.textContent = `$${totalCost}`;
    }

    
    document.querySelector(".clear-days").addEventListener("click", function () {
        selectedDays.clear(); 
        dayButtons.forEach(button => {
            button.classList.remove("clicked"); 
        });
        fullButton.classList.remove("clicked"); 
        halfButton.classList.remove("clicked"); 
        weeklyCostDisplay.textContent = "$0"; 
        isFullDay = false; 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const thankYouMessage = document.getElementById('thank-you-message');
    const contactForm = document.querySelector('form'); 
    const headerMessage = document.querySelector('h2'); 

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        contactForm.style.display = 'none';
        headerMessage.style.display = 'none'; 
        thankYouMessage.style.display = 'block'; 
    });
});






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


