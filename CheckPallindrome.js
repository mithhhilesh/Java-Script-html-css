function reverseNumber(){
    let rev = parseInt(num.toString().split("").reverse().join(""));
    return rev;
}

function ispallindrome(num){
    let rev = reverseNumber(num);
    if(num === rev){
        console.log(num + " is a pallindrome");
    } else {
        console.log(num + " is not a pallindrome");
    }
}   

let num = parseInt(prompt("enter a number to check if it is pallindrome or not"));
ispallindrome(num);
