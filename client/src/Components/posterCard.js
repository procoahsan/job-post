import React, { useState } from 'react';
import Icon from '../icon.png';
import axios from 'axios';
function PosterCard() {
  const [showButtons, setShowButtons] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showPlusButton, setShowPlusButton] = useState(true);
  const [postJob, setPostJob] = useState({});
  const [scheduleJob, setScheduleJob] = useState({});
  const handleClick = () => {
    setShowButtons(!showButtons);
  };

  const handlePostClick = () => {
    setShowButtons(false);
    setShowPostForm(true);
    setShowBackButton(true);
    setShowPlusButton(false);
  };

  const handleScheduleClick = () => {
    setShowButtons(false);
    setShowScheduleForm(true);
    setShowBackButton(true);
    setShowPlusButton(false);
  };

  const handleBackClick = () => {
    setShowButtons(true);
    setShowPostForm(false);
    setShowScheduleForm(false);
    setShowBackButton(false);
    setShowPlusButton(true);
  };
  const handlePostJob = () => {
    if (postJob.job_title === "" || postJob.job_salary === "") {
      alert("Please fill in all the fields");
      return;
    }
    else{
      
      console.log(postJob);
      axios.post('http://127.0.0.1:8000/postjob', postJob)
      .then(res => {
        console.log(res.data);
        alert("Job Posted");
        setPostJob({job_title: "", job_salary: ""});
      })
      .catch(err => {
        console.log(err);
      })
    }
  };
  const handleScheduleJob = () => {
    if (scheduleJob.job_title=== "" || scheduleJob.job_salary=== "" || scheduleJob.job_date === "" || scheduleJob.job_time === "") {
      alert("Please fill in all the fields");
      return;
    }
    else{
      console.log(scheduleJob);
      axios.post('http://127.0.0.1:8000/schedulejob', scheduleJob)
      .then(res => {
        console.log(res.data);
        alert("Job Scheduled");
        setScheduleJob({job_title: "", job_salary: "", job_date: "", job_time: ""});
      })
      .catch(err => {
        console.log(err);
      })
    }
  };

  return (
    <div className="w-80 max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="bg-white p-4">
        <div className="flex items-center justify-between">
          {showScheduleForm? (<h2 className="text-lg font-semibold text-gray-800 font-SpaceGrotesk">Schedule a new job</h2>):(<h2 className="text-lg font-semibold text-gray-800 font-SpaceGrotesk">Post a new job</h2>)}
          
          {showPlusButton && (
            <div
              className="bg-white border rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          )}
          {showBackButton && (
            <div
              className="bg-white border rounded-full h-8 w-8 flex items-center justify-center cursor-pointer"
              onClick={handleBackClick}
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
              </svg>
            </div>
          )}
        </div>

        {showButtons && (
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
              onClick={handlePostClick}
            >
              Post
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleScheduleClick}
            >
              Schedule
            </button>
          </div>
        )}

        {showPostForm && (
          
            <div className="mt-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-md mb-4"
                value={postJob.job_title}
                onChange={(e) => {setPostJob({...postJob, job_title: e.target.value , company_name: "Dino Studios"})}}
              />
              <input
                type="text"
                placeholder="Salary"
                className="w-full px-4 py-2 border rounded-md mb-4"
                value={postJob.job_salary}
                onChange={(e) => {setPostJob({...postJob, job_salary: e.target.value})}}
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"  onClick={handlePostJob}>
                Post
              </button>
            </div>
         
        )}
        {showScheduleForm && (
        
          <div className="mt-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 border rounded-md mb-4"
              value={scheduleJob.job_title}
              onChange={(e) => {setScheduleJob({...scheduleJob, job_title: e.target.value, company_name: "Dino Studios"})}}
            />
            <input
              type="text"
              placeholder="Salary"
              className="w-full px-4 py-2 border rounded-md mb-4"
              value={scheduleJob.job_salary}
              onChange={(e) => {setScheduleJob({...scheduleJob, job_salary: e.target.value})}}
            />

            <input
              type="date"
              placeholder="Date"
              className="w-full px-4 py-2 border rounded-md mb-4"
              value={scheduleJob.job_date}
              onChange={(e) => {setScheduleJob({...scheduleJob, job_date: e.target.value})}}
            />
            <input
              type="time"
              placeholder="Time"
              className="w-full px-4 py-2 border rounded-md mb-4"
              value={scheduleJob.job_time}
              onChange={(e) => {setScheduleJob({...scheduleJob, job_time: e.target.value})}}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"  onClick={handleScheduleJob}>
                Schedule
              </button>
            </div>
        
        )}
      </div>

      <div className="bg-black text-white p-4 flex flex-row">
       <img src={Icon} alt='Icon' />
        <p className="text-sm ml-2">Dino Studios</p>
        <button className=" h-6 text-gray-400 px-2 rounded-full ml-auto overflow-hidden">switch </button>
      </div>
    </div>
  );
    }

    export default PosterCard;