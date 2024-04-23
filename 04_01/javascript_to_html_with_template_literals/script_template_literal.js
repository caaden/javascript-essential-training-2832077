import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "My Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "April 20, 2024 12:00:00 EDT"
);

// Content Literals
// back tics tell browser that payload is a template literal
// use ${} to insert javascript expressions
const content_literal = `
  <main>
  <article>
    <h1>${everydayPack.name}</h1>
    <ul>
      <li>Volume: ${everydayPack.volume}</li>
      <li>Color: ${everydayPack.color}</li>
      <li>Age: ${everydayPack.backpackAge()}</li>
      <li>Number of pockets: ${everydayPack.pocketNum}</li>
      <li>Left strap length: ${everydayPack.straplength.left}</li>
      <li>Right strap length: ${everydayPack.straplength.right}</li>
      <li>Lid status: ${everydayPack.lidOpen}</li>
    </ul>
  </article>
  </main>
`;

// Old way to output a mix of html and javascript
const content_old = "<h1>" + everydayPack.name + "</h1>";

//Set new body to template literal content
// document.body.innerHTML = content_literal;
document.body.innerHTML = content_old;

console.log("The everyday backpack: ", everydayPack);
console.log("The pocketnum value is:", everydayPack.pocketNum);
console.log("Days since arrived is", everydayPack.backpackAge());
