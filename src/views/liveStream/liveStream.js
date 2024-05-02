import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const LiveStream = () => {
  useEffect(() => {
    const socket = io.connect("http://34.64.132.217:5000/video");

    socket.on("frame", (data) => {
      const image = document.getElementById("video");
      image.src = data.data;
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <img
        id="video"
        src=""
        alt="Video Stream"
        style={{ width: "100%", height: "auto", objectFit: "contain" }}
      />
    </div>
  );
};
export default LiveStream;
