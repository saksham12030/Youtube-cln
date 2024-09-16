import axios from "axios";
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { API_KEY } from "../Constant/youtube";
const VideoCard = ({item}) => {
  const [ytchanneldata,setchanneldata]=useState("");
  const channelid=async()=>{
    try {
      const fetch = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`);
        
        setchanneldata(fetch.data.items[0].snippet.thumbnails.high.url);
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    channelid();
  },
// eslint-disable-next-line 
  [])
  return (
    <div className="w-94 mb-3 cursor-pointer">
      <div>
        <img
          className="w-full rounded-xl"
          src={item.snippet.thumbnails.high.url}
          alt="Thumbnail"
        />
      </div>
      <div>
        <div className="flex mt-2">
          <Avatar
           size={35} round={true}
            src={ytchanneldata}
          />
          <div className="ml-2">
            <h1 className="font-bold text-base">{item.snippet.channelTitle}</h1>
            <p className="text-xs text-gray-500">{item.snippet.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
