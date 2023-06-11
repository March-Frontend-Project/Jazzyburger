import React, { useState } from "react";
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import "../styles/favourite.css"

const Favourite = () => {
    const [heart, setHeart] = useState(true)

    const toggleHeart = () => {
        setHeart(!heart)
      };

  return (
    <div>
      <div className="heart-bck" onClick={toggleHeart}>
        {heart ===true ? <FaRegHeart className="heart" /> : <FaHeart className="heart red" />}
      </div>
    </div>
  );
};

export default Favourite;
