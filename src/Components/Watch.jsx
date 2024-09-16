import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { BiSend } from "react-icons/bi";

import { BsThreeDotsVertical } from "react-icons/bs";
import { API_KEY } from "../Constant/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../redux/chatslice";

const Watch = () => {
  const dispatch=useDispatch();
  const [input,setinput]=useState("");
  const [videotitle, setvideotitle] = useState("");
  const [params] = useSearchParams();
  const videoid = params.get("v");
  const sendmsg=()=>{
    dispatch(setMessage({
      name:"Saksham",
      message:input,
    }))
    setinput("");
  } 
  const apifetch = async () => {
    try {
      const datas = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API_KEY}`
      );
      setvideotitle(datas.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apifetch();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex  ml-4 w-full">
      <div className="flex w-[88%]">
        <div>
          <iframe
            width="900"
            className="rounded-md"
            height="500"
            src={`https://www.youtube.com/embed/${videoid}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="font-bold mt-1 text-lg">{videotitle?.snippet?.title}</h1>
          <div className="mt-3">
            <div className="flex items-center justify-between">
              <div className="flex w-fit items-center justify-between">
                <div className="flex mr-4">
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/220px-MrBeast_2023_%28cropped%29.jpg"
                    size={"30px"}
                    round={"20px"}
                  />
                  <p className="ml-3 font-bold">
                    {videotitle?.snippet?.channelTitle}
                    </p>
                </div>
                <button className="px-4 py-1 text-medium rounded-full bg-black text-white">
                  Subscribe
                </button>
              </div>
              <div className="flex  w-[40%] item-center justify-between">
                <div className="flex px-4 py-1 items-center rounded-full bg-gray-200">
                  <AiOutlineLike className="mr-5 cursor-pointer" size={25} />
                  <AiOutlineDislike className="mr-2 cursor-pointer" size={25} />
                </div>
                <div className="flex px-2 py-1 items-center rounded-full bg-gray-200">
                  <PiShareFat className="mr-2 cursor-pointer" size={25} />
                  <span>Share</span>
                </div>
                <div className="flex px-2 py-1 items-center rounded-full bg-gray-200">
                  <MdOutlineFileDownload className="mr-2 cursor-pointer" size={25} />
                  <span>Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]  border rounded-lg h-fit border-gray-300 ml-8">
          <div className="flex items-center justify-between">
            <h1>Top chat</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-y-auto h-[28rem] flex flex-col-reverse">
            <LiveChat />
          </div>
          <div className="">
            <div className="flex items-center w-[90%]">
              <div>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/220px-MrBeast_2023_%28cropped%29.jpg"
                  size={"30px"}
                  round={"20px"}
                />
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setinput(e.target.value)}
                placeholder="Send Message"
                className="outline-none ml-2 border-gray-300 border-b"
              />
              <div className="bg-gray-300 cursor-pointer  rounded-full p-2 mr-1">
                <BiSend  onClick={sendmsg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
