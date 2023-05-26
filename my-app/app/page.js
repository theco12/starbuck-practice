import Link from "next/link";
import React from "react";
import { MongoClient } from "mongodb";
import { connectDB } from "../util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("todoapp");
  let data = await db.collection("post").find().toArray();
  console.log(data);
  console.log(data[0].title);

  return (
    <div>
      <h1>{data[0].title}</h1>
    </div>
  );
}
