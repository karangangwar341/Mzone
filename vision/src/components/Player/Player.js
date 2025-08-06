import React, { useState, useRef, useEffect } from "react";
import { database } from "../../firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { FaHeart, FaPause, FaPlay } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { IoVolumeMute } from "react-icons/io5";
import { ImPrevious, ImNext } from "react-icons/im";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";

const musicCollection = collection(database, "musicdata");
const recentlyPlayedCollection = "recentlyPlayed"; // Firebase collection name

const Player = () => {
  const [musicData, setMusicData] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(null);

  const [localStorageIndex, setLocalStorageIndex] = useState(
    localStorage.getItem("currentIndex1")
  );

  // Poll localStorage for changes
  useEffect(() => {
    const interval = setInterval(() => {
      const current = localStorage.getItem("currentIndex1");
      if (current !== localStorageIndex) {
        setLocalStorageIndex(current);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [localStorageIndex]);

  // Fetch music data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(musicCollection);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMusicData(data);
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };
    fetchData();
  }, []);

  // Set audio source when song index or musicData changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || musicData.length === 0) return;

    const song = musicData[currentSongIndex];
    if (!song) return;

    audio.src = song.songlink;

    if (isPlaying) {
      audio.play().catch((err) => console.warn("Play error:", err));
    }

    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextSong();
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentSongIndex, isPlaying, musicData, isLooping]);

  // Time and duration updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  // Handle index from localStorage
  useEffect(() => {
    if (!localStorageIndex || musicData.length === 0) return;

    const foundIndex = musicData.findIndex((el) => el.id === localStorageIndex);
    if (foundIndex !== -1 && foundIndex !== currentSongIndex) {
      setCurrentSongIndex(foundIndex);
    }

    // Add to recently played in Firebase
    const pushToRecentlyPlayed = async () => {
      console.log("running");
      const song = musicData.find((el) => el.id === localStorageIndex);
      if (!song) return;

      try {
        await setDoc(doc(database, recentlyPlayedCollection, song.id), {
          ...song,
          playedAt: serverTimestamp(),
        });
      } catch (err) {
        console.error("Error updating recently played:", err);
      }
    };

    pushToRecentlyPlayed();
  }, [localStorageIndex, musicData]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % musicData.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? musicData.length - 1 : prev - 1
    );
  };

  const handleVolumeChange = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  const handleSeekUpdate = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const toggleLoop = () => {
    setIsLooping((prev) => !prev);
  };

  const currentSong = musicData[currentSongIndex];

  return (
    <div className="text-white bg-white/10 mt-1 p-2 rounded-xl text-xs">
      <audio ref={audioRef} />
      <div className="flex w-full">
        <button
          className="px-3 sm:hidden py-1 mx-1 hover:bg-white/10 rounded-3xl"
          onClick={prevSong}
        >
          <ImPrevious size="1.3rem" />
        </button>

        <input
          type="range"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeekUpdate}
          className="slider w-full"
        />
        <button
          className="px-3 py-1 sm:hidden mx-1 hover:bg-white/10 rounded-3xl"
          onClick={nextSong}
        >
          <ImNext size="1.3rem" />
        </button>
      </div>
      <p>
        {currentSong?.artist} - {currentSong?.title}
      </p>

      <div className="flex justify-between">
        <img
          src={currentSong?.thumbnail}
          alt="thumbnail"
          className="w-12 h-12 rounded-2xl"
        />
        <div className="py-2">
          <button className="px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl">
            <FaHeart size="1.3rem" />
          </button>
          <button
            className={`px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl ${
              isLooping ? "bg-green-500" : ""
            }`}
            onClick={toggleLoop}
          >
            {isLooping ? (
              <BsRepeat1 size="1.3rem" />
            ) : (
              <BsRepeat size="1.3rem" />
            )}
          </button>
          <button
            className="hidden sm:inline-flex px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={prevSong}
          >
            <ImPrevious size="1.3rem" />
          </button>
          <button
            className="px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={togglePlayPause}
          >
            {isPlaying ? <FaPause size="1.3rem" /> : <FaPlay size="1.3rem" />}
          </button>
          <button
            className="hidden sm:inline-flex px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={nextSong}
          >
            <ImNext size="1.3rem" />
          </button>
          <button
            className={`px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl ${
              isMuted ? "bg-red-500" : ""
            }`}
            onClick={toggleMute}
          >
            {isMuted ? (
              <GoUnmute size="1.3rem" />
            ) : (
              <IoVolumeMute size="1.3rem" />
            )}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="slider sm:rotate-0 -rotate-90 w-16 sm:w-24 md:w-32"
        />
      </div>
    </div>
  );
};

export default Player;
