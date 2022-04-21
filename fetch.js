// //EXAMPLE ONE
import fetch from "node-fetch";

// const fetch = require("node-fetch");

// async function getDataAsync() {
//   try {
//     const response = await fetch("https://api.sampleapis.com/beers/ale"); // GET -> Promise // Do something with response
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// getDataAsync();
//EXAMPLE TWO

// fetch("https://api.sampleapis.com/beers/ale")
//   .then((response) => {
//     return response.json(); //do something
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

////Example Three

fetch("https://api.sampleapis.com/beers/ale")
  .then((response) => response.json())
  .then((data) => console.log(data[87]))
  .catch((err) => console.error(err));
