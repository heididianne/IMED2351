const name = "Lemus";

const person = {
    firstName : "Heidi",
    lastName : "Dianne",
    fullName : function() {
        return this.firstName + " " +  this.lastName;
    }
};

document.getElementById("me").innerHTML = person.fullName();

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
} //function STRING METHOD

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8 + '\u00B0' ;
  }

function displayMessage() {
    document.getElementById("hi").innerHTML = "Hi. Have a good day!";
}

toUpper(name); // invocation
