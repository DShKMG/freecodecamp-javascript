function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    food: 100,
    eat: function () {
        if (this.food >= 5) {
            this.food -= 5;
            return console.log("Current food : " + this.food)
        }
        return console.log("Can not eat!\nFood is : " + this.food);
    },
    describe: function () {
        console.log("Name : " + this.name);
        console.log("Legs : " + this.numLegs);
        console.log("Food : " + this.food);
    }
};

let doberman = new Dog("Doberman");
for (let i = 0; i < 21; i++) {
    doberman.eat();
}