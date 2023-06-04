import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handlerDelete(req, res) {
  if (req.method === "POST") {
    const { _id } = JSON.parse(req.body);
    const client = await connectDB;
    const db = client.db("todoapp");
    const result = await db.collection("post").deleteOne({ _id: new ObjectId(_id) });
    res.status(200).json({ deletedCount: result.deletedCount });
  }
}
