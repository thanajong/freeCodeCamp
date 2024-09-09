function palindromeChecker(str) {
    var cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

//Main
var btn = document.getElementById("check-btn")
btn.addEventListener("click", function(){
    var input = document.getElementById("text-input").value;
    var result = document.getElementById("result");
    if (input.trim() === '') {
        alert('Please input a value');
        return;
    }
    if (palindromeChecker(input)) { result.textContent = '' + input + ' is a palindrome.';} 
    else { result.textContent = '' + input + ' is not a palindrome.';}
})