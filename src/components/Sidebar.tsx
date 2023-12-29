import React from 'react'

import { FaMicrophoneAlt, FaVideo } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdChat } from "react-icons/md";
import { TbScreenShare } from "react-icons/tb";
import { PiRecordFill } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className='bg-gray-400 absolute bottom-0 w-full h-14 px-16'>
      <div className='flex justify-between h-full items-center'>
        <div className='flex'>
            <p className='px-3 flex flex-col items-center'>
                <FaMicrophoneAlt size = {23}/>
                <span className='text-sm'>mute</span>
            </p>
            <p className='px-3 flex flex-col items-center'>
                <FaVideo  size = {23}/>
                <span className='text-sm'>Stop Video</span>
            </p>
        </div>
        <div className='flex'>
            <p className='px-3 flex flex-col items-center'>
                <FaUserGroup size = {23}/>
                <span>Participantes</span>
            </p>
            <p className='px-3 flex flex-col items-center'>
            <MdChat size = {23} />
                <span className='text-sm'>Chat</span>
            </p>
            <p className='px-3 flex flex-col items-center'>
                <TbScreenShare size = {23}/>
                <span className='text-sm'>Share Screen</span>
                
            </p>
            <p className='px-3 flex flex-col items-center'>
                <PiRecordFill size = {23}/>
                <span className='text-sm'>Record</span>
            </p>
        </div>
        <button className='bg-red-600 w-20 rounded-md text-white font-bold'>End</button>
      </div>
    </div>
  )
}

export default Sidebar
