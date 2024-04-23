import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "April 20, 2024 12:00:00 EDT"
);

console.log("The everyday backpack: ", everydayPack);
console.log("The pocketnum value is:", everydayPack.pocketNum);
console.log("Days since arrived is", everydayPack.backpackAge());
