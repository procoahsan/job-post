import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import avatarImage from '../avatar.jpg';

export default function HireCard() {
  return (
    <div>
      <div className="w-80 max-w-sm mx-auto rounded-md overflow-hidden shadow-lg">
        <div className="bg-white p-4">
          <div className="flex flex-col items-start">
            <h2 className="text-xs font-bold text-gray-800 font-SpaceGrotesk mb-1">
              4pm today
            </h2>
            <h2 className="text-2xl font-bold text-gray-800 font-SpaceGrotesk">
              Wash the Car
            </h2>
            <div className="flex items-center mt-2">
              <img
                className="w-6 h-6 sm:w-24 sm:h-24 rounded-full mr-4"
                src={avatarImage}
                alt="Avatar"
              />
              <div>
                <p className="text-vlack text-base sm:text-lg font-bold">
                  Ahsan Nadeem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white p-4 flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <FiMapPin />
        <p className="text-sm ml-2">Remote</p>
        <span className="bg-white h-6 text-gray-400 px-2 rounded-full ml-auto overflow-hidden">
          <b className='text-black'>$3k-6k </b>/year
        </span>
      </div>
    </div>
  )
}
