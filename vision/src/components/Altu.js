import React, { Component } from 'react';
import { auth, database, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const userRef = collection(database, 'musicdata');

class Altu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musicFile: null,
      title: '',
      genre: '',
      artist: '',
      thumbnail: '',
      songLink: '',
    };
    // this.navigate =useNavigate();
  }

  uploadMusic = async () => {
    const { musicFile } = this.state;

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
      const url = await getDownloadURL(storageRef);
      this.setState({ songLink: url });
      alert('music uploaded Sucessfully!!');
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        this.setState({ thumbnail: base64String });
      };

      reader.readAsDataURL(file);
    }
  };

  handleReadyToGo = async (e) => {
    e.preventDefault();
    // await this.uploadMusic();
    const { title, artist, thumbnail, genre, songLink } = this.state;
    
    try {
      await addDoc(userRef, {
        title,
        artist,
        thumbnail,
        genre,
        songlink: songLink,
        uid: auth.currentUser.uid,
      });
      window.location.reload();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    
  };

  render() {
    const { title, genre, artist } = this.state;

    return (
      <div className=" mx-auto w-full m-3 rounded-xl bg-white/10 p-6">
        <h2 className="text-3xl font-bold text-center pb-4 text-white">
          Upload your favorite music
        </h2>
        <div className="space-y-4">
          <div className="flex mx-3">
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
              onChange={this.handleInputChange}
              placeholder="eg. Vol. 1"
              autoComplete="off"
              className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex mx-3">
            <label
              htmlFor="genre"
              className="block text-lg  p-2 font-medium text-white/80 w-24 "
            >
              Genre
            </label>
            <select
              name="genre"
              value={genre}
              onChange={this.handleInputChange}
              className="mt-1 block w-full rounded-xl pl-3 py-2 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className="text-black" value="pop">
                Select
              </option>
              <option className="text-black" value="pop">
                Pop
              </option>
              <option className="text-black" value="rock">
                Rock
              </option>
              <option className="text-black" value="jazz">
                Jazz
              </option>
              <option className="text-black" value="country">
                Country
              </option>
              <option className="text-black" value="hip hop">
                Hip Hop / R&B
              </option>
              <option className="text-black" value="classical">
                Classical
              </option>
              <option className="text-black" value="electronic">
                Electronic
              </option>
            </select>
          </div>
          <div className="flex mx-3">
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
              onChange={this.handleInputChange}
              placeholder="eg YO YO HONEY SINGH..."
              autoComplete="off"
              className="mt-1 block w-full rounded-xl pl-3 p-1 text-sm text-white bg-white/10 hover:shadow-sm hover:shadow-white focus:shadow-md focus:shadow-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex">
            <div className="flex mx-1">
              <label
                htmlFor="thumbnail"
                className="block text-lg  p-2 font-medium text-white/80 w-36 rounded-md"
              >
                Thumbnail
              </label>
              <input
                type="file"
                onChange={this.handleFileChange}
                id="thumbnail"
                className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex mx-1">
              <label
                htmlFor="song"
                className="block text-lg  p-2 font-medium text-white/80 w-16 rounded-md"
              >
                Song
              </label>
            </div>
            <div className='flex'>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => this.setState({ musicFile: e.target.files[0] })}
              id="song"
              className="mt-1 block w-full rounded-xl bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
            type="button" 
            onClick={this.uploadMusic}
            className="text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl bg-white/10 text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
            Upload
          </button>
            </div>

          </div>
          <button
            type="button" // Change to "button" to prevent form submission
            onClick={this.handleReadyToGo}
            className="text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Altu;
