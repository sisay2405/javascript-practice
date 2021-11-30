//   divided by three and five 
// function fizzbuzz(){
//     for (let i = 0; i < 100; i++) {
//         if (i%3 == 0 && i%5 == 0)  {
//            console.log(i + " FizzBuzz") 
//         }
//     }
// }
// fizzbuzz()
// 0 15 30 45 60 75 90 

// divided by three and not five 
// function fizzbuzz(){
//     for (let i = 0; i < 100; i++) {
//         // if (i%3 == 0 && i%5 == 0)  {
//         //    console.log(i ) 
//         // }
//         if (i%3 == 0 && i%5 == !0) {
//             console.log(i + " Fizz")  
//         }
//         // if (i%5 == 0 || !i%3 == 0) {
//         //     console.log("Buzz")  
//         // }
//     }
// }
// fizzbuzz()
// 6 21 36 51 66 81 96 
function fizzbuzz(){
    for (let i = 0; i < 100; i++) {
        // if (i%3 == 0 && i%5 == 0)  {
        //    console.log(i) 
        // }
        // if (i%3 == 0 && i%5 == !0) {
        //     console.log(i)  
        // }
        if (i%5 == 0 && i%3 == !0) {
            console.log(i + " Buzz")  
        }
    }
}
fizzbuzz()
// 10 25 40 55 70 85 