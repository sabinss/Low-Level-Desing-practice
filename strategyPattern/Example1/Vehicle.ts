class Vehicle {
  private strategy: DriveStrategy;

  constructor(obj: DriveStrategy) {
    this.strategy = obj;
  }

  drive() {
    this.strategy.drive();
  }
}
