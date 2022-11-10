import React from 'react';
import Banner from '../Banner/Banner';
import Process from '../Process/Process';
import PsychotherapyTime from '../PsychotherapyTime/PsychotherapyTime';
import Services from '../Services/Services';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <Process></Process>
        <PsychotherapyTime></PsychotherapyTime>
      </div>
    );
};

export default Home;