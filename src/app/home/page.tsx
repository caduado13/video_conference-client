"use client"

import React, {useEffect} from 'react'
import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";

import {UserType} from "@/redux/users"
import { useSelector } from "react-redux";

import Cookie from "js-cookie"

interface ShowAreaType {
  isShow: {
    show: boolean;
  };
}

interface User{
  userState:UserType
}


const Home = () => {
  const isShow = useSelector((state:ShowAreaType) => state.isShow.show);
  const userDataState = useSelector((state:User) => state.userState);
  



    
  return (
    <div className="w-screen h-screen flex">
    <Main showClass={isShow} ></Main>
    {
      !isShow ? <></> :<MembersArea></MembersArea>
    }

  </div>
  )
}

export default Home
