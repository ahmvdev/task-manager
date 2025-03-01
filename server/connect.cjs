const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const db = process.env.ATLAS_URI;
  const client = new MongoClient(db);

  try {
    await client.connect();
    const collections = await client.db("task-manager").collections();
    collections.forEach((collection) => console.log(collection.collectionName));
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
main();
