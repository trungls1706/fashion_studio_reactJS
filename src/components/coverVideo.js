import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";

const VideoContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  video {
    width: "100%";
    height: "100%";
    object-fit: cover; 
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={MainVideo} controls></video>
    </VideoContainer>
  );
};

export default CoverVideo;
