"use client"
import React, { useEffect, useState } from 'react'
import UserLayout from "@/components/UserLayout"
import List from './List';
import { FaBackwardFast } from "react-icons/fa6";

const MembersArea = () => {
  const [username, setUsername] = useState<string | null>(null)
  
  const getUser = () => {
    const userLS = localStorage.getItem("username")
    setUsername(userLS)
  }

  useEffect(()=>{
    getUser()
  }, [])
  
  return (
    <div className='bg-neutral-300 w-[800px] p-7 px-10 relative'>
        <FaBackwardFast  className = "absolute left-2 top-2" size= {18}/>
        <UserLayout username={username}/>
        <input type="text" />
        <List/>
    </div>
  )
}

export default MembersArea
