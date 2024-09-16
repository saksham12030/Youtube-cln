import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  setcategoy,
  setsearchsuggestion,
  togglesidebar,
} from "../redux/appslice";
import axios from "axios";
import { Suggestion } from "../Constant/youtube";
const Navbar = () => {
  const dispatch = useDispatch();
  const [showsuggestions,setshowsuggestions]=useState(false);
  const { searchsuggestion } = useSelector((store) => store.app);
  const [input, setinput] = useState();
  const showsuggestion = async () => {
    try {
      const res = await axios.get(Suggestion + input);
      dispatch(setsearchsuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };
  const searchbutton = () => {
    dispatch(setcategoy(input));
    setinput("");
  };
  const togglebutton = () => {
    dispatch(togglesidebar());
  };
  useEffect(() => {
    const timer=setTimeout(() => {
      showsuggestion();
    }, (200));
    return (()=>clearTimeout(timer))
  }, [input]);
  return (
    <div className=" w-[100%] top-0 flex fixed bg-white items-center justify-center z-10">
      <div className="w-[96%]  px-2  py-3 flex  items-center justify-between">
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={togglebutton}
            className="cursor-pointer"
            size={"25px"}
          />
          <img
            className="px-2 py-1"
            width={"103px"}
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="Youtube"
          />
        </div>
        <div className="flex w-[50%] items-center">
          <div className=" flex w-[100%] ">
            
            <input
            onFocus={()=>setshowsuggestions(true)}
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Search"
              className="px-2 w-full outline-none rounded-l-full items-center  border-gray-400 border flex py-1 "
            />
          </div>
          <button
            type="submit"
            onClick={searchbutton}
            className="rounded-r-full border-gray-400 border px-4  py-1"
          >
            <CiSearch size={"25px"} />
          </button>
          {
          (showsuggestions&& searchsuggestion.length!==0) && (
            <div className="rounded-lg absolute top-3 z-50 w-[30%] py-5  mt-12 bg-white shadow-lg">
              <ul>
                {searchsuggestion.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex items-center hover:bg-gray-100 px-4"
                    >
                      <CiSearch size={"25px"} />
                      <li className="px-2 py-1 cursor-pointer text-md font-medium">
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
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
};

export default Navbar;
