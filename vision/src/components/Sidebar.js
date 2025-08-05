import React, { useState, useEffect } from "react";
import { auth, database } from ".././firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidPlaylist } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaUpload } from "react-icons/fa";
const Sidebar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    description: "",
    genre: "",
    image: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await fetchUserDataFromFirestore();
        setUserData(user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    const user = auth.currentUser;
    if (user) {
      fetchUserDetails();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserDataFromFirestore = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const userDataCollection = "userdata";
        const userCollection = collection(database, userDataCollection);

        const q = query(userCollection, where("uid", "==", user.uid));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
          const doc = querySnapshot.docs[0];
          const userData = doc.data();
          return userData;
        } else {
          throw new Error("User document not found in Firestore.");
        }
      } else {
        throw new Error("User is not authenticated.");
      }
    } catch (error) {
      console.error("Error fetching user data from Firestore:", error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleNavigatemusic = () => {
    navigate("/music");
  };
  const handleNavigatehome = () => {
    navigate("/home");
  };
  const handleNavigatesearch = () => {
    navigate("/search");
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="h-screen left-0 absolute md:relative items-center overflow-hidden  w-3 group-hover:w-64 md:w-[12vw] ">
      <aside
        className="Sidebar transition-all duration-300 ease-in-out 
  w-2 hover:w-36 md:w-[11vw] 
  m-1 fixed  flex flex-col 
  h-screen
  bg-sidebarc/20 text-center text-white  backdrop-blur-lg 
  pt-6 pb-2  rounded-3xl overflow-hidden bg-black/30"
      >
        <div className="flex flex-col items-center justify-start flex-grow">
          <h1 className="font-semibold text-3xl text-white/80 mb-16 top-2 hover:scale-110 transition-transform">
            mzone
          </h1>
          <nav className="flex flex-col space-y-2">
            <button
              onClick={handleNavigatehome}
              className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover  hover:scale-105 transition-transform rounded-lg p-2"
            >
              <div className="pt-2">
                {" "}
                <ImHome />
              </div>{" "}
              <div className="py-1 px-2">Home</div>
            </button>
            <button
              onClick={handleNavigatesearch}
              className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2"
            >
              <div className="pt-2">
                {" "}
                <FaSearch />
              </div>{" "}
              <div className="py-1 px-2">Search</div>
            </button>
            <button className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
              <div className="pt-2">
                {" "}
                <BiSolidPlaylist />
              </div>{" "}
              <div className="py-1 px-2">Playlists</div>
            </button>
            {/* <button className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
              <div className='pt-2'> <IoIosNotifications /></div> <div className='py-1 px-2'>Notifications</div>
              </button> */}
            <button
              onClick={handleNavigatemusic}
              className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2"
            >
              <div className="pt-2">
                {" "}
                <FaUpload />
              </div>{" "}
              <div className="py-1 px-2">Upload</div>
            </button>
            <button className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
              <div className="pt-2">
                {" "}
                <IoSettings />
              </div>{" "}
              <div className="py-1 px-2">Settings</div>
            </button>
            <button
              onClick={handleLogout}
              className="w-full justify-evenly text-white/80 flex flex-row hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2"
            >
              <div className="pt-2">
                {" "}
                <MdLogout />
              </div>{" "}
              <div className="py-1 px-2">Logout</div>
            </button>
          </nav>
        </div>
        <div className="mt-auto">
          <p className="text-xs text-yellow p-2 underline">dowmload app now</p>
          <div className="profile bg-white bg-opacity-20 w-full p-1  flex items-center rounded-xl text-xs text-white/80 justify-evenly">
            <img
              className="mr-2 rounded-full h-12 w-12"
              src={userData.image}
              alt="DP"
            />
            <p>{userData.name}</p>
            <p className="text-xl font-semibold hover:text-white  pt-2 text-white/60">
              ^
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
