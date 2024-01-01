var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;
var feedbackElement = document.getElementById("feedback");

function retry(){
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 11;
  feedbackElement.textContent = "";
  checkGuess();
}

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
    const guess = Number(inputElement.value);
  while (attempts > 0) {
    if (guess === randomNumber) {
      feedbackElement.textContent = "Tebrikler doğru tahmin!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    } else if (guess < randomNumber) {
      feedbackElement.textContent = "Çok düşük sayı, yeniden deneyin. Kalan hakkınız  " +
        attempts;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.textContent = "Çok yüksek, yeniden deneyin. Kalan hakkınız " +
        attempts;
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.style.color = "red";
    feedbackElement.textContent = "Doğru tahmin edemediniz. " + "Doğru numara" +
      randomNumber;
  }
}