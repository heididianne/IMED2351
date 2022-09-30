const schedule = ['Wake up at 5', 'Workout', 'Eat breakfast', 'Read', 'Do homework', 'Make dinner', 'Go to bed around 9']; // Array

schedule.push('Start all over again'); // Array Method

console.log(schedule);

const person = { // Object
    firstName: "Heidi",
    middleName:"Dianne",
    age: 30,
    eyeColor: "brown",
    hairColor: "brown",
    pets: ["Tinkerbell", "Oliver", "Lilo", "Moana", "Brainy", "Flynn"],

    fullName: function () {
        console.log(this.firstName + " " + this.middleName);
    }
}; 

person.fullName(); // Object Method

