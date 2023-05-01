import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/coverVideo";
import Logo from "../components/logo";
const Section = styled.section`
  position: relative;
  min-height: 200vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo/>
    </Section>
  );
};

export default Home;
