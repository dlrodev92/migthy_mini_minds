import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
export default function WelcomePage() {
  const {mutate} = useMutation({
    mutationFn: async (entry) => {
      const response = await axios.post('https://mighty-mini-minds-backend.onrender.com/entry', entry);
      return response.data;
    },
    onSuccess: (data) => {
      const entryId = data.uuid;
      return entryId;
    },
  });
  
  const [mood, setMood] = useState(0);

  function handleClick(event) {
    setMood(event.target.value);
  }

  function submitMood() {
    const entry = {
      mood: mood,
    };
  
    mutate(entry);
  }

  return (
    <>
      <div className="flex flex-col justify-around items-center w-full h-full">
        <h1 className="text-2xl sm:text-4xl text-center px-4">
          Welcome, Sofia! How are you feeling today?
        </h1>
        <div className="flex justify-around w-full">
          <button
            className={`text-6xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '1' ? 'animate-pulse' : ''}`}
            value={1}
            onClick={(e) => handleClick(e)}
          >
            🙁
          </button>
          <button
            className={`text-6xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '2' ? 'animate-pulse' : ''}`}
            value={2}
            onClick={(e) => handleClick(e)}
          >
            😕
          </button>
          <button
            className={`text-6xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '3' ? 'animate-pulse' : ''}`}
            value={3}
            onClick={(e) => handleClick(e)}
          >
            😐
          </button>
          <button
            className={`text-6xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '4' ? 'animate-pulse' : ''}`}
            value={4}
            onClick={(e) => handleClick(e)}
          >
            🙂
          </button>
          <button
            className={`text-6xl transition-all duration-300 ease-in-out transform hover:scale-125 ${mood === '5' ? 'animate-pulse' : ''}`}
            value={5}
            onClick={(e) => handleClick(e)}
          >
            😁
          </button>
        </div>
        <NavLink to="../addEntry">
          <button className="text-white shadow-md text-4xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-3 px-5" onClick={submitMood}>
            Go!
          </button>
        </NavLink>
      </div>
    </>
  );
}
