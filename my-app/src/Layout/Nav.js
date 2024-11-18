import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <h1>TheBlog</h1>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/mypage">마이페이지</Link>
        </li>
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 30px;

  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-size: 15px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin-right: ${(props) => props.margin || "10px"};
    color: ${(props) => props.color || "#424242"};

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export default Nav;
