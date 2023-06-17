"use client";

import Link from "next/link";

export default async function ListItem({ data }) {
  return (
    <div>
      {data.map((a, i) => {
        return (
          <div key={i} className="list-item">
            <Link key={i} href={`/detail/${a._id}`}>
              <h4>{a.title}</h4>
              <p>{a.content}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
