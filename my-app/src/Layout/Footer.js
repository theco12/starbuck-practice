import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div>홈페이지회사소개채용고객센터: 1599-4905 (24시간 연중무휴)</div>
      <p>㈜비바리퍼블리카 Copyright © Viva Republica, Inc. All Rights Reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid #e0e0e0;
  font-size: 12px;
`;

export default Footer;
