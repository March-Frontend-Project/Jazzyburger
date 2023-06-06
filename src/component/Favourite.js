import React, { useState } from "react";
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'

const Favourite = () => {
    const [heart, setHeart] = useState(true)

    const toggleHeart = () => {
        setHeart(!heart)
      };

  return (
    <div>
      <div className="heart-bck" onClick={toggleHeart}>
        {heart ===true ? <FaHeart className="heart red" /> : <FaRegHeart className="heart" />}
      </div>
    </div>
  );
};

export default Favourite;
