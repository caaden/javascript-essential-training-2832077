
import Cellphone from "./Cellphone.js";

const cellPhone = new Cellphone(
  "Razor",
  "Chris",
  "Verizon"
);

console.log("The Cellphone object:", cellPhone);
console.log("Manufacturing Date:",cellPhone.deployment_date.toDateString())
console.log("Is Cellphone open:", cellPhone.flippedOpen);
cellPhone.openPhone()
console.log("Is Cellphone open now:", cellPhone.flippedOpen);
let daysElapsed=cellPhone.resetDate("January 1, 2024 12:00:00 EDT")
console.log("Days between manufacturing and deployment:", daysElapsed)
console.log(cellPhone.className)