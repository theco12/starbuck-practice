"use client";

import { useState } from "react";

export default function List() {
  let Gift = [
    { name: "Tomatoes", price: 2500 },
    { name: "Pasta", price: 4500 },
    { name: "Coconut", price: 3500 },
  ];

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>상품목록</h1>

      {Gift.map((a, i) => {
        return (
          <div key={i}>
            <img src={`/images/food${i}.png`} width="100px" />
            <h3>{a.name}</h3>
            <p>{a.price}</p>
            <button
              onClick={() => {
                setCount(count - 1);
              }}>
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                setCount(count + 1);
              }}>
              +
            </button>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

// styled
