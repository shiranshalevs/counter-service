const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

after(() => {
    process.exit();
  });

  describe('App', () => {
    it('should respond with a 200 status code', async () => {
      try {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });