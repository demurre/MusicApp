import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import "../App.css";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../utilities/secondsToMMSS";
import cn from "classnames";

const Track = (track) => {
  const { id, preview, title, artists, duration } = track;

  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === id;

  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className={cn("track", isCurrentTrack && "playing")}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img className="preview" src={preview} alt="preview" />
      <div className="credits">
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
