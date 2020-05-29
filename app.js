const word = document.getElementById("word");
const lang = document.getElementById("language");
const form = document.getElementById("translate-form");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", translateWord);

  // Change
  lang.onchange = function () {
    // Arayüz İşlemleri
    ui.changeUI();
  };
}

const translate = new Translate(word.value, lang.value);
const ui = new UI();

function translateWord(e) {
  translate.changeParameters(word.value, lang.value);

  translate.translateWord(function (err, text) {
    if (!err) {
      // Response
      ui.displayTranslate(text);
    } else {
      console.log(err);
    }
  });

  e.preventDefault();
}
