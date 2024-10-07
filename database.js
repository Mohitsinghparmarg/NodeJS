require('dotenv').config();

const { MongoClient } = require('mongodb');

const url = process.env.MONGODB_URL;
const client = new MongoClient(url);

const dbName = 'hellobhai';

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('User');

        // Insert the Data
        const data = {
            firstName: "rahul",
            lastName: "parmar",
            city: "agra",
            phoneNumber: "9917032560"
        };
        const insertResult = await collection.insertOne(data);
        console.log('Inserted documents =>', insertResult);

        // Update the data
        const updateFilter = { phoneNumber: "9917032560" }; // Example filter to find the document
        const updateResult = await collection.updateOne(updateFilter, { $set: { b: 1 } });
        console.log('Updated documents =>', updateResult);

        // Remove the data
        const deleteFilter = { phoneNumber: "9917032560" }; // Example filter to find the document to delete
        const deleteResult = await collection.deleteMany(deleteFilter);
        console.log('Deleted documents =>', deleteResult);

        // Count 
        const countResult = await collection.countDocuments({});
        console.log("count of the documents in the User collection =>",countResult);

        // Read the Data
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        await client.close();
    }

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error);
