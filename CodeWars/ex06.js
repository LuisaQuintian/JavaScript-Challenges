function anagrams(word, words) {

    let result =  []
    for (i = 0; i < words.length; i++) {
        let individualWords = Array.from(words[i]).sort()
        let sortedWord = Array.from(word).sort()
        

        if (individualWords.join() == sortedWord.join()) {
            result.push(words[i])
        }
    }
    return result
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))