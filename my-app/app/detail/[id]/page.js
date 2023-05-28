import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
  console.log(props.params.id);
  console.log(data);

  return (
    <div>
      <h1 className="detail-title">💻상세페이지</h1>
      <div className="detail-bg">
        <div className="detail-item">
          <h4>{data.title}</h4>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
