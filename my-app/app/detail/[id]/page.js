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
      <h1>상세페이지</h1>
      <div className="list-bg">
        <div className="list-item">
          <h4>글제목 : {data.title}</h4>
          <p>내용 : {data.content}</p>
        </div>
      </div>
    </div>
  );
}
