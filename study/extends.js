class Vehicle{
    constructor(name,wheel){
        this.name = name
        this.wheel = wheel
    }
}

const myVehicle = new Vehicle('오토바이',2);
console.log(myVehicle);

class Bicycle extends Vehicle{
    constructor(name,wheel){
        super(name,wheel)
    }
}
const myBicycle = new Bicycle('자전거',2)
const myBicycle2 = new Bicycle('세발자전거',3);
console.log(myBicycle)
console.log(myBicycle2)

class Car extends Vehicle{
    constructor(name,wheel,license){
        super(name,wheel)
        this.license = license;
    }
}

const myCar = new Car('벤츠',4,true);
const yourCar = new Car('bmw',4,true);
console.log(myCar)
console.log(yourCar)
