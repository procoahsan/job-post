import React from 'react'
import Icon from '../icon.png';
export default function JobCard({job}) {
  return (
    <div>
      <div className="w-80 max-w-sm mx-auto rounded-md overflow-hidden shadow-lg">
        <div className="bg-white p-4">
          <div className="flex flex-col items-start">
            <h2 className="text-xs font-bold text-gray-800 font-SpaceGrotesk mb-1">
              {job.job_time} today
            </h2>
            <h2 className="text-2xl font-bold text-gray-800 font-SpaceGrotesk">
              {job.job_title}
            </h2>
            <div className="flex items-center mt-2">
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-4 flex flex-row">
       <img src={Icon} alt='Icon' />
        <p className="text-sm ml-2">{job.company_name}</p>
        
      </div>
    </div>
  )
}