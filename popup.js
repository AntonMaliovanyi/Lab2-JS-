document.addEventListener('DOMContentLoaded', function () {
  getWord();
});

function getWord() {
  fetch('https://random-word-api.herokuapp.com/word?number=1')
    .then(response => response.json())
    .then(data => {
      const word = data[0];
      displayWord(word);
      translateWord(word);
    })

}

function displayWord(word) {
  const wordElement = document.getElementById('word');
  wordElement.textContent = word;
}

function translateWord(word) {
  const translationElement = document.getElementById('translation');

  fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=uk&dt=t&q=${word}`)
    .then(response => response.json())
    .then(data => {
      const translation = data[0][0][0];
      translationElement.textContent = `Translation: ${translation}`;
    })

}
