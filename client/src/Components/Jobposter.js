import React from 'react';
import avatarImage from '../avatar.jpg';
import PosterCard from './posterCard';
import HireCard from './HireCard';

function JobPoster() {


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900">
      <div className="flex items-center mt-8 mb-4">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mr-4"
          src={avatarImage}
          alt="Avatar"
        />
        <div>
          <p className="text-white text-base sm:text-4xl">
            Welcome back
          </p>
          <p className="text-white text-base sm:text-4xl font-bold">
            Ahsan Nadeem
          </p>
        </div>
      </div>
      <div className="mt-8">
        <PosterCard />
      </div>
      <div className="mt-10">
        <p className="text-white flex items-center justify-center sm:text-4xl">
          People you've hired
        </p>
        <br />
        <br/>
        <div className="hire-cards-wrapper mb-10 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:grid grid-cols-3 gap-4">
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
          <HireCard className="w-full sm:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default JobPoster;
