import React from 'react';
import Popularalbums from './Popularalbums';
import Recents from './Recents';
import Altu from './Altu';
import SearchScreen from './SearchScreen';

const Home = ({ homecontent }) => {
  return (
    <div className='px-2 mt-2 mx-1'>
      {homecontent === 'Home' && (
        <div>
          <Popularalbums />
          <Recents />
        </div>
      )}
      {homecontent === 'Music' && <Altu />}
      {homecontent === 'Search' && <SearchScreen/>}
    </div>
  );
};

export default Home;
