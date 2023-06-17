import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Container } from "./Style/Container";
import Worked from "./Style/Worked";

export default async function Home() {
  return (
    <div>
      <Container>
        <h1>💻 thecorative Blog</h1>
        <p>
          I'm a Software Developer with Data Skills. I have mainly worked as a Tech Lead at Startups
          🚀 Now I'm working as Web Frontend Lead at Healingpaper that serves Gangnamunni.
        </p>
        <Worked />
      </Container>
    </div>
  );
}
