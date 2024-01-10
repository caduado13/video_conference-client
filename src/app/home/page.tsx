"use client"

import React from 'react'
import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";

import { useSelector } from "react-redux";


interface ShowAreaType {
  isShow: {
    show: boolean;
  };
}

const Home = () => {
  const isShow = useSelector((state:ShowAreaType) => state.isShow.show);    
    
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
