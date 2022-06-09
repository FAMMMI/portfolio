import React from 'react';
import Intro from './Intro';
import MyProjects from './MyProjects';
import MyServices from './MyServices/MyServices';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <MyServices></MyServices>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;