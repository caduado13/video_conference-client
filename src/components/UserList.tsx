import React from 'react';
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";

const UserList = ({usernameList}: {usernameList:string | null}) => {
  return (
    <div className="hover:bg-opacity-30 hover:bg-neutral-500 rounded-md p-1 px-3 flex justify-between">
        <p>{usernameList}</p>
        <div className="flex">
            <FaVideo size = {25} className = "mx-2"/>
            <IoIosCall size = {25} className = "mx-2"/>
            <HiOutlineStatusOnline size = {25} className = "ml-2"/>
        </div>
    </div>
  )
}

export default UserList
