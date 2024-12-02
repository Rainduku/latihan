
// function hitungGenap(angkaGenap){
//     let total = 0
//     for (let i = 1; i <= angkaGenap; i++) {
//         // console.log(i)
//         if(
//             i%2==0
//         )
//         {
//             // console.log("genap")
//             // total = total + i
//             total += i
//         }
//           }
//           return total
//   }
//   console.log(hitungGenap(10))
 
// menentukan nilai tertinggi
function highValue(angkaTertinggi){
    const numbers = [1, 5, 3, 1, 3, 4, 6];
    let max = numbers[0]
    console.log(numbers.length)
    for(let i = 1; i <= numbers.length; i++){
        if(numbers[i]>max){
            max=numbers[i]
        }
    }
    // const max = Math.max.apply(null, numbers);
    return max
}
console.log(highValue())