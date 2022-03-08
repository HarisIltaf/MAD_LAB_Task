let calculate_average_and_highest = function(){
    let return_array =  new Array();
    let sum = 0;
    for(let i = 0; i<arguments.length ; i++){
        sum = sum + arguments[i];
     }
    return_array.push(sum/arguments.length);
    return_array.push(Math.max.apply(Math,arguments));
    return return_array;
     
}
let result = calculate_average_and_highest(15,20,25,30,35);
console.log("Average is : ",result[0]," and highest is: ",result[1]);