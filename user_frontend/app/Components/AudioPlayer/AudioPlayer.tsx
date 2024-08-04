import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
// import Backdrop from "./Backdrop";
import "./styles.css";
import Image from "next/image";

interface Track {
  audioSrc: string;
  // Add other properties if needed
}

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayers = (
  // { tracks }: { tracks: Track }
) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  // var { audioSrc } = tracks;
  var audioSrc = "https://d1aqpvxsjg85mr.cloudfront.net/beats/1/0.30894490948289066/Kayou Jujutsu Kaisen.mp3"

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
    <div className="audio-player">
      <div className="track-info">
        <img width={24} height={24}
          className="artwork"
          src="-52xxzz.jpg"
          alt={`track artwork for CODE by CODE`}
        />
        <h2 className="title">CODED</h2>
        <h3 className="artist">CODED</h3>
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

export default AudioPlayers;
