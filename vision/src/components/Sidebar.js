import React, { useState, useEffect } from 'react';
import { auth, database } from '.././firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    description: '',
    genre: '',
    image: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await fetchUserDataFromFirestore();
        setUserData(user);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
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
        const userDataCollection = 'userdata';
        const userCollection = collection(database, userDataCollection);

        const q = query(userCollection, where('uid', '==', user.uid));

        const querySnapshot = await getDocs(q);

        if (querySnapshot.size > 0) {
          const doc = querySnapshot.docs[0];
          const userData = doc.data();
          return userData;
        } else {
          throw new Error('User document not found in Firestore.');
        }
      } else {
        throw new Error('User is not authenticated.');
      }
    } catch (error) {
      console.error('Error fetching user data from Firestore:', error);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/', {replace:true});
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
    return (
      <div className="h-screen p-2  w-1/5 items-center">
        <aside className="Sidebar m-1 fixed w-1/6 pr-2  flex flex-col bg-sidebarc/20 text-center text-white pt-6 pb-2 pl-2 rounded-3xl transition-transform " style={{height: '95vh', }}>
          <div className="flex flex-col items-center justify-start flex-grow">
            <h1 className="font-semibold text-3xl text-white/80 mb-16 top-2 hover:scale-110 transition-transform">
              mzone
            </h1>
            <nav className="flex flex-col space-y-2">
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Home
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Search
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Playlist
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Notifications
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Choose background
              </button>
              <button className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                Settings
              </button>
              <button onClick={ handleLogout } className="w-full text-white/80 hover:bg-white/80 hover:text-texthover hover:scale-105 transition-transform rounded-lg p-2">
                log out
              </button>
            </nav>
          </div >
          <div className="mt-auto">
            <p className="text-xs text-yellow p-2 underline">
              dowmload app now
            </p>
            <div className="profile bg-white bg-opacity-20 w-full p-1  flex items-center rounded-xl text-xs text-white/80 justify-evenly">
              <img className="mr-2 rounded-full h-12 w-12" src={ userData.image} alt="DP" />
              <p>{userData.name}</p>
              <p className="text-xl font-semibold hover:text-white  pt-2 text-white/60">^</p>
            </div>
          </div>
        </aside>
      </div>
    );
}
export default  Sidebar;
