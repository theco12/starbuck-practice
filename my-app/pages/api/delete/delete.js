import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const client = await connectDB;
    const db = client.db("todoapp");
    let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body._id) });
    console.log(result);
    res.status(200).json("삭제완료");
  }
}
