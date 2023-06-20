import { NavLink, useOutletContext } from "react-router-dom";
import { useState } from "react";
// import { usePost } from "../hooks/usePost";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export default function AddEntry() {
    // const entryId = useOutletContext();
    const {mutate} = useMutation({
        mutationFn: async (entry) => {
          const response = await axios.patch(`https://mighty-mini-minds-backend.onrender.com/entry/${entryId}`, entry);
          return response.data;
        },
    });
    // return the outlet context using the useOutletContext hook
    const questions = useOutletContext();
    const [positiveA, setPositiveA] = useState("")
    const [challengeA, setChallengeA] = useState("")
    const [openA, setOpenA] = useState("")

    function submit() {
        const entry = {
          questionOne: questions[0],
          questionTwo: questions[1],
          questionThree: questions[2],
          answerOne: positiveA, // Use value from positiveA input field
          answerTwo: challengeA, // Use value from challengeA input field
          answerThree: openA, // Use value from openA input field
        };
    
        mutate(entry);
      }
    
      return (
        <div>
          <div className='flex flex-col'>
            <label className='text-sm sm:text-base py-2 px-8 mt-6'>{questions[0]}</label>
            <input className='bg-skin-input shadow-md py-8 px-3 mx-8' onChange={(e) => setPositiveA(e.target.value)}></input>
          </div>
    
          <div className='flex flex-col'>
            <label className='text-sm sm:text-base py-2 p-8 mt-6'>{questions[1]}</label>
            <input className='bg-skin-input shadow-md py-8 px-3 mx-8' onChange={(e) => setChallengeA(e.target.value)}></input>
          </div>
    
          <div className='flex flex-col'>
            <label className='text-sm sm:text-base py-2 px-8 mt-6'>{questions[2]}</label>
            <input className='bg-skin-input shadow-md py-8 px-3 mx-8' onChange={(e) => setOpenA(e.target.value)}></input>
          </div>
    
          <div className='flex justify-center'>
            <NavLink to="../thanksPage">
              <button className="text-white shadow-md text-2xl transition-colors duration-300 ease-in-out transform hover:scale-125 bg-skin-secondary rounded-md py-1.5 px-3 m-6" onClick={submit}>Post!</button>
            </NavLink>
          </div>
        </div>
      );
    }