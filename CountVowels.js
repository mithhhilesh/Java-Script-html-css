let string = 'Hello Everyone this JS code will check vowels in this sentence';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())){
        count++;
        }
}
    console.log(count);
