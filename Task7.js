// Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers. The array length must be greater or equal to 2.


let arr = [32,54,65,1,23,45,10];
if(arr[0]===10){
    console.log("10 is at start");
}
else if(arr[arr.length-1]===10){
    console.log("10 is at end");
}
else{
    for(var i=0;i<arr.length;i++){
        if(arr[i]===10){
            console.log("10 is at",i);
        }
    }
}