import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
    </div>
  );
}
