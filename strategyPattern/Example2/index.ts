interface CompressionStrategy {
  compress(data: string): string;
}

class JpegCompression implements CompressionStrategy {
  compress(data: string): string {
    // JPEG compression algorithm
    return data + ' - JPEG compressed';
  }
}

class PngCompression implements CompressionStrategy {
  compress(data: string): string {
    // PNG compression algorithm
    return data + ' - PNG compressed';
  }
}

class CompressionContext {
  private strategy: CompressionStrategy;

  setStrategy(strategy: CompressionStrategy) {
    this.strategy = strategy;
  }

  compress(data: string): string {
    return this.strategy.compress(data);
  }
}

const context = new CompressionContext();

context.setStrategy(new JpegCompression());
console.log(context.compress('image data'));

context.setStrategy(new PngCompression());
console.log(context.compress('image data'));
