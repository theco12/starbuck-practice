import Link from "next/link";

export default function cart() {
  return (
    <div>
      <h1>cart Page 입니다.</h1>
      <button>
        <Link href="/cart/payment">결제페이지입니다</Link>
      </button>
    </div>
  );
}
