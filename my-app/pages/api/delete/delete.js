import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handlerDelete(req, res) {
  if (req.method === "DELETE") {
    const client = await connectDB;
    const db = client.db("todoapp");
    let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body._id) });
    res.status(200).json("삭제완료");
    console.log(result);
  }
}
