/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
// index using dot
console.log("The pocketNum value using dot:", backpack.pocketNum);
// index using bracket
console.log("The pocketNum value using bracket:", backpack["pocketNum"]);
// index using bracket + reference
var myPocketNum = "pocketNum";
console.log(
  "The pocketNum value using variable reference:",
  backpack[myPocketNum]
);
