// Task 1
//
// Write a "for" loop that will perform exactly the same repetitive code as this:
//
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')
for (var count = 1; count <= 5; count = count + 1){
	console.log(count);
}
console.log("Count completed!");



// Task 2 
//
// Write a "for" loop that will perform exactly the same repetitive code as this:
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// console.log('Countdown finished!')
//
for (var count = 5; count >= 1 ; count = count - 1) {
	console.log(count);
}
console.log('Countdown finished!');

// Task 3
//
// Write a "while" loop that will perform exactly the same repetitive code as this:
//
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')
//
var count = 1;
while (count <= 5) {
	console.log(count);
	count = count + 1; 
}
console.log("Counting completed");
