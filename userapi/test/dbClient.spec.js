const db = require('../config/database');

describe('MongoDB', () => {
  it('should connect to MongoDB', (done) => {
    db.on('connect', () => {
      expect(db.connected).toBe(true);
      done();
    });

    db.on('error', (err) => {
      fail(`MongoDB connection error: ${err.message}`);
      done();
    });
  }, 10000); 
});

