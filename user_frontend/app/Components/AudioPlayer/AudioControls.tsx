import React from "react";
// import { ReactComponent as Play } from "./assets/play.svg";
// import { ReactComponent as Pause } from "./assets/pause.svg";
// import { ReactComponent as Next } from "./assets/next.svg";
// import { ReactComponent as Prev } from "./assets/prev.svg";

interface AudioControlsProps {
    isPlaying: boolean;
    onPlayPauseClick: (isPlaying: boolean) => void;
}

const AudioControlsMini: React.FC<AudioControlsProps> = ({ isPlaying, onPlayPauseClick }) => (
    <div className="audio-controls">
        <button
            type="button"
            className="prev"
            aria-label="Previous"
        >
            <img src="prev.svg" alt="prev">

            </img>
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="pause"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <img src="pause.svg" alt="prev">

                </img>
            </button>
        ) : (
            <button
                type="button"
                className="play"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <img src="play.svg" alt="prev">

                </img>
            </button>
        )}
        <button
            type="button"
            className="next"
            aria-label="Next"
        >
            <img src="next.svg" alt="prev">

            </img>
        </button>
    </div>
);

export default AudioControlsMini;
