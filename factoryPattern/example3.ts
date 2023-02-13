interface Logger {
  log: (message: string, fileName?: 'error-log') => void;
}

class FileLogger implements Logger {
  log(message: string, fileName?: 'error-log') {
    console.log('add logs in file');
  }
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log('maintain log in console.log');
  }
}

class LoggerFactory {
  static createLog(type: string) {
    switch (type) {
      case 'fileLogger':
        return new FileLogger();
    }
  }
}

const fileLog = LoggerFactory.createLog('fileLogger');
fileLog?.log('file log');
