import React, { useEffect } from "react";
interface BackdropProps {
    activeColor: string;
    isPlaying: boolean;
}

const Backdrop:React.FC<BackdropProps> = ({ activeColor, isPlaying }) => {
    useEffect(() => {
        document.documentElement.style.setProperty("#00aeb0", activeColor);
    }, [ activeColor]);

    return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};

export default Backdrop;
