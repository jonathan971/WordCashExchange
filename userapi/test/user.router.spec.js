const request = require('supertest');
const app = require('../src/index');
const db = require('../config/database');
const userController = require('../src/controllers/user');


describe('User Routes', () => {
    beforeEach(() => {
        db.flushdb();
    });

    afterAll(() => {
      app.close();
      db.quit();
    });

    describe('POST /users', () => {
        it('should create a new user', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            request(app)
                .post('/user')
                .send(user)
                .expect(201)
                .then((res) => {
                    expect(res.body.status).toEqual('success');
                    done();
                })
                .catch((err) => done(err));
        });

        it('should return error for invalid user data', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            request(app)
                .post('/user')
                .send(user)
                .expect(400)
                .then((res) => {
                    expect(res.body.status).toEqual('error');
                    done();
                })
                .catch((err) => done(err));
        });
    });

   describe('GET /users', () => {
        it('should get an existing user', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            userController.create(user, () => {
                request(app)
                    .get(`/user/${user.username}`)
                    .expect(200)
                    .then((res) => {
                        expect(res.body.status).toEqual('success');
                        done();
                    })
                    .catch((err) => done(err));
            });
        });

        it('should return error for non-existent user', (done) => {
            request(app)
                .get('/user/invalid')
                .expect(400)
                .then((response) => {
                    expect(response.body.status).toEqual('error');
                    done();
                })
                .catch((err) => done(err));
        });
    });

});
