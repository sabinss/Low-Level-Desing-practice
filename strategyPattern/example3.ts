interface SortingStrategy {
  sort(data: number[]): number[];
}

class QuickSort implements SortingStrategy {
  sort(data: number[]): number[] {
    // QuickSort algorithm
    return data.sort((a, b) => a - b);
  }
}

class MergeSort implements SortingStrategy {
  sort(data: number[]): number[] {
    // MergeSort algorithm
    return data.sort((a, b) => a - b);
  }
}

class SortingContext {
  private strategy: SortingStrategy;

  setStrategy(strategy: SortingStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

const context = new SortingContext();

context.setStrategy(new QuickSort());
console.log(context.sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));

context.setStrategy(new MergeSort());
console.log(context.sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
