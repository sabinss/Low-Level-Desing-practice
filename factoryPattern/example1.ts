interface DBConnection {
  connect(): void;
  disconnect(): void;
}

class MongoDBConnection implements DBConnection {
  connect(): void {
    console.log('Connecting to MongoDB...');
  }

  disconnect(): void {
    console.log('Disconnecting from MongoDB...');
  }
}

class MySQLDBConnection implements DBConnection {
  connect(): void {
    console.log('Connecting to MySQL...');
  }

  disconnect(): void {
    console.log('Disconnecting from MySQL...');
  }
}

class DBConnectionFactory {
  static createDBConnection(type: string): DBConnection {
    switch (type) {
      case 'MongoDB':
        return new MongoDBConnection();
      case 'MySQL':
        return new MySQLDBConnection();
      default:
        throw new Error(`Unsupported database type: ${type}`);
    }
  }
}

class UserService {
  private dbConnection: DBConnection;

  constructor(type: string) {
    this.dbConnection = DBConnectionFactory.createDBConnection(type);
  }

  createUser(user: any): void {
    this.dbConnection.connect();
    console.log('Creating user in the database...');
    this.dbConnection.disconnect();
  }
}

const userService = new UserService('MongoDB');
userService.createUser({ name: 'John Doe' });
