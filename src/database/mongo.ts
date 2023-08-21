import { MongoClient as Client, Db } from "mongodb";

export const MongoClient = {
  client: undefined as unknown as Client,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || "mongodb://localhost:27017";
    const username = process.env.MONGODB_USERNAME || "root";
    const password = process.env.MONGODB_PASSWORD || "password";

    const client = new Client(url, { auth: { username, password } });
    const db = client.db("users-db");

    this.client = client;
    this.db = db;
  },
};
