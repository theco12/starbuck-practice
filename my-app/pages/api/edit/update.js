import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      res.status(400).json({ message: "빈칸을 모두 채워주세요" });
    } else {
      const client = await connectDB;
      const db = client.db("todoapp");
      const reqBody = { title: req.body.title, content: req.body.content };
      await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: reqBody });
      res.status(200).redirect(302, "/list");
    }
  }
}
