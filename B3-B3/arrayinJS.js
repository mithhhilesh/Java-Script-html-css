let Uniquearray=[];
const n= parseInt(prompt("enter the number of elements: "))

for(let i=0; i<n; i++){
    let ele = prompt('Enter element :');

    let isdupe = false;
    for(let j=0; j<Uniquearray.length; j++){
        if(ele == Uniquearray[j]){
            isdupe=true;
            break;
    }
}
if(!isdupe){
    Uniquearray.push(ele);
    }
}
console.log("unique array: ", Uniquearray);