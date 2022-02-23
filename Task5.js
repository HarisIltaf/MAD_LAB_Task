//Develop and demonstrate JavaScript script that uses functions for the following problems: 
//Parameter: A string 
//Output: The position in the string of the left-most vowel 
//Parameter: A number  
//Output: The number with its digits in the reverse order


function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}
function find_leftMost_vowel(str){
    let vowel = " "
    let index = 0
    for(let i=0; i<str.length; i++)
    {
        if(isVowel(str[i].toLowerCase()))
        {
            vowel = str[i]
            index = i
        }   
    }
    console.log("left most vowel in string is: " +vowel+ " on index "+index)
}
let str = "Checking"
find_leftMost_vowel(str)
console.log("\n\n")
function Reverse_num(num){
    let result = 0
    let mul = 0;
    for (let i = num; i > 0; i = ~~(i/10)) {
        let digit = i % 10;
        result = result * 10 + digit;
    }
    console.log(result)
}
let num = 23617
Reverse_num(num)