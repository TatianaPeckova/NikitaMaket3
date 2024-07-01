let promCode = prompt(`Enter the promotion code`);

if (typeof promCode === "string" && promCode.toLowerCase() === "скидка") {
  alert("Промокод применён");
} else {
  alert("Промокод не работает");
}
