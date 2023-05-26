import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";
import Link from "next/link";
import { ObjectId } from "mongodb";

export default async function List() {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {data.map((a, i) => {
        return (
          <Link key={i} href={`/detail/${a._id}`}>
            <div key={i} className="list-item">
              <h4>{a.title}</h4>
              <p>{a.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
