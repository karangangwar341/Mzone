import React, { useState } from 'react';
import {auth, database, storage} from '../firebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const userRef = collection(database, "musicdata");

const Altu = () => {
  const navigate = useNavigate();
  const [musicFile, setMusicFile] = useState(null);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [artist, setArtist] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [songLink, setSongLink] = useState('');
  const uploadMusic = async () => {
    
    if (!musicFile) {
        console.log('No file selected!');
        return;
      }
      const storageRef = ref(storage, `music/${musicFile.name}`);
  
      const metadata = {
        contentType: 'audio/mpeg',
      };
      try {
        await uploadBytes(storageRef, musicFile, metadata);
         // Wait for the download URL to be retrieved
         const url = await getDownloadURL(storageRef);
         setSongLink(url);
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "artist":
        setArtist(value);
        break;
      case "genre":
        setGenre(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        setThumbnail(base64String); 
      };

      reader.readAsDataURL(file);
    }
  };

  const handleReadyToGo = async (e) => {
    e.preventDefault();
    await uploadMusic();
    if (!auth.currentUser) {
      navigate('/signin', { replace: true });
    } else {
      try {
        await addDoc(userRef, {
          title: title,
          artist: artist,
          thumbnail: thumbnail,
          genre: genre,
          songlink: songLink,
          uid: auth.currentUser.uid,
        });
        window.location.reload();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };


  // const geturl = () => {
  //   const storageRef = storage.ref('music/' + musicFile.name);
  //   storageRef.getDownloadURL()
  //     .then((url) => {
  //       setSongLink(url);
  //       // const audio = new Audio(url);
  //       // audio.play();
  //     })
  //     .catch((error) => {
  //       console.error('Error getting download URL:', error);
  //     });
  // };

  return (
        <div className=" mx-auto w-full m-3 rounded-xl bg-white/10 p-6">
          <h2 className="text-3xl font-bold text-center pb-4 text-white">
            Upload your favorite music
          </h2>
          <form className="space-y-4" onSubmit={handleReadyToGo} >
            <div className="flex mx-3 ">
              <label
                htmlFor="title"
                className="block text-lg  p-2 font-medium text-white/80 w-24"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder="eg. Vol. 1"
                autoComplete="off"
                className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex mx-3 ">
              <label
                htmlFor="genre"
                className="block text-lg  p-2 font-medium text-white/80 w-24 "
              >
                Genre
              </label>
              <select
                name="genre"
                value={genre}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-xl pl-3 py-2 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option className=" text-black" value="pop">Pop</option>
                <option className=" text-black" value="rock">Rock</option>
                <option className=" text-black" value="jazz">Jazz</option>
                <option className=" text-black" value="country">Country</option>
                <option className=" text-black" value="hip hop">Hip Hop / R&B</option>
                <option className=" text-black" value="classical">Classical</option>
                <option className=" text-black" value="electronic">Electronic</option>
              </select>
            </div>
            <div className="flex mx-3 ">
              <label
                htmlFor="artist"
                className="block text-lg  p-2 font-medium text-white/80 w-24"
              >
                Artist
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={artist}
                onChange={handleInputChange}
                placeholder="eg YO YO HONEY SINGH..."
                autoComplete="off"
                className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex">
              <div className="flex mx-3 ">
                <label
                  htmlFor="thumbnail"
                  className="block text-lg  p-2 font-medium text-white/80 w-36 rounded-md"
                >
                  Thumbnail
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="thumbnail"
                  className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex mx-3 ">
                <label
                  htmlFor="song"
                  className="block text-lg  p-2 font-medium text-white/80 w-36 rounded-md"
                >
                  Song
                </label>
              </div>
                <input type="file" accept="audio/*" onChange={(e) => setMusicFile(e.target.files[0])}
                  id="song"
                  className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
              type="submit"
              className=" text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Upload
            </button>
            
          </form>
        </div>    
  );
};

export default Altu;
