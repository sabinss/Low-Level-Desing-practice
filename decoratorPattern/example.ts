abstract class Pizza {
  description: string = '';
  getDescription() {
    return this.description;
  }
  abstract cost(): number;
}

class Margherita extends Pizza {
  description: string = 'Margherita Pizza';
  getDescription(): string {
    return this.description;
  }

  cost(): number {
    return 10;
  }
}

class Pepperoni extends Pizza {
  description = 'Pepperoni Pizza';

  cost(): number {
    return 12;
  }
}

abstract class PizzaTopping extends Pizza {
  // piza toppping needs piza as object
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }
}

class ExtraCheese extends PizzaTopping {
  getDescription(): string {
    return this.pizza.getDescription() + 'with extra cheese';
  }
  cost(): number {
    return this.pizza.cost() + 2;
  }
}

class Mushroom extends PizzaTopping {
  cost(): number {
    return this.pizza.cost() + 20;
  }
}

const magherrita = new Margherita();
const magherritaWithCheese = new ExtraCheese(magherrita);
