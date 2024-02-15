import React, { useState, useRef, useEffect } from 'react';
import { database } from '.././firebase';
import { collection, getDocs } from 'firebase/firestore';

const userRef = collection(database, 'musicdata');

const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef();
  //
  const [musicData, setMusicData] = useState([]);

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
        console.error('Error getting documents: ', error);
      }
    };

    fetchData();
  }, []);
  //
  console.log(musicData);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      let nextIndex = prevIndex + 1;
      if (nextIndex >= musicData.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => {
      let nextIndex = prevIndex - 1;
      if (nextIndex < 0) nextIndex = musicData.length - 1;
      return nextIndex;
    });
  };

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    audioRef.current.volume = e.target.value;
  };

  const handleSeekUpdate = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleEnded = () => {
    if (isLooping) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      nextSong();
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    audioRef.current.src = musicData[currentSongIndex]?.songlink;
    if (isPlaying) audioRef.current.play();
    audioRef.current.addEventListener('ended', handleEnded);
    return () => {
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    };
  }, []);

  useEffect(() => {
    audioRef.current.loop = isLooping;
  }, [isLooping]);

  return (
    <div className='text-white bg-white/10 mt-1 p-2 rounded-xl text-xs'>
      <audio ref={audioRef} />
      <input
        type="range"
        min="0"
        max={duration}
        step="0.1"
        value={currentTime}
        onChange={handleSeekUpdate}
        className="slider w-full "
      />

      <p>{musicData[currentSongIndex]?.artist} - {musicData[currentSongIndex]?.title}</p>

      <div className="flex justify-between">
        <img src={musicData[currentSongIndex]?.thumbnail} className='w-12 h-12 rounded-2xl'/>
        <div className='py-2'>
          <button
            className="border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={togglePlayPause}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            className="border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={nextSong}
          >
            Next
          </button>
          <button
            className="border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={prevSong}
          >
            Previous
          </button>
          <button
            className={`border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl ${isLooping ? 'bg-green-500' : ''}`}
            onClick={toggleLoop}
          >
           {isLooping ? 'unloop' : 'loop'}
          </button>
          <button
            className={`border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl ${isMuted ? 'bg-red-500' : ''}`}
            onClick={toggleMute}
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          {/* Add a button for liking the song */}
          <button
            className="border-2 border-white/60 px-3 py-1 mx-1 hover:bg-white/10 rounded-3xl"
            onClick={() => console.log('Like song')}
          >
            Like
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="slider"
        />
      </div>
    </div>
  );
};

export default Player;
