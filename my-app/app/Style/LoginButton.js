"use client";
import { signIn } from "next-auth/react";
import styled from "@emotion/styled";

const LoginButtonStyle = styled.button`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  color: #000000;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export default function LoginButton() {
  return (
    <LoginButtonStyle
      onClick={() => {
        signIn();
      }}>
      로그인
    </LoginButtonStyle>
  );
}
