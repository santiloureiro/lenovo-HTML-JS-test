
const isPalindrome = (word) => {

    let normalizedWord = word.toLowerCase()

    for(let i = 0; i < normalizedWord.length; i++){
        if(normalizedWord[i] != normalizedWord[normalizedWord.length - i - 1]) return false
        else return true
    }
}



console.log(isPalindrome("bread"))
console.log(isPalindrome("I'm not a palindrome"))

console.log(isPalindrome("reFeR"))
console.log(isPalindrome("Yo hago yoga hoy"))
