var buttonSearch = document.querySelector(".button-search");
var modal = document.querySelector(".modal");
var form = document.querySelector("form");

var minusAdults = document.querySelector(".minus-adults");
var plusAdults = document.querySelector(".plus-adults");
var numberAdults = document.querySelector(".persone-adults").value;
var minusChildren = document.querySelector(".minus-children");
var plusChildren = document.querySelector(".plus-children");
var numberChildren = document.querySelector(".persone-children").value;
var dateIn = document.querySelector("[name=check-in]");
var dateInField = document.querySelector(".date-in");
var dateOut = document.querySelector("[name=check-out]");
var dateOutField = document.querySelector(".date-out");


modal.classList.add("modal-none");

buttonSearch.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-none");
    if(!modal.classList.contains("modal-slide")) {
        modal.classList.add("modal-slide");
        modal.classList.remove("modal-slide-reverse");
        dateIn.focus();
    }else {
        modal.classList.remove("modal-slide");
        modal.classList.add("modal-slide-reverse");
    }
})

modal.addEventListener("submit", function(evt) {
    if(!dateIn.value || !dateOut.value) {
        evt.preventDefault();
        if(!dateIn.value) {
            dateInField.classList.add("modal-error")
        };
        if(!dateOut.value) {
            dateOutField.classList.add("modal-error")
        };
    }
})

minusAdults.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(numberAdults>0 && numberAdults<=10) {
        numberAdults = Number(numberAdults)-1;
    }
    document.querySelector(".persone-adults").value = numberAdults;
})

plusAdults.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(numberAdults>=0 && numberAdults<10) {
        numberAdults = Number(numberAdults)+1;
    }
    document.querySelector(".persone-adults").value = numberAdults;
})

minusChildren.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(numberChildren>0 && numberChildren<=10) {
        numberChildren = Number(numberChildren)-1;
    }
    document.querySelector(".persone-children").value = numberChildren;
})

plusChildren.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(numberChildren>=0 && numberChildren<10) {
        numberChildren = Number(numberChildren)+1;
    }
    document.querySelector(".persone-children").value = numberChildren;
})
