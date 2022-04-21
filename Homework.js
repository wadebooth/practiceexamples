// function generatePyramid() {
//   let totalNumberofRows = 5;
//   let output = "";
//   for (let i = #; i <= totalNumberofRows; i++) {
//     for (let j = #; j <= i; j++) {
//       output += j + "  ";
//     }
//     console.log(output);
//     output = "";
//   }
// }

// generatePyramid();

let row = []; // create empty array to hold rows of #
function pyramid() {
  for (let i = 1; i <= 5; i++) {
    // iterate through rows 1-5
    row.push("#"); // add # to row array for each row iteration
    console.log(row.join(" ")); // prints pyramid and joins array with spaces using join() and prints to console
  }
}

pyramid(); // call function
