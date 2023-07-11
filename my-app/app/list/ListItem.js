"use client";

import Link from "next/link";
import styled from "styled-components";

const NewDate = styled.div`
  font-size: 12px;
  color: #999;
`;

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
