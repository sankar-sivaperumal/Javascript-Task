function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    if(str == reversed){
        console.log(str + " is a Palindrome");
    }
    else{
        console.log(str + " is not a Palindrome");
    }
}
isPalindrome("hello");
isPalindrome("madam");