// l'état de la machine 

let startCoffeeMaker = document.getElementById("myButton");
let statusText = document.getElementById("status");
let isMachineOn = false;

if (startCoffeeMaker) {
    startCoffeeMaker.addEventListener("click", function() {
        if (isMachineOn) {
            statusText.textContent = "La machine est éteinte";
            statusText.classList.replace("active", "inactive");
            startCoffeeMaker.textContent = "Démarrer la machine à café";
            coffeeSugar.textContent = "La machine est éteinte. Allume la d'abord.";
            coffeeTaste.textContent = "La machine est éteinte. Allume la d'abord.";
            coffeeType.textContent = "La machine est éteinte. Allume la d'abord.";
            validation.textContent = "Machine éteinte";
            coffeeSugar.classList.remove("inactive")
        } else {
            statusText.textContent = "La machine à café est en marche";
            statusText.classList.replace("inactive", "active");
            startCoffeeMaker.textContent = "Arrêter la machine à café";
        }
        isMachineOn = !isMachineOn;
    });
}

// le goût ?

let tasteOfCoffeeButtons = document.querySelectorAll(".taste")
let coffeeTaste = document.getElementById("coffeeTaste")


tasteOfCoffeeButtons.forEach(button => {button.addEventListener("click", function() {
        if (isMachineOn) {
            if (button.textContent === "Café") {
                coffeeTaste.textContent = "Tu as choisi un café Simple.";
            }
            if (button.textContent === "Café vanille") {
                coffeeTaste.textContent = "Tu as choisi un café Vanille.";
            }
            if (button.textContent === "Café noisette"){
                coffeeTaste.textContent = "Tu as choisi un café Noisette."
            }
        } else {
            coffeeTaste.textContent = "La machine est éteinte. Allume la d'abord.";
        }
    });
});

// court ou long le café ?

let coffeeType = document.getElementById("coffeeType");
let typeOfCoffeeButtons = document.querySelectorAll(".type");


typeOfCoffeeButtons.forEach(button => {button.addEventListener("click", function() {
        if (isMachineOn) {
            if (button.textContent === "Court") {
                coffeeType.textContent = "Tu as choisi un café Court.";
            } else if (button.textContent === "Long") {
                coffeeType.textContent = "Tu as choisi un café Long.";
            }
        } else {
            coffeeType.textContent = "La machine est éteinte. Allume la d'abord.";
        }
    });
});

// les sucres

let sugarOfCoffeeButtons = document.querySelectorAll(".sugar")
let coffeeSugar = document.getElementById("coffeeSugar")


sugarOfCoffeeButtons.forEach(button => {button.addEventListener("click", function() {
        if (isMachineOn) {
            if (button.textContent === "0") {
                coffeeSugar.textContent = "0 sucre";
                coffeeSugar.classList.remove("inactive")
            }
            if (button.textContent === "1") {
                coffeeSugar.textContent = "1 sucre";
                coffeeSugar.classList.remove("inactive")
            }
            if (button.textContent === "2"){
                coffeeSugar.textContent = "2 sucres"
                coffeeSugar.classList.remove("inactive")
            }
            if (button.textContent === "3"){
                coffeeSugar.textContent = "3 sucres"
                coffeeSugar.classList.remove("inactive")
            } 
            if (button.textContent === "4"){
                coffeeSugar.textContent = "Fais attention à toi, le diabète te guette"
                coffeeSugar.classList.add("inactive")
            } 
        } else {
            coffeeSugar.textContent = "La machine est éteinte. Allume la d'abord.";
            coffeeSugar.classList.remove("inactive")
        }
    });
});

// bouton validé

let validation = document.getElementById("validation")

validation.addEventListener("click", function () {
    if (!isMachineOn) {
        validation.textContent = "La machine est éteinte. Allume-la d'abord.";
        return;
    }

    if (
        coffeeTaste.textContent !== "La machine est éteinte. Allume la d'abord." &&
        coffeeType.textContent !== "La machine est éteinte. Allume la d'abord." &&
        coffeeSugar.textContent !== "La machine est éteinte. Allume la d'abord."
       ) 
     {
        validation.textContent = "Café en cours.";
        setTimeout(function () {
            validation.textContent = "Votre café est prêt !";
        }, 5000);
    } else {
        validation.textContent = "Sélectionne le goût, le type, et la quantité de sucre.";
    }
});


