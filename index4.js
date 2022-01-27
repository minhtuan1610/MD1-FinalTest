class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(newName) {
        this.name = newName;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        let infoObj = "Name: " + this.name + "; Weight: " + this.weight;
        return infoObj;
    }
}

let objAnimal1 = new Animal("Voi", 50);
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
objAnimal1.getName();
objAnimal1.getWeight();
console.log(objAnimal1.toString());
let objAnimal2 = new Animal("rat", 4.5);
objAnimal2.setName("Mouse");
objAnimal2.getName();
objAnimal2.getWeight();