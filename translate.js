function Translate(word, language) {
  this.apikey =
    "trnsl.1.1.20200517T170630Z.0d27be45336cb312.6f85de3ad3c8e88f10e9cb7f5235e2498a3955f7";
  this.word = word;
  this.language = language;

  // XHR Object
  this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
  // Ajax işlemleri
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);

      const text = json.text[0];

      callback(null, text);
    } else {
      callback("Bir hata oluştu", null);
    }
  };

  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
