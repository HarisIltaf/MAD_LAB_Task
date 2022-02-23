// Write program to find sum of even digits. Input 23617 output 2+6=8.
let num = 23617;
let sum = 0;
while(num>0){
    sum += ((num%10)%2==0?num%10:0);
    num = parseInt(num/10);
}
console.log(sum);