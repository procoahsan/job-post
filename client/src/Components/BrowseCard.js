import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import Icon from '../icon.png';

export default function BrowserCard({job}) {
  return (
    <div>
      <div className="w-80 max-w-sm mx-auto rounded-md overflow-hidden shadow-lg">
        <div className="bg-white p-4">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold text-gray-800 font-SpaceGrotesk">
                {job.job_title} 
            </h2>
            <div className="flex items-start mt-2">
              <img src={Icon} alt="Icon" />
              <div className="ml-2">
                <p className="text-vlack text-base sm:text-lg font-bold">
                    {job.company_name}
                </p>
              </div>
            </div>
            <div class="flex items-start mt-3">
              <img
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <p class="ml-2">+3 more applied</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white p-4 flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <FiMapPin />
        <p className="text-sm ml-2">Remote</p>
        <span className="bg-white h-6 text-gray-400 px-2 rounded-full ml-auto overflow-hidden">
          <b className="text-black">{job.jon_salary} </b>/year
        </span>
      </div>
    </div>
  );
}
