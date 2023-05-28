import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title === "" || req.body.content === "") {
      res.status(400).json({ message: "빈칸을 모두 채워주세요" });
    } else {
      const client = await connectDB;
      const db = client.db("todoapp");
      await db.collection("post").insertOne(req.body);
      res.status(200).redirect(302, "/list");
    }
  }
}
