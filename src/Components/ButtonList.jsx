import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setcategoy } from '../redux/appslice';

const ButtonList = () => {
    const [active,setactive]=useState("All");
    const dispatch=useDispatch();
    const videotag=(btnname)=>{
        if(active!==btnname){
            dispatch(setcategoy(btnname))
            setactive(btnname);
        }
    }
    const buttonlister = [
      "All",
      "Algorithm",
      "Data-Types",
      "Live",
      "Resumes",
      "Javascript",
      "Operating System",
      "Visual Studio",
      "Music",
      "Vlogs",
      "Trending",
      "Programming",
      "HTML",
      "CSS",
      "Music",
      "Vlogs",
      "Trending",
      "Programming",
      "HTML",
      "CSS",
      "Music",
      "Vlogs",
      "Trending",
      "Programming",
      "HTML",
      "CSS",
    ];
  return (
    <div className="w-full no-scrollbar flex overflow-x-scroll mb-3 ">
      {buttonlister.map((item, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => videotag(item)}
              className={`${
                active === item ? "bg-gray-900 text-white" : "bg-gray-200"
              } w-fit px-5 py-1 mx-2 cursor-pointer rounded-lg`}
            >
              <span className="  whitespace-nowrap">{item}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ButtonList
