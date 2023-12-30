const userController = require('../src/controllers/user');
const db = require('../config/database');

describe('User Controller', () => {
    beforeEach(() => {
        db.flushdb();
    });

    describe('Create User', () => {
        it('should create a new user successfully', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            userController.create(user, (err, result) => {
                expect(err).toBeNull();
                expect(result).toEqual('OK');
                done();
            });
        });

        it('should not create a user with incomplete data', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            userController.create(user, (err, result) => {
                expect(err).not.toBeNull();
                expect(result).toBeNull();
                done();
            });
        });

        it('should not create a user that already exists', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            userController.create(user, () => {
                userController.create(user, (err, result) => {
                    expect(err).not.toBeNull();
                    expect(result).toBeNull();
                    done();
                });
            });
        });
    });

    describe('Get User', () => {
        it('should retrieve an existing user by username', (done) => {
            const user = {
                name: 'jojovel',
                email: 'jonathan@gmail.com'
            };

            userController.create(user, () => {
                userController.get(user.username, (err, result) => {
                    expect(err).toBeNull();
                    expect(result.firstname).toEqual('jonathan');
                    expect(result.lastname).toEqual('VELIN');
                    done();
                });
            });
        });

        it('should return null for a non-existent user', (done) => {
            userController.get('invalid', (err, result) => {
                expect(err).not.toBeNull();
                expect(result).toBeNull();
                done();
            });
        });
    });

});
