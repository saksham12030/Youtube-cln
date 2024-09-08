import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { togglesidebar } from '../redux/appslice';
const Navbar = () => {
  const dispatch=useDispatch();
  const togglebutton=()=>{
    dispatch(togglesidebar());
  }
   return (
    <div className=" w-[100%] top-0 flex fixed bg-white items-center justify-center z-10">
      <div className="w-[96%]  px-4 py-3 flex  items-center justify-between">
        <div className="flex items-center">
          <GiHamburgerMenu onClick={togglebutton}  className='cursor-pointer' size={"25px"} />
          <img
            className="px-2 py-1"
            width={"103px"}
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="Youtube"
          />
        </div>
        <div className="flex w-[50%]">
          <div className=" w-full rounded-l-full items-center  border-gray-400 border flex px-2 py-1 ">
            <input
              type="text"
              placeholder="Search"
              className="px-2 w-full outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-r-full border-gray-400 border px-4  py-1"
          >
            <CiSearch size={"25px"} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <IoIosNotificationsOutline size={"25px"} />
          <CiVideoOn size={"25px"} />
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/220px-MrBeast_2023_%28cropped%29.jpg"
            size={"30px"}
            round={"20px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar
