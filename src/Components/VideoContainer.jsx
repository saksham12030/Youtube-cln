import React, { useEffect } from 'react'
import axios from "axios";
import { API_KEY, Youtube_Video_API } from '../Constant/youtube'
const VideoContainer = () => {
  const fetchVideo=async()=>{
     try {
      const res = await axios.get(Youtube_Video_API);
      console.log(res);
     } catch (error) {
      console.log(error);
     }
    
  }
  useEffect(() => {
    fetchVideo();
  }, [])
  return (
    <div>
      Videocontainer Here
    </div>
  )
}

export default VideoContainer
