import React, { useState, useEffect } from "react";
import Popularartistcard from "../cards/Popularartistcard";
import { database } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ArtistDetail from './ArtistDetail'; 

const userRef = collection(database, "musicdata");

const Popularartist = () => {
 const [musicData, setMusicData] = useState([]);
 const [popularArtists, setPopularArtists] = useState([]);
 const [showArtistDetail, setShowArtistDetail] = useState(false);
 const [selectedArtist, setSelectedArtist] = useState('');

 useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(userRef);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMusicData(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
 }, []);

 useEffect(() => {
    if (musicData && musicData.length > 0) {
      const artistSongCountMap = {};

      musicData.forEach(song => {
        const artist = song.artist; // Assuming each song has a single artist
        if (!artistSongCountMap[artist]) {
          artistSongCountMap[artist] = 1;
        } else {
          artistSongCountMap[artist]++;
        }
      });

      setPopularArtists(Object.entries(artistSongCountMap));
    }
 }, [musicData]);

 const handleArtistClick = (artistName) => {
    setSelectedArtist(artistName);
    setShowArtistDetail(true);
 };

 const handleArtistback = () => {
  setShowArtistDetail(false);
};

 return (
    <div className="mt-2 ">
      <h1  onClick={() => handleArtistback()} className="text-xl text-left ">Popular Artists</h1>
      <div
        className=" flex flex-wrap justify-start overflow-y-scroll"
        style={{
          height: "55vh",
          "--scrollbar-bg": "#ffffff",
          "--scrollbar-thumb": "#cccccc",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            width: "0px",
            background: "var(--scrollbar-bg)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "var(--scrollbar-thumb)",
          },
        }}
      >
        {showArtistDetail ? (
          <ArtistDetail name={selectedArtist} />
        ) : (
          popularArtists.map(([artist, count]) => (
           
           <div  onClick={() => handleArtistClick(artist)}>
            <Popularartistcard
              key={artist}
              name={artist}
              songcount={count}
             
            />
            </div>
          ))
        )}
      </div>
    </div>
 );
};

export default Popularartist;
