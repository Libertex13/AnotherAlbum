import { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Album from "../AlbumComponent/Album";
import { randomAlbum } from "../../ApiServices/APIServices";

export default function AnotherAlbum () {
  const [album, setAlbum] = useState(null);
  // const [favourites, setFavourite] = useState([]);

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const newAlbum = await randomAlbum();
      setAlbum(newAlbum);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="AnotherAblum">
      <div className="Body">
          <Album album={album} />
          <button onClick={handleClick}>AnotherAlbum?</button>
      </div>
    </div>
  );
}