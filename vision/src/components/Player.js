import React, { useState, useRef, useEffect } from 'react';

const Player = ({ audios }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => {
      let nextIndex = prevIndex +  1;
      if (nextIndex >= audios.length) nextIndex =  0;
      return nextIndex;
    });
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => {
      let nextIndex = prevIndex -  1;
      if (nextIndex <  0) nextIndex = audios.length -  1;
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
    nextSong();
  };

  useEffect(() => {
    audioRef.current.src = audios[currentSongIndex].src;
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

  return (
    <div className='text-white bg-white/10 mt-1 p-2 rounded-xl'>
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
          

      <p>{audios[currentSongIndex].artist} - {audios[currentSongIndex].title}</p>
     
       <div className="flex justify-between"> 
      <img src={audios[currentSongIndex].imgurl} className='w-12 h-12 rounded-2xl'/>
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
