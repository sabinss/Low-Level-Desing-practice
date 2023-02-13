class CompressionStrategy {
  private compressionStrategy: CompressionStrategy;

  constructor(obj: CompressionStrategy) {
    this.compressionStrategy = obj;
  }
  compress(file: File) {
    this.compressionStrategy.compress(file);
  }
}
