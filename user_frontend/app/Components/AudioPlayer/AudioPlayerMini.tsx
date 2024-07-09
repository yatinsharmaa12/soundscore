import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
// import Backdrop from "./Backdrop";
import "./styles.css";
import Backdrop from "./Backdrop";



const AudioPlayerMini = ({ audioSrc,title }: { audioSrc:string, title:string }) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  
  // const { audioSrc, title } = tracks;
  // var audioSrc = "https://d1aqpvxsjg85mr.cloudfront.net/beats/1/0.30894490948289066/Kayou Jujutsu Kaisen.mp3"

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {

      setTrackProgress(audioRef.current.currentTime);

    }, 1000);
  };





  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);


  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
<div className="audio-player w-48 h-20 rounded-3xl p-6 shadow-xl shadow-slate-800" style={{ backgroundColor: "#00aeb0" }}>
        <div className="">
      <AudioControls
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          style={{ background: trackStyling }}
        />
      </div>
      </div>
  );
};

export default AudioPlayerMini;
