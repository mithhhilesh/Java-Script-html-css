function reverseNumber(){
    let rev = parseInt(num.toString().split("").reverse().join(""));
    return rev;
}

function ispalindrome(num){
    let rev = reverseNumber(num);
    if(num === rev){
        console.log(num + " is a palindrome");
    } else {
        console.log(num + " is not a palindrome");
    }
}   

let num = parseInt(prompt("enter a number to check if it is palindrome or not"));
ispalindrome(num);
