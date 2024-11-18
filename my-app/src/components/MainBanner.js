import React from "react";
import styled from "styled-components";

const MainBanner = () => {
  return (
    <Banner>
      <img src="/img/banner.jpg" alt="Main Banner" />
    </Banner>
  );
};

const Banner = styled.div`
  width: 100%;
  height: 130px;
  max-width: 1140px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  padding: 20px;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export default MainBanner;
