<<<<<<< HEAD
// Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 
let num=23678;
let k = 4;
while(k>1){
    k-=1;
    num = parseInt(num/10);
    console.log(num);
}
=======
// Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3. 
let num=23678;
let k = 4;
while(k>1){
    k-=1;
    num = parseInt(num/10);
    console.log(num);
}
>>>>>>> f0311a8b7ef50e2f6de62bc19ace70136fcfa74f
console.log("Result:",num%10);