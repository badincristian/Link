var car = {
    make: "Ford",
    model: "Mustang",
    year: 1990,
    color: "yellow",
    passengers: 4,
    milage: 2000,
    engineIsOn: false,
    fuel: 50,
    maxFuel: 50,
    mediumConsumption: 7.5,
    refill: function(num) {
        if(this.fuel + num > this.maxFuel) {
            this.fuel = this.maxFuel;
            console.log ("Too much!")
        } else{
            this.fuel += num;
        }
    },
    drive: function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("Too far!");
            distance = this.distanceToEmpty();
        }
        consumption = Math.round (distance * this.mediumConsumption /100);    
        this.fuel -= consumption;
        this.milage += distance;
        
    },
    distanceToEmpty: function() {
        return Math.round (this.fuel / this.mediumConsumption * 100);
    },
    stop: function() {
        console.log ("Car stopped");
        if(this.engineIsOn) {
            this.engienIsOn = false;
        } else {
            console.log("Car is alraedy stopped");
        }
    },
    start: function() {
        console.log ("Car started");
        if(!this.engineIsOn) {
            this.engineIsOn = true;
        } else {
            console.log("Car is alraedy started")
        
        }
    },
}

car.milage = 2150;
console.log(car.year)
console.log (car.milage)
car.start();
car.start();

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);

// for(prop in car) {
//     console.log(prop + " = " + car[prop]);
// }