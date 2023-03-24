import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  const styledHeader = styled.header``;

  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link to="/user/join">Join</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <button>  </button>
        </li>
      </ul>
    </header>
  );
};
