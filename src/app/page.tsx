"use client"

import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";
import {useState} from "react"

export default function Home() {

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
