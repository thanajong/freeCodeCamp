let s = 'ababa'
function removeCharAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
        throw new Error('Index out of bounds');
    }
    return str.slice(0, index) + str.slice(index + 1);
}
function palindromeChecker(s) {
    let mid = Math.floor(s.length / 2);

    //if length is odd, remove char in the middle
    if (s.length % 2 == 1) s = removeCharAtIndex(s, mid);
    //first half of the string
    let h1 = s.slice(0, mid);
    //second half of the string
    let h2 = s.slice(mid);
    h2 = h2.split('').reverse().join('');
    return h1 == h2 ? true : false;
}
console.log(palindromeChecker(s));