import { useState } from "react";
import tracksList from "../assets/tracksList";
import "../App.css";
import Track from "../components/Track";

const runSearch = (query) => {
  if (!query) {
    return tracksList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (e) => {
    const foundTracks = runSearch(e.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className="search">
      <input
        className="input"
        placeholder="Search track"
        onChange={handleChange}
      />
      <div className="list">
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
