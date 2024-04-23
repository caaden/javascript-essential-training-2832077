const backpack = {
  name: "Everyday Backpack",
  volume: 23,
  color: "black",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 25,
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
