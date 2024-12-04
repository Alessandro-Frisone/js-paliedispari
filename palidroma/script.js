// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1 - Chiedere all’utente di inserire una parola
const userWord = prompt ("Inserisci una parola");  
// 2 - Creare una funzione per invertire la parola 
function reverseWord(userWord) {  
    let wordReverse = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
        wordReverse = wordReverse + userWord[i];
    }
    return wordReverse;
}
// 3 - Fare una stampa in console per verificare la parola invertita
console.log(reverseWord(userWord));
// 4 - Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(userWord) {
    let wordReverse = reverseWord(userWord);
    if (wordReverse === userWord) {
        return true
        } else
        return false
}
// 5 - Mostrare un messaggio all'utente con il risultato
if (isPalindrome(userWord)) {
    alert("La parola è un palindromo!");
} else {
    alert("La parola non è un palindromo!");
}    

