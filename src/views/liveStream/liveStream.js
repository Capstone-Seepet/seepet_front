import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";

const LiveStream = () => {
  /*useEffect(() => {
    const socket = io.connect("http://34.64.132.217:5000/video");

    socket.on("frame", (data) => {
      const image = document.getElementById("video");
      image.src = data.data;
    });

    return () => {
      socket.disconnect();
    };
  }, []);*/
  const videoRef= useRef();
  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <>
      {/*<img
        id="video"
        src=""
        alt="Video Stream"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />*/}
      <HeaderLayout />
      <video
        muted
        autoPlay
        loop
        ref={videoRef}
        width="100%"
        onCanPlay={() => setPlayBackRate()}
      >
        <source src={process.env.PUBLIC_URL + "/video/dogVideo.mp4"} type="video/mp4" />
      </video>
      <FooterLayout />
    </>
  );
};
export default LiveStream;
