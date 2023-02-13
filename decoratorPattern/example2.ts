abstract class Beverage {
  description: string = 'Unknown Beverage';

  getDescription(): string {
    return this.description;
  }

  abstract cost(): number;
}

class Espresso extends Beverage {
  description = 'Espresso';

  cost(): number {
    return 1.99;
  }
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}

class WhippedCream extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Whipped Cream';
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class CaramelSyrup extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ', Caramel Syrup';
  }

  cost(): number {
    return this.beverage.cost() + 0.3;
  }
}

const coffee = new Espresso();
console.log(`${coffee.getDescription()} $${coffee.cost().toFixed(2)}`);

const coffeeWithWhippedCream = new WhippedCream(coffee);
console.log(
  `${coffeeWithWhippedCream.getDescription()} $${coffeeWithWhippedCream
    .cost()
    .toFixed(2)}`
);

const coffeeWithWhippedCreamAndCaramel = new CaramelSyrup(
  coffeeWithWhippedCream
);
console.log(
  `${coffeeWithWhippedCreamAndCaramel.getDescription()} $${coffeeWithWhippedCreamAndCaramel
    .cost()
    .toFixed(2)}`
);
