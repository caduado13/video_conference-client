"use client"
import React, { useEffect, useState } from 'react'
import UserLayout from "@/components/UserLayout"
import List from './List';
import { FaSearch } from "react-icons/fa";

const MembersArea = () => {
  const [username, setUsername] = useState<string | null>(null)

  const getUser = () => {
    const userLS = sessionStorage.getItem("username")
    setUsername(userLS)
  }

  useEffect(()=>{
    getUser()
  }, [username])
  
  return (
    <div className='bg-neutral-300 w-[650px] p-7 px-10 relative'>
        <UserLayout username={username}/>
        <div className="search-container" >
          <input type="text" className="input-search" placeholder="Search on server"/>
          <FaSearch className = "search-icon" size ={20}/>
        </div>
        <List/>
    </div>
  )
}

export default MembersArea
