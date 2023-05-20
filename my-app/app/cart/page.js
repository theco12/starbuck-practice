import Link from "next/link";
import React from "react";
import Gift from "./data.js";

export default function cart() {
  return (
    <div>
      <h1>cart</h1>

      <CartItem />
      <button>
        <Link href="/cart/payment">결제</Link>
      </button>
    </div>
  );
}

function CartItem() {
  return (
    <div>
      {Gift.map((a, i) => {
        return (
          <div key={i} className="listLayout">
            <h3>상품명 : {a.name}</h3>
            <p>상품가격 : {a.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
