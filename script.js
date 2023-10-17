class Person {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  
    getLocation() {
      return this.location;
    }
  }
  
  class UberPriceCalculator {
    constructor(baseRate, perMileRate, perMinuteRate) {
      this.baseRate = baseRate;
      this.perMileRate = perMileRate;
      this.perMinuteRate = perMinuteRate;
    }
  
    calculatePrice(distance, duration) {
      const price = this.baseRate + (distance * this.perMileRate) + (duration * this.perMinuteRate);
      return price;
    }
  }
  
  const person = new Person("John Doe", 30, "New York");
  const uberCalculator = new UberPriceCalculator(5, 2, 0.5);
  
  const distance = 10;
  const duration = 20;
  
  const price = uberCalculator.calculatePrice(distance, duration);
  console.log(`Hi, ${person.getName()}! Your Uber ride from ${person.getLocation()} will cost $${price.toFixed(2)}.`);
  