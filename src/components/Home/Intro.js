import React from 'react';
import video from '../../assets/video/Green And White Modern Get To Know Me Member Profile Information Instagram Post.mp4';

const Intro = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-10 justify-items-center'>
            <div className='order-2 lg:order-1'>
                <h1 className='text-3xl font-extrabold m-4 text-center'>Hello! <span className='text-rose-600'>I am Naimur Rahaman Imthiaz</span></h1>
                <p className='text-xl pl-12'>A committed, knowledgeable, experienced in project and team management, and work well under pressure. I can learn new technologies, tools, and techniques quickly. And I have good
                    knowledge of object-oriented software development.
                    Worked on MERN stack web development. I want to be a full-stack web developer in my career. Skilled in JavaScript, React, React JS, NodeJS, MongoDB, C++, Java and Software Development.</p>
            </div>
            <div className='grid w-1/2 items-center order-1 lg:order-2'>
                <video className='' autoPlay="false" loop='false' muted src={video}></video>
            </div>
        </div>
    );
};

export default Intro;