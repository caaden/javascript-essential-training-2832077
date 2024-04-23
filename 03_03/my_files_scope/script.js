if (true) {
  // let and const declared variables are available inside "block", or curly braces
  let blockScopedVar = "I am accessible to this block";
  const anotherBlockScopedVar = "So am I";
  console.log(blockScopedVar);
  console.log(anotherBlockScopedVar);
}
// This will not work
// console.log(blockScopedVar);
// console.log(anotherBlockScopedVar);
