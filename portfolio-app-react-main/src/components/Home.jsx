import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import GitHub from '../assets/github.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#152b4b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <img src={GitHub} alt="Girl in a jacket" width="200" height="200"/>
        <p className='text-yellow-600'>Hello, My name is Vitaly Rapoport</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          My name is Vitaly Rapoport
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I am a Frontend Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I am a frontend web developer specializing in building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            <a href="https://github.com/vitaly179153">View My Projects</a>
            <span className='group-hover:animate-ping duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
