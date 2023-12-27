const userController = require('../src/controllers/user');
const db = require('../src/dbClient');

describe('User Controller', () => {
    beforeEach(() => {
        db.flushdb();
    });

    describe('Create User', () => {
        it('should create a new user successfully', (done) => {
            const user = {
                username: 'jojovel',
                firstname: 'jonathan',
                lastname: 'VELIN'
            };

            userController.create(user, (err, result) => {
                expect(err).toBeNull();
                expect(result).toEqual('OK');
                done();
            });
        });

        it('should not create a user with incomplete data', (done) => {
            const user = {
                firstname: 'jonathan',
                lastname: 'VELIN'
            };

            userController.create(user, (err, result) => {
                expect(err).not.toBeNull();
                expect(result).toBeNull();
                done();
            });
        });

        it('should not create a user that already exists', (done) => {
            const user = {
                username: 'jojovel',
                firstname: 'jonathan',
                lastname: 'VELIN'
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
                username: 'jojovel',
                firstname: 'jonathan',
                lastname: 'VELIN'
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

    // Ajoutez d'autres cas de test pour les fonctions supplémentaires dans user.controller.js
});
