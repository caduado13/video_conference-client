"use client"

import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


interface RootState {
  isAuth: {
    auth: boolean;
  };
}
interface ShowAreaType {
  isShow: {
    show: boolean;
  };
}

export default function Home() {
  const isAuth = useSelector((state:RootState) => state.isAuth.auth) 
  const isShow = useSelector((state:ShowAreaType) => state.isShow.show)
  const dispatch = useDispatch() 
  console.log(isAuth)
  
  

  return (
      
        <div className="w-screen h-screen bg-slate-400 flex">
          <Main showClass={isShow}></Main>
          {
            !isShow ? <></> :<MembersArea></MembersArea>
          }
        </div>
      
  )
}
