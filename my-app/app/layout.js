import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <title>thecorative</title>
      <body>
        <div className="navBar">
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
