let s = 'ababa'
function removeCharAtIndex(str, index) {
    if (index < 0 || index >= str.length) {
        throw new Error('Index out of bounds');
    }
    return str.slice(0, index) + str.slice(index + 1);
}
function palindromeChecker (s){
    if(s.length%2==1){
        let mid = (s.length/2)+1;
        removeCharAtIndex(s,mid);  
        return s;     
    }
}

console.log(palindromeChecker(s));