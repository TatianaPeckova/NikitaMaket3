let userName = prompt("enter your name");
let userBirthYear = prompt("enter your year of birth");

if (userBirthYear % 10 === 1) {
  alert(`${userName}: ${userBirthYear} год`);
} else if (
  userBirthYear % 10 === 2 ||
  userBirthYear % 10 === 3 ||
  userBirthYear % 10 === 4
) {
  alert(`${userName}: ${userBirthYear} года`);
} else {
  alert(`${userName}: ${userBirthYear} лет`);
}
