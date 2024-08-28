function cleanWord(word) {
    let cleaned = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            cleaned += char.toLowerCase();
        }
    }
    return cleaned;
}

function wordCount(text) {
    let words = {};
    let word = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            word += char.toLowerCase();
        } else {
            if (word) {
                let cleanedWord = cleanWord(word);
                if (words[cleanedWord]) {
                    words[cleanedWord]++;
                } else {
                    words[cleanedWord] = 1;
                }
                word = '';
            }
        }
    }
    
    if (word) {
        let cleanedWord = cleanWord(word);
        if (words[cleanedWord]) {
            words[cleanedWord]++;
        } else {
            words[cleanedWord] = 1;
        }
    }
    
    return words;
}

function main() {
    let text = "Hola, mundo.";
    
    let wordCounts = wordCount(text);
    
    for (let word in wordCounts) {
        console.log(`'${word}': ${wordCounts[word]}`);
    }
}

main();