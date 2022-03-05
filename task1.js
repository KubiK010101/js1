let myString = 'azyxxzyzy';
let mySubString = 'zy';

function myStringCounter(str, substr){
    let counter = 0;
    let subLen = substr.length;
    for (let i=0;i<str.length - subLen + 1;i++){
        if(
            str.substr(i,subLen) === substr
        )
        {
            counter++;
        }
    }
    return counter;
}



console.log(myStringCounter(myString, mySubString))