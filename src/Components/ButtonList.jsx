import React from 'react'

const ButtonList = () => {
    const buttonlister=["All","Javascript","Java","Live","Music","Vlogs","Trending","Programming","HTML","CSS"]
  return (
    <div className='w-full'>
        {
            buttonlister.map((item,index)=>{
                return(
                    <button key={index} className='bg-gray-200 px-4 py-1 mx-2 rounded-lg'>{item}</button> 
                )
            })
        }
    </div>
  )
}

export default ButtonList
