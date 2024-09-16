import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/chatslice';
import {generateRandomName,generateRandomMsg} from "../Constant/randomhelper"
const LiveChat = () => { 
const message=useSelector((store)=>store.chat.message);
const dispatch=useDispatch();
useEffect(()=>{
    const generate=setInterval(() => {
        dispatch(
          setMessage({
            name: generateRandomName(),
            message: generateRandomMsg(16),
          })
        );
    }, 1000);
    return (()=>{
        clearInterval(generate);
    })
},[]);
    return (
    <div className='px-3 py-1'>
      <div>
        {
            message.map((item,index)=>{
                return(
                    <ChatMessage key={index} item={item}/>
                )
            })
        }
      </div>
    </div>
  )
}

export default LiveChat
