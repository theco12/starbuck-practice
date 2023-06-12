import Link from "next/link";
import React from "react";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <Image src="/images/banner1.png" alt="My Image" width={1200} height={900} />
    </div>
  );
}
