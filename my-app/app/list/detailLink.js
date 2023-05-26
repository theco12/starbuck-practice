"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push(`/detail/${a._id}`);
        }}>
        버튼
      </button>
    </div>
  );
}

// useRouter 설명
