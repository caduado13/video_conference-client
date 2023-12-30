"use client"

import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";
import {useState} from "react"
import { useSelector } from "react-redux";

interface RootState {
  isAuth: {
    auth: boolean;
  };
}

export default function Home() {
  const isAuth = useSelector((state:RootState) => state.isAuth.auth) 
  console.log(isAuth)
  const [show, setShow] = useState(true)
  return (
      
        <div className="w-screen h-screen bg-slate-400 flex">
          <Main></Main>
          {
            !show ? <></> :<MembersArea></MembersArea>
          }
        </div>
      
  )
}
