const db = require('../src/dbClient');

describe('Redis', () => {
  it('should connect to Redis', (done) => {
    db.on('connect', () => {
      expect(db.connected).toBe(true);
      done();
    });

    db.on('error', (err) => {
      fail(`Redis connection error: ${err.message}`);
      done();
    });
  }, 10000); 
});

