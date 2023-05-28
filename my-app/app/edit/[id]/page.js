import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/edit/update" method="POST">
        <input type="text" name="title" defaultValue={data.title} />
        <input type="text" name="content" defaultValue={data.content} />
        <input
          type="text"
          name="_id"
          defaultValue={data._id.toString()}
          style={{ display: "none" }}
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}
