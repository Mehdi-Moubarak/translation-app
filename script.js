const words = ['hello', 'name', 'accept', 'car', 'day'];
const translatedWords = ['salut', 'nom', 'accepter', 'voiture', 'jour'];

renderWords();
renderTranslatedWords();

function renderWords() {
    const innerContainer = document.querySelector('.innerContainer');
    const wordsList = document.createElement('div');
    wordsList.className = "column-1";
    
    words.forEach((word) => {
        const wordElement = createWordElement(word);
        wordsList.appendChild(wordElement);
    });

    innerContainer.appendChild(wordsList);
}

function renderTranslatedWords() {
    const innerContainer = document.querySelector('.innerContainer');
    const translatedWordsList = document.createElement('div');
    translatedWordsList.className = "column-2";
    
    translatedWords.forEach((word) => {
        const wordElement = createWordElement(word);
        translatedWordsList.appendChild(wordElement);
    });

    innerContainer.appendChild(translatedWordsList);
}

function createWordElement(word) {
    const wordElement = document.createElement('div');
    wordElement.className = "word";
    wordElement.textContent = word;
    wordElement.addEventListener('click', handleWordClick);
    return wordElement;
}

function handleWordClick(e) {
    const clickedWord = e.target;
    const column = clickedWord.closest('.innerContainer').querySelector(`.${clickedWord.classList.contains('column-1') ? 'column-1' : 'column-2'}`);

    // Deselect all words in the same column
    column.querySelectorAll('.word').forEach(word => {
        if (word !== clickedWord) {
            word.classList.remove('wordStyle');
        }
    });

    // Toggle the selected style for the clicked word
    clickedWord.classList.toggle('wordStyle');

    // Check if one word is selected from each column
    const column1SelectedWord = document.querySelector('.column-1 .wordStyle');
    const column2SelectedWord = document.querySelector('.column-2 .wordStyle');

    if (column1SelectedWord && column2SelectedWord) {
        // Check if the selected words match based on their index
        const index1 = Array.from(column.querySelector('.column-1').children).indexOf(column1SelectedWord);
        const index2 = Array.from(column.querySelector('.column-2').children).indexOf(column2SelectedWord);

        if (index1 === index2) {
            // Matched, update the style
            column1SelectedWord.classList.add('wordStyle-2');
            column2SelectedWord.classList.add('wordStyle-2');
        }
    }
}



function GameManager() {
    addClickEventListeners();
}
