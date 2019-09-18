// let add = function(a, b) {
//     return  a + b;
// }
// */
function println(message: string): void {
    console.log(message);
}
function add(a: number, b: number): number {
    return a + b;
} 
function addALot(... args: number[]): number {
    let sum: number = 0;
    args.forEach(function(num: number){
        sum += num;
    });
    return sum;
}

let result = add(4, 3);
console.log(result);
result = addALot(1,2.0,3);
console.log(result);
