import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, Youtube_Video_API } from '../Constant/youtube'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { sethomevideo } from '../redux/appslice';
const VideoContainer = () => {
  
  const dispatch=useDispatch();
  const {video,category}=useSelector((store)=>store.app)
  const fetchVideo=async()=>{
     try {
      const res = await axios.get(Youtube_Video_API);
      
      dispatch(sethomevideo(res?.data?.items));
     } catch (error) {
      console.log(error);
     }
    
  }
  const fetchvideobycategory=async()=>{
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`
      );
      console.log(res?.data);
      dispatch(sethomevideo(res.data.items));
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(category==='All'){
      fetchVideo();
    }
    else{
      fetchvideobycategory();
    } 
  }, [category])
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-2 ml-3" >
        {video.map((item) => {
          return (
            <Link
              className="mb-2"
              to={`/watch/?v=${
                typeof item.id === "object" ? item.id.videoId : item.id
              }`}
              key={typeof item.id === "object" ? item.id.videoId : item.id}
            >
              <VideoCard item={item} />
            </Link>
          );
          })}
      </div>
    </>
  );
}

export default VideoContainer
