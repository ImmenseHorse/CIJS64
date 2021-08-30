// Inheritance
// Encapsulation
// Polymorphism
// Abstraction


class Car {
    name;
    speed;
    brand;
    color;

    constructor(name, speed, brand, color) {
        this.name = name;
        this.speed = speed;
        this.brand = brand;
        this.color = color;
    }

    drive = () => {
        console.log(this.name + " is driving at " + this.speed + " km/h");
    }

    honk = () => {
        console.log(this.name + " is honking");
    }

    paint = (newColor) => {
        console.log("Current color: " + this.color + ". Changing to " + newColor);
        this.color = newColor;
    }
}

const fadil = new Car("Fadil", 100, "VinFast", "red");
const luxSa = new Car("LuxSA", 120, "VinFast", "black");

console.log(fadil);

fadil.honk();
luxSa.drive();

fadil.paint("blue");
luxSa.paint("blue");