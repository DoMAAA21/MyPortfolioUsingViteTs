import React from 'react';
import Title from './title';
import AboutMe from './aboutme';

const Home: React.FC = () => {
  return (
    <>
      <div>
        <Title/>
      </div>
      <div>
        <AboutMe/>
      </div>
    </>
  )
}

export default Home;