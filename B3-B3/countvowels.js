function countingvowels(){
let string = prompt("Write Sentence Here to count vowels in it");
//'Hello Everyone!! this JS code will check vowels in this sentence';
let vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])){
        count++;
        }
}
    console.log("number of vowel in that sentence = "+count);
}
countingvowels();   