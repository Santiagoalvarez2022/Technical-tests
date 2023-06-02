//declare an object with the integer values that each roman symbol represents
const values_symbol= {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
} 
// declare the three possible values for a subtraction to occur
const car_restas = [1,10,100]

const romanToInt =(s) =>{
    let value_int = 0;
    //split the string into an array of roman symbols
    s.split("")
    //convert each symbol to its integer value
    .map(symbol => values_symbol[symbol.toUpperCase()])
    // I evaluate if I should do an addition or subtraction according to the symbol that is in that index
    .forEach((num, index, array)=>{
        const next_num = array[index+1]
        const multi = num*10  
        car_restas.includes(num) && next_num > num && next_num <= multi ? value_int-=num  : value_int+=num
    })

    return  value_int;
}; 






    // version no optimizada 
    //for (let x = 0; x < new_array.length; x++) {
    //     const num = new_array[x];
    //     const multi = num*10
    //     const next_num = new_array[x+1] 

    //     if (car_restas.includes(num)) {
    //         if (next_num > num && next_num <= multi) {
    //             value_int-=num

    //         } else{ 
    //             value_int+=num
    //         }
    //     } else {
    //         value_int+=num; 
    //     }

    // } otra version

     // car_restas.includes(num)
        //     ?  (next_num > num && next_num <= multi) 
        //         ? value_int-=num

        //         :  value_int+=num

        //     :  value_int+=num; 