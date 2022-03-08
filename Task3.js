<<<<<<< HEAD
// Write program to find sum of even digits. Input 23617 output 2+6=8.
let num = 23617;
let sum = 0;
while(num>0){
    sum += ((num%10)%2==0?num%10:0);
    num = parseInt(num/10);
}
=======
// Write program to find sum of even digits. Input 23617 output 2+6=8.
let num = 23617;
let sum = 0;
while(num>0){
    sum += ((num%10)%2==0?num%10:0);
    num = parseInt(num/10);
}
>>>>>>> f0311a8b7ef50e2f6de62bc19ace70136fcfa74f
console.log(sum);