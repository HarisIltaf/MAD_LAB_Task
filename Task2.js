//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
let input = 23617;
let str = input.toString();
let sum=0;
for(let i=0;i=str.length;i++){
    sum += parseInt(str[i])
}
console.log(sum)
