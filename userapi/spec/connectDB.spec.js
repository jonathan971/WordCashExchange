const mongoose = require('mongoose');
const connectDB = require('../src/config/database'); 

describe("Database Connection", () => {
    it("should connect to the MongoDB database", async () => {
        try {
            await connectDB();
            expect(mongoose.connection.readyState).toBe(1); // 1 signifie connecté
        } catch (error) {
            fail("Failed to connect to the database"); // Échoue le test si la connexion échoue
        } finally {
            await mongoose.disconnect();
        }
    });
});
