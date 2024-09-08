let s;
function getInput() {
    s = document.getElementById("text-input").value;
    // console.log(palindromeChecker(s));
    const isCorrectElem = document.getElementById("iscorrect");
    const isNotCorrectElem = document.getElementById("isnotcorrect");

    if (palindromeChecker(s)) {
        isCorrectElem.textContent = '✅ The input is a palindrome!';
        isNotCorrectElem.textContent = ''; // Clear the other message
    } else {
        isNotCorrectElem.textContent = '❎ The input is not a palindrome.';
        isCorrectElem.textContent = ''; // Clear the other message
    }
}
function toggleButtonState() {  
    const inputField = document.getElementById("text-input");
    const button = document.getElementById("check-btn");
    // Disable the button if the input field is empty
    button.disabled = inputField.value.trim() === "";
}
function removeCharAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
        throw new Error('Index out of bounds');
    }
    return str.slice(0, index) + str.slice(index + 1);
}
function isParenthesesPalindrome(str) {
    // Filter the input string to keep only parentheses characters
    const filtered = str.split('').filter(char => '()[]{}'.includes(char)).join('');
    // If the filtered string has the same length as the original, it means only parentheses are present
    if (filtered.length === str.length) {
        // Check if the filtered string is the same forwards and backwards
        return filtered === filtered.split('').reverse().join('');
    } else {
        // If the input contains non-parentheses characters, return false
        return false;
    }
}
function palindromeChecker(s) {
    let mid = Math.floor(s.length / 2);
    let isOnlyParentheses=true;
    for (let i = 0; i < s.length; i++) if (!'(){}[]'.includes(s[i])) isOnlyParentheses = false;
    if (isOnlyParentheses) return isParenthesesPalindrome(s);
    //if length is odd, remove char in the middle
    if (s.length % 2 == 1) s = removeCharAtIndex(s, mid);
    //first half of the string
    let h1 = s.slice(0, mid);
    //second half of the string, reversed
    let h2 = s.slice(mid).split('').reverse().join('');
    return h1 === h2;
}
document.getElementById("text-input").addEventListener("input", toggleButtonState);
toggleButtonState();