const words = ['hello', 'name', 'accept', 'car', 'day']
const translatedWords = ['salut', 'nom', 'accepter', 'voiture', 'jour']
renderWords();
renderTranslatedWords();
function renderWords() {
    const innerContainer = document.querySelector('.innerContainer');
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    const wordsList = document.createElement('div');
    wordsList.className = "column-1";
    words.forEach((word) => {
        const wordElement = document.createElement('div');
        wordElement.className = "word";
        wordElement.textContent = word;
        wordElement.addEventListener('click', function (e) {
            changeWordStyle('default', e.target);
        })
        wordsList.appendChild(wordElement);
    });
    innerContainer.appendChild(wordsList);
}
function renderTranslatedWords() {
    for (let i = translatedWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [translatedWords[i], translatedWords[j]] = [translatedWords[j], translatedWords[i]];
    }
    const innerContainer = document.querySelector('.innerContainer');
    const translatedWordsList = document.createElement('div');
    translatedWordsList.className = "column-2";
    translatedWords.forEach((word) => {
        const wordElement = document.createElement('div');
        wordElement.className = "word";
        wordElement.textContent = word;
        wordElement.addEventListener('click', function (e) {
            changeWordStyle('default', e.target);
        })
        translatedWordsList.appendChild(wordElement);
    });
    innerContainer.appendChild(translatedWordsList);
}
function changeWordStyle(Case = null, word) {
    var selected;
    const words = document.querySelectorAll('.column-1 .word')
    for (let i = 0; i < words.length; i++) {
        if (words[i].classList.contains('wordStyle') && !words[i].classList.contains('already_selected')) {
            console.log(words[i].classList.contains('already_selected'))
            selected = true;
            break;
        }
    }

    console.log(selected)
    if (Case == 'default' && !selected) {
        word.classList.toggle('wordStyle');
        if (!word.classList.contains('already_selected')) {

            word.classList.add('already_selected');
        } else {
            word.classList.remove('already_selected');
        }

    } else if (Case == 'match') {
        word.classList.toggle('wordStyle-2');
    } else {
        // word.classList.toggle('wordStyle-2');
    }
}
function GameManager() {

}
GameManager();