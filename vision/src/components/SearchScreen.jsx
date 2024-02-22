import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Resultcard from './Resultcard'
import { FaSearch } from "react-icons/fa";

const userRef = collection(database, "musicdata");

const SearchScreen = () => {
    const [musicData, setMusicData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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

    const filteredMusicData = musicData.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchValue.toLowerCase()) 
      )
      
  

    return (
        <div>
            <div className="flex justify-items-end border-2 rounded-xl pr-3 border-white/60 focus:border-white mr-1">
                <input
                    type="text"
                    className="w-full border-0 bg-white/0 border-gray-300 rounded-lg px-3 py-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 font-semi-bold p-2 rounded-md ml-2">
                    <FaSearch />
                </button>
            </div>
            <div className='mt-4 overflow-y-scroll' style={{
                height: "89vh",
                "--scrollbar-bg": "#ffffff", // Replace with your background color
                "--scrollbar-thumb": "#cccccc", // Replace with your thumb color
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For Internet Explorer and Edge
            }}>
              <div className="flex flex-wrap">
              {filteredMusicData.map((item) => (
                    <Resultcard
                        key={item.id}
                        image={item.thumbnail}
                        artist={item.artist}
                        title={item.title}
                        genre={item.genre}
                    />
                ))}
              </div>
                
            </div>
        </div>
    )
}

export default SearchScreen;
