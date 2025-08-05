import React from 'react';
import Popularalbums from './Popularalbums';
import Recents from './Recents';
import Altu from '../Player/Altu';
import SearchScreen from '../SearchScreen';

const Home = ({ homecontent }) => {
  return (
    <div className='px-1 mt-2 mx-1'>
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
