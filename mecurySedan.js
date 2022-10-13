//this includes the vehicle class as a module
//this code was all wrong. I think that "require()" is expecting a file name, at least Node.js is.
//this line alone took 15 mins to debug
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor() {
        super("Mercury", "Sedan", 1965, "color", "mileage");
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.availableRoom = true;
        this.started = false;
    }
    //if passenger less than maximumPassengers then availableRoom == true


    loadPassenger(num) {
        this.passenger += num;
        if(this.passenger < this.maximumPassengers) {
            console.log('Everyone fit comfortably!')
            this.availableRoom = true;
        } else {
            console.log('Can\'t fit everyone: it\'s incredibly cramped in here!')
            this.availableRoom = false;

        }
    }

    start() {
        if(this.fuel > 0) {
            this.started = true;
            console.log(`Your ${this.year} ${this.make} ${this.model} starts with a mighty \"Vroom!\"`);
        } else {
            console.log('Can\'t start -- no fuel');
            this.started = false;
        }
    }
    //I had to rename this function because there is already a property named schedulingService
    //declared in the constructor
    schedulingService(mileage) {
        this.mileage = mileage;
        if(this.mileage > 30000) {
            console.log('This car needs maintenance')
            this.scheduleService = true;
        } else {
            console.log('No maintenance needed. Ride free, my friend!')
            this.scheduleService = false;
        }
    }
}

// below is a test to make sure that the class works as intended.
// const newCar = new Car();
// newCar.schedulingService(0);
// newCar.loadPassenger(2);
// newCar.start();
