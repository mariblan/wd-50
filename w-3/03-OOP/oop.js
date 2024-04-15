class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.owner = 'Maria';
    this.hunger = 10;
    this.tired = 10;
    this.social = 10;
  }

  //Getters -> gets a info about the constructor
  getHunger() {
    console.log(this.hunger);
    return this.hunger;
  }
  getInfo() {
    const stats = {
      name: this.name,
      age: this.age,
      owner: this.owner,
      hunger: this.hunger,
      tired: this.tired,
      social: this.social,
    };
    console.log(stats);
    return stats;
  }

  //Setters -> set the info about the property in a constructor
  setName(name) {
    this.name = name;
    return this.name;

  }
  setHunger(hunger) {
    this.hunger = hunger;
    return this.hunger;
  }
  //Other methods
  meow() {
    console.log('Meow!');
  }
}

const cat = new Cat('Tom', 4);

// console.log(cat);
cat.meow();
cat.getInfo();
cat.getHunger();
cat.setHunger(5);
cat.getHunger();
cat.getInfo();
cat.setName("Bolita");
cat.getInfo();

// const cat2 = new Cat('Bolita', 3);
// cat2.getInfo();

// console.log(cat2);
