import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <h1>TheBlog</h1>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to="/" onClick={toggleMenu}>
          <li> Home</li>
        </Link>

        <Link to="/login" onClick={toggleMenu}>
          <li> 로그인</li>
        </Link>

        <Link to="/mypage" onClick={toggleMenu}>
          <li> 마이페이지</li>
        </Link>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-size: 15px;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #fff;
  list-style: none;
  margin: 0;
  padding: 0 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 10;

  li {
    margin: 10px 0;
    padding: 16px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    color: #424242;
  }

  li:hover {
    background-color: #f0f0f0;
    padding: 16px;
  }

  a {
    text-decoration: none;
    color: #424242;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    position: static;
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    display: flex;
    justify-content: center;
    padding: 0;
    box-shadow: none;

    li {
      margin: 0 10px;
      padding: 8px 12px;

      &:last-child {
        margin-right: 0;
      }
    }
    li:hover {
      background-color: #f0f0f0;
      padding: 8px 12px;
    }
  }
`;

export default Nav;
