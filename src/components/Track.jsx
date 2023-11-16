import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";
import "../App.css";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import secondsToMMSS from "../utilities/secondsToMMSS";

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;

  const { handleToggleAudio } = useContext(AudioContext);
  const formattedDuration = secondsToMMSS(duration);

  return (
    <div className="track">
      <FontAwesomeIcon
        className="play-icon"
        icon={faPlay}
        onClick={() => handleToggleAudio(track)}
      />
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
