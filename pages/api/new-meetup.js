// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    //   this credentials will never appear on the client side
    // so it's safe to use it here
    const uri =
      "mongodb+srv://MONGODB_ADMIN_EMIL:xkSbrZ_S*93Muv5@cluster0.tjey8.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);

    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = meetupCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted." });
  }
}
export default handler;
