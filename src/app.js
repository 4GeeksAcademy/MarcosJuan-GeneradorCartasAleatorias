window.onload = function() {
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];

  function createCard() {
    let randomSymbolsIndex = Math.floor(Math.random() * symbols.length);
    let randomNumbersIndex = Math.floor(Math.random() * numbers.length);

    const randomSymbol = symbols[randomSymbolsIndex];
    const randomNumbers = numbers[randomNumbersIndex];

    document.querySelector(".top-left").textContent = randomSymbol;
    document.querySelector(".body").textContent = randomNumbers;
    document.querySelector(".bottom-right").textContent = randomSymbol;

    const card = document.querySelector(".card");
    if (randomSymbol === "♥" || randomSymbol === "♦") {
      card.style.color = "red";
    } else {
      card.style.color = "black";
    }
  }
  createCard();
};
