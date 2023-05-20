class FirebaseError extends Error {
    code: string;
  
    constructor(code: string, message: string) {
      super(message);
      this.code = code;
      this.name = 'FirebaseError';
    }
  }
  