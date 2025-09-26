function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function celcuisToFahr(celcuis) {
  return (celcuis * 9) / 5 + 32;
}

export default {
  generateRandomNumber,
  celcuisToFahr,
};
