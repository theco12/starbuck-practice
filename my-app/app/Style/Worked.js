"use client";

import React from "react";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000000;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  column-gap: 40px;
`;

const ProflileLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

const Worked = () => {
  const data = [
    { company: "YATAV", activate: " UIUX Designer & Frontend Developer | 2020.01 ~ Now" },
    { company: "H2Medi", activate: " UIUX Designer | 2020.01 ~ 2020.12" },
  ];

  const skill = [
    { Skill: "Frontend", activate: "HTML, CSS, JAVASCRIPT, REACT.JS, NEXT.JS, Bootstrap" },
    { Skill: "Devops", activate: "MYSQL, MongoDB, AWS Beanstalk" },
    { Skill: "Desing", activate: "Photoshp, illustrator, Figma" },
  ];

  return (
    <div>
      <ProflileLayout>
        <h2>🧑🏻‍💻 I'm worked at </h2>
        <Line />
        {data.map((item) => (
          <div>
            <ProfileContainer>
              <h3>{item.company}</h3>
              <p>{item.activate}</p>
            </ProfileContainer>
            <Line />
          </div>
        ))}
      </ProflileLayout>

      <ProflileLayout>
        <h2>🧑🏻‍💻 I'm Skills </h2>
        <Line />
        {skill.map((item) => (
          <div>
            <ProfileContainer>
              <h3>{item.Skill}</h3>
              <p>{item.activate}</p>
            </ProfileContainer>
            <Line />
          </div>
        ))}
      </ProflileLayout>
    </div>
  );
};

export default Worked;
