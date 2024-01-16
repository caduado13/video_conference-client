import React from 'react'
import Sidebar from "@/components/Sidebar";
import UserCard from '@/components/UserCard';
import { BsFastForwardFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "@/redux/showServer";

interface ShowAreaType {
  isShow: {
    show: boolean;
  };
}



const Main = ({showClass, }:{showClass:boolean}) => {
  
  const isShow = useSelector((state:ShowAreaType) => state.isShow.show)
  const dispatch = useDispatch() 
  const handleArea = () =>{
      dispatch(setShow(!isShow))
  }
  
  return (
    <div className="bg-neutral-700 relative w-full h-full" id='main-container'>
      <div className='cards-container'>
        <UserCard/>
        <UserCard/>
      </div>
      <BsFastForwardFill  size ={35} color = {"black"} onClick= {handleArea} className = {`position-arrows ${!showClass ? "show-off": ""}`}/>
      <Sidebar></Sidebar>
    </div>
  )
}

export default Main
