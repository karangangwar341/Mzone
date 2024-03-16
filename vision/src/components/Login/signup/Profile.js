import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { auth, database } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const userRef = collection(database, "userdata");

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "fav_genre":
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
        setImage(base64String); 
      };

      reader.readAsDataURL(file);
    }
  };

  const handleReadyToGo = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      navigate('/signin', { replace: true });
    } else {
      try {
        await addDoc(userRef, {
          name: name,
          phone: phone,
          description: description,
          genre: genre,
          image: image,
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
        });
        navigate('/home', { replace: true });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-start text-white p-4">
      <div className="m-16 rounded-3xl bg-white/10 shadow-lg shadow-white/20 p-6">
        <form className="flex flex-col" onSubmit={handleReadyToGo}>
          <label>Name</label>
          <input
            className="rounded-xl p-1 text-black/80"
            placeholder="Your full name"
            name="name"
            value={name}
            onChange={handleInputChange}
            type="text"
            required
          />

          <label>Phone no</label>
          <input
            className="rounded-xl p-1 text-black/80"
            placeholder="Your mobile no"
            type="number"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />

          <label>Choose your profile pic</label>
          <input
            type="file"
            className="bg-white/20 rounded-xl m-2 p-1"
            onInput={handleFileChange}
          />

          <label>Your favourite genre</label>
          <select
            name="fav_genre"
            className="rounded-xl px-4 py-2 text-black/70"
            value={genre}
            onChange={handleInputChange}
          >
            <option value="pop">Pop</option>
            <option value="rock">Rock</option>
            <option value="jazz">Jazz</option>
            <option value="country">Country</option>
            <option value="hip hop">Hip Hop / R&B</option>
            <option value="classical">Classical</option>
            <option value="electronic">Electronic</option>
          </select>

          <label className="m-2 mt-3">Describe what you like</label>
          <textarea
            className="text-black rounded-xl p-2 mb-5"
            name="description"
            value={description}
            onChange={handleInputChange}
          >
            Like what you like to hear or what type of emotions you are into
          </textarea>

          <button
            type="submit"
            className="text-gray-900 hover:bg-white/20 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Ready to go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
