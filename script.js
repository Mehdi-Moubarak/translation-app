const dectionary = {
    hello: 'salut',
    name: 'nom',
    accept: 'accepter',
    car: 'voiture',
    day: 'jour',
};


let words = [];
let translatedWords = [];


// store keys in words and store values  translatedWords;
for (let key in dectionary) {
    words.push(key);
    let value = dectionary[key];
    translatedWords.push(value);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}





words = shuffleArray(words);
translatedWords = shuffleArray(translatedWords);
renderWords();
renderTranslatedWords();
GameManager();

function renderWords() {
    const column1 = document.querySelector('.column-1');
    const innerContainer = document.querySelector('.innerContainer');

    words.forEach((word) => {
        const wordElement = createWordElement(word);
        column1.appendChild(wordElement);
    });

    innerContainer.appendChild(column1);
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
    return wordElement;
}

function handleWordClick(e) {
    const clickedWordColumn1 = e.target;
    const column = clickedWordColumn1.closest('.column-1');

    // Toggle the selected style for the clicked word
    clickedWordColumn1.classList.toggle('wordStyle');

    // Deselect all words in the same column
    column.querySelectorAll('.word').forEach(word => {
        if (word !== clickedWordColumn1) {
            word.classList.remove('wordStyle');
        }
    });
    return clickedWordColumn1;
}

function handleWordClick2(e) {
    const clickedWordColumn2 = e.target;
    const column = clickedWordColumn2.closest('.column-2');

    // Toggle the selected style for the clicked word
    clickedWordColumn2.classList.toggle('wordStyle');

    // Deselect all words in the same column
    column.querySelectorAll('.word').forEach(word => {
        if (word !== clickedWordColumn2) {
            word.classList.remove('wordStyle');
        }
    });
    return clickedWordColumn2;
}

function GameManager() {
    const wordsColumn1 = document.querySelectorAll('.column-1 .word');
    const wordsColumn2 = document.querySelectorAll('.column-2 .word');

    // let clickedWordColumn1;
    // let clickedWordColumn2;


    wordsColumn1.forEach(word => {
        word.addEventListener('click', function (e) {
            clickedWordColumn1 = handleWordClick(e);
            compareWords();
        });
    });

    wordsColumn2.forEach(word => {
        word.addEventListener('click', function (e) {
            clickedWordColumn2 = handleWordClick2(e);
            compareWords(clickedWordColumn1.textContent, clickedWordColumn2.textContent);
            styleWords();
        });
    });


    // function compareWords() {
    //     const score = document.querySelector('.score');
    //     // Check if both words are selected
    //     if (clickedWordColumn1 && clickedWordColumn2) {
    //         // Get the index of the selected words in the arrays
    //         const indexColumn1 = words.indexOf(clickedWordColumn1.textContent);
    //         const indexColumn2 = translatedWords.indexOf(clickedWordColumn2.textContent);

    //         // Check if the words match based on their index in the arrays
    //         if (indexColumn1 !== -1 && indexColumn2 !== -1 && indexColumn1 === indexColumn2) {
    //             // If they match, add the wordStyle-2 class
    //             clickedWordColumn1.classList.add('wordStyle-2');
    //             clickedWordColumn2.classList.add('wordStyle-2');
    //         } else {
    //             // If they don't match, add the wordStyle-3 class temporarily
    //             clickedWordColumn1.classList.add('wordStyle-3');
    //             clickedWordColumn2.classList.add('wordStyle-3');
    //             score.textContent -= 1;
    //             // Use requestAnimationFrame to wait for the next frame
    //             requestAnimationFrame(() => {
    //                 // After the next frame, remove the wordStyle-3 class
    //                 setTimeout(() => {
    //                     clickedWordColumn1.classList.remove('wordStyle-3');
    //                     clickedWordColumn2.classList.remove('wordStyle-3');
    //                 }, 500);
    //             });
    //         }

    //         // Reset clicked words for the next selection
    //         clickedWordColumn1 = null;
    //         clickedWordColumn2 = null;
    //     }
    // }
    function compareWords(englishWord, frenchWord) {
        //look up the english word in the dictionary. and find the corret french word for it.
        const frenchWordFromDictionary = dectionary[englishWord];
        return frenchWordFromDictionary === frenchWord;
    }

    function styleWords() {
        debugger
        if (compareWords(clickedWordColumn1.textContent, clickedWordColumn2.textContent)) {
            clickedWordColumn1.classList.add('wordStyle-2');
            clickedWordColumn2.classList.add('wordStyle-2');
        } else {
            // If they don't match, add the wordStyle-3 class temporarily
            clickedWordColumn1.classList.add('wordStyle-3');
            clickedWordColumn2.classList.add('wordStyle-3');
            requestAnimationFrame(() => {
                // After the next frame, remove the wordStyle-3 class
                setTimeout(() => {
                    clickedWordColumn1.classList.remove('wordStyle-3');
                    clickedWordColumn2.classList.remove('wordStyle-3');
                    clickedWordColumn1.classList.remove('wordStyle');
                    clickedWordColumn2.classList.remove('wordStyle');
                }, 1000);
            });
        }
    }

}

