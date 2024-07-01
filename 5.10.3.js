let userName = prompt("enter your name");
let userBirthYear = prompt("enter your year of birth");

let currentYear = new Date().getFullYear();

alert(`${userName}: ${currentYear - userBirthYear}`);
