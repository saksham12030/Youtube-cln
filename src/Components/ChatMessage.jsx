import React from 'react'
import Avatar from 'react-avatar';

const ChatMessage = ({item}) => {

  return (
    <div className="flex items-center py-1">
      <div>
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/220px-MrBeast_2023_%28cropped%29.jpg"
          size={"30px"}
          round={"20px"}
        />
      </div>
      <div className="flex items-center">
        <h1 className="font-bold  text-sm ml-2">{item.name}</h1>
        <p className="text-sm  py-1 ml-2">{item.message}</p>
      </div>
    </div>
  );
}

export default ChatMessage
