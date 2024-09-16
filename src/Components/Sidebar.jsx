import React from 'react'
import { LuHistory } from "react-icons/lu";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdPodcasts } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";

import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';

const Sidebar = () => {
    // const open=false;
    const array = [
      {
        image: <GoHome size={"24px"} />,
        text: "Home",
      },
      {
        image: <SiYoutubeshorts size={"24px"} />,
        text: "Short",
      },
      {
        image: <MdOutlineSubscriptions size={"24"} />,
        text: "Subscription",
      },
      {
        image: <RiAccountBoxLine size={"24px"} />,
        text: "Your Channel",
      },
      {
        image: <LuHistory size={"24px"} />,
        text: "History",
      },
      {
        image: <MdOutlinePlaylistPlay size={"24px"} />,
        text: "Playlists",
      },
      {
        image: <GoVideo size={"24px"} />,
        text: "Your Videos",
      },
      {
        image: <MdPodcasts size={"24px"} />,
        text: "Your Podcasts",
      },
      {
        image: <MdOutlineWatchLater size={"24px"} />,
        text: "Watch Later",
      },
      {
        image: <BiLike size={"24px"} />,
        text: "Liked Videos",
      },
      {
        image: <GoHome size={"24px"} />,
        text: "Home",
      },
      {
        image: <SiYoutubeshorts size={"24px"} />,
        text: "Short",
      },
      {
        image: <MdOutlineSubscriptions size={"24"} />,
        text: "Subscription",
      },
      {
        image: <RiAccountBoxLine size={"24px"} />,
        text: "Your Channel",
      },
      {
        image: <LuHistory size={"24px"} />,
        text: "History",
      },
      {
        image: <MdOutlinePlaylistPlay size={"24px"} />,
        text: "Playlists",
      },
      {
        image: <GoVideo size={"24px"} />,
        text: "Your Videos",
      },
      {
        image: <MdPodcasts size={"24px"} />,
        text: "Your Podcasts",
      },
      {
        image: <MdOutlineWatchLater size={"24px"} />,
        text: "Watch Later",
      },
      {
        image: <BiLike size={"24px"} />,
        text: "Liked Videos",
      },
      {
        image: <GoHome size={"24px"} />,
        text: "Home",
      },
      {
        image: <SiYoutubeshorts size={"24px"} />,
        text: "Short",
      },
      {
        image: <MdOutlineSubscriptions size={"24"} />,
        text: "Subscription",
      },
      {
        image: <RiAccountBoxLine size={"24px"} />,
        text: "Your Channel",
      },
      {
        image: <LuHistory size={"24px"} />,
        text: "History",
      },
      {
        image: <MdOutlinePlaylistPlay size={"24px"} />,
        text: "Playlists",
      },
      {
        image: <GoVideo size={"24px"} />,
        text: "Your Videos",
      },
      {
        image: <MdPodcasts size={"24px"} />,
        text: "Your Podcasts",
      },
      {
        image: <MdOutlineWatchLater size={"24px"} />,
        text: "Watch Later",
      },
      {
        image: <BiLike size={"24px"} />,
        text: "Liked Videos",
      },
      {
        image: <GoHome size={"24px"} />,
        text: "Home",
      },
      {
        image: <SiYoutubeshorts size={"24px"} />,
        text: "Short",
      },
      {
        image: <MdOutlineSubscriptions size={"24"} />,
        text: "Subscription",
      },
      {
        image: <RiAccountBoxLine size={"24px"} />,
        text: "Your Channel",
      },
      {
        image: <LuHistory size={"24px"} />,
        text: "History",
      },
      {
        image: <MdOutlinePlaylistPlay size={"24px"} />,
        text: "Playlists",
      },
      {
        image: <GoVideo size={"24px"} />,
        text: "Your Videos",
      },
      {
        image: <MdPodcasts size={"24px"} />,
        text: "Your Podcasts",
      },
      {
        image: <MdOutlineWatchLater size={"24px"} />,
        text: "Watch Later",
      },
      {
        image: <BiLike size={"24px"} />,
        text: "Liked Videos",
      },
    ];
    const open=useSelector(slice=>slice.app.open);
    return (
      <div className={`relative left-0  ${open?"w-[16%]":"w-auto"} overflow-y-scroll py-3 px-5 h-[calc(100vh-4.635rem)]  overflow-x-hidden`}>
        {
          array.map((item,index)=>{
            return (
              <div key={index} className='flex my-4  ml-2  items-center '>
                        {item.image}
                        <p className={`mx-3 flex ${open?"":"hidden"}`}>{item.text}</p>
                    </div>

                )
            })
        }
    </div>
  )
}

export default Sidebar
