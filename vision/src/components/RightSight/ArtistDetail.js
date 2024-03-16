import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaSearch } from "react-icons/fa";
import ResultCard2 from "../cards/ResultCard2";

const userRef = collection(database, "musicdata");

const ArtistDetail = (props) => {
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
      item.artist.toLowerCase().includes(props.name.toLowerCase()) 
      )
      
  

    return (
        <div>
            <div className="flex justify-items-end border-2 rounded-xl pr-3 border-white/60 focus:border-white mr-1">
            </div>
            <div className='mt-4 overflow-y-scroll' style={{
                height: "89vh",
                "--scrollbar-bg": "#ffffff", // Replace with your background color
                "--scrollbar-thumb": "#cccccc", // Replace with your thumb color
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For Internet Explorer and Edge
            }}>
              <div>
                <h1 className="w-full items-center text-white text-xl ">
                  {props.name}
                </h1>
              {filteredMusicData.map((item) => (
                   <ResultCard2
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

export default ArtistDetail;
