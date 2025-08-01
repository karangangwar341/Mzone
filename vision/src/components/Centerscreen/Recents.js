import React, { useEffect, useState } from 'react';
import RecentCard from '../cards/Recentcard';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../../firebase';

const Recents = () => {
  const [recents, setRecents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPlays = async () => {
      try {
        const recentSnapshot = await getDocs(collection(database, 'recentlyPlayedCollection'));
        
        if (recentSnapshot.empty) {
          console.log('No recent plays found');
          setRecents([]);
          return;
        }

        const recentList = recentSnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        
        setRecents(recentList);
      } catch (err) {
        console.error('Error fetching recent plays:', err);
        setError('Failed to load recent plays');
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPlays();
  }, []);

  const removeFromQueue = (id) => {
    setRecents(prev => prev.filter(song => song.id !== id));
  };

  if (loading) {
    return <div className='mt-6 mb-2'>Loading recent plays...</div>;
  }

  if (error) {
    return <div className='mt-6 mb-2 text-red-500'>{error}</div>;
  }

  return (
    <div className='mt-6 mb-2'>
      <h1 className='text-xl text-left text-white/80 mb-2'>Recents</h1>
      <div className='overflow-auto rounded-lg shadow-md' style={{ height: '30vh' }}>
        {recents.length > 0 ? (
          recents.map(song => (
            <RecentCard key={song.id} {...song} removeFromQueue={removeFromQueue} />
          ))
        ) : (
          <p className='text-white/50 p-4'>No recent plays found</p>
        )}
      </div>
    </div>
  );
};

export default Recents;