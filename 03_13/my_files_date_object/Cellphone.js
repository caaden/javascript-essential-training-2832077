class Cellphone {
    // use constructor to define parameters passed in by user
    constructor(
        name,
        owner,
        network
    ){
        // define properties for new object
        this.name=name;
        this.owner=owner,
        this.network=network,
        this.batteryLevel='high',
        this.flippedOpen=false,
        this.charging=false
        const factoryDate="January 1, 2024 00:00:00 EDT"
        this.deployment_date=new Date(factoryDate)
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
    resetDate(dateString) {
        // use standard objects and methods inside of custom classes
        let oldDate=this.deployment_date
        let newDate=new Date(dateString)
        this.deployment_date=newDate
        console.log("Reset deployment date to:",this.deployment_date.toDateString())
        let timeDelta=newDate-oldDate
        let daysSinceDeployed=Math.floor(timeDelta/(100*3600*24))
        return daysSinceDeployed
    }
}

// export module for use downstream
export default Cellphone;