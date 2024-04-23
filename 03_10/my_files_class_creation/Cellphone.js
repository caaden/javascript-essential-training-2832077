class Cellphone {
    // use constructor to define parameters passed in by user
    constructor(
        name,
        owner,
        network,
    ){
        // define properties for new object
        this.name=name;
        this.owner=owner,
        this.network=network,
        this.batteryLevel='high',
        this.flippedOpen=false,
        this.charging=false
    }
    // define methods after the constructor
    openPhone() {
        if (this.flippedOpen == true) {
            console.log("Phone is already open.");
          }
          if (this.flippedOpen == false) {
            console.log("Opening phone.");
            this.flippedOpen = true;
          }  
        }
    setOwner(newOwner) {
        this.owner = newOwner;
        console.log("Assigned new owner to:", newOwner);
        }
}

// export module for use downstream
export default Cellphone;