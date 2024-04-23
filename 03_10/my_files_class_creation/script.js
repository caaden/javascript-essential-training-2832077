
import Cellphone from "./Cellphone.js";

const cellPhone = new Cellphone(
  "Razor",
  "Chris",
  "Verizon"
);

console.log("The Cellphone object:", cellPhone);
console.log("Is Cellphone open:", cellPhone.flippedOpen);
cellPhone.openPhone()
console.log("Is Cellphone open now:", cellPhone.flippedOpen);
