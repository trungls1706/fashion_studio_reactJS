import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    text-shadow: 1px 1px 1px props.theme.body;
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
  }

  h2 {
    text-shadow: 1px 1px 1px props.theme.body;
    font-family: "Sirin Stencil";
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    text-transform: capitalize;
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={textVariants} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            W
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            b
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>
        <h2>Inspire, Create, Belive</h2>
      </Title>
      <video src={MainVideo} typeof="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  );
};

export default CoverVideo;
