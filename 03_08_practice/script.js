const cellphone = {
  name: "Flip Phone",
  owner: "user",
  network: "network",
  batteryLevel: "high",
  flippedOpen: false,
  charging: false,
  openPhone: function () {
    if (this.flippedOpen == true) {
      console.log("Phone is already open.");
    }
    if (this.flippedOpen == false) {
      console.log("Opening phone.");
      this.flippedOpen = true;
    }
  },
  setOwner: function (newOwner) {
    this.owner = newOwner;
    console.log("Assigned new owner to:", newOwner);
  },
};

console.log("Created new flip phone:", cellphone);
cellphone.setOwner("Chris Aden");
cellphone.openPhone();
cellphone.openPhone();
