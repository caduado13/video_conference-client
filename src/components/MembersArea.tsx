"use client"
import React, { useEffect, useState } from 'react'
import UserLayout from "@/components/UserLayout"
import List from './List';
import { FaSearch } from "react-icons/fa";
import {io} from "socket.io-client";
import UserList from './UserList'

const MembersArea = () => {
  const [username, setUsername] = useState<string | null>(null)
  const [usernameArr, setUsernameArr] = useState<string[]>([])


  
  useEffect(()=>{
    const userLS = sessionStorage.getItem("username");
    setUsername(userLS)
    
    const socket = io("http://localhost:3001");
    socket.on('connect', () => {
      console.log('Connected to Socket.io');
    });
    socket.emit("new_user", userLS)
    socket.on("users", (arg)=>{
      const filteredUsers = arg.filter((username:string) => username !== userLS);
      setUsernameArr(filteredUsers)
    });

    return () => {
      socket.disconnect();
    };
  }, [])
  
  return (
    <div className='bg-neutral-300 w-[650px] p-7 px-10 relative'>
        <UserLayout username={username}/>
        <div className="search-container" >
          <input type="text" className="input-search" placeholder="Search on server"/>
          <FaSearch className = "search-icon" size ={20}/>
        </div>
        <List >
          {usernameArr.map((item, index)=>(
            <UserList key={index} usernameList={item}/>
          )
          )}
        </List>
    </div>
  )
}

export default MembersArea
