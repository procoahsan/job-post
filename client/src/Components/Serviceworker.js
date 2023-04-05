import React, {useEffect, useState} from 'react';
import workerImage from '../worker.jpg';
import JobCard from './JobCard';
import ReactSwipe from 'react-swipe';
import BrowseCard from './BrowseCard';
import axios from 'axios';


export default function Serviceworker() {
  const [scheduleJobs, setScheduleJobs] = useState([]);
  const [browseJobs, setBrowseJobs] = useState([]);
  const company_name = 'Dino Studios'

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/getschedulejob?company=${company_name}`)
    .then(res => {
      setScheduleJobs(res.data)
    })
    .catch(err => {
      console.log(err);
    })

    axios.get(`http://127.0.0.1:8000/getpostjob?company=${company_name}`)
    .then(res => {
      setBrowseJobs(res.data)
    })
    .catch(err => {
      console.log(err);
    })

  }, [])
  return (
    <div className="h-screen w-full w-screen bg-gray-900 mt-0">
      <div className="flex items-center mt-0 mb-4 ml-4">
        <img
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mr-4"
          src={workerImage}
          alt="Avatar"
        />
        <div>
          <p className="text-white text-base sm:text-4xl">Welcome back</p>
          <p className="text-white text-base sm:text-4xl font-bold">
            Hussnain Majid
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-4 ml-4">
        <p className="text-white text-start sm:text-4xl font-bold">Upcoming Jobs</p>
        <ReactSwipe swipeOptions={{ continuous: false }}>
        <div className="w-screen overflow-hidden" >
          <div className="flex snap-x snap-mandatory items-end gap-x-6 overflow-x-auto overflow-y-hidden transition-all delay-75 duration-500 ease-in-out">
            {scheduleJobs.map((job) => (
              <JobCard className="flex-shrink-0 w-72 sm:w-80 lg:w-96" job={job} />
            ))}
          </div>
        </div>
        </ReactSwipe>
        
      </div>
      <div className="mt-10 space-y-4 ml-4">
        <p className="text-white text-start sm:text-4xl font-bold">Browse more</p>
        <ReactSwipe swipeOptions={{ continuous: false }}>
        <div className="w-screen overflow-hidden" >
          <div className="flex snap-x snap-mandatory items-end gap-x-6 overflow-x-auto overflow-y-hidden transition-all delay-75 duration-500 ease-in-out">
            {browseJobs.map((job) => (
              <BrowseCard className="flex-shrink-0 w-72 sm:w-80 lg:w-96" job={job} />
            ))}
          </div>
        </div>
        </ReactSwipe>
        
      </div>
    </div>
  );
}
