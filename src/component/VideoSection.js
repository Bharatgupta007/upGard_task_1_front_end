import React from "react";

const VideoSection = () => {
  return (
    <div className="card w-75 m-auto my-3">
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <p>I m here at Video</p>
          <iframe
            src={`https://www.youtube.com/watch?v=qEVUtrk8_B4`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;