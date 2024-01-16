"use client"

import React, {useEffect, useRef, useState} from 'react'
import MembersArea from "@/components/MembersArea";
import Main from "@/container/Main";

import {UserType} from "@/redux/users"
import { useSelector } from "react-redux";

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
  const [resizeDiv, setResizeDiv] = useState(false)
  const userDataState = useSelector((state:User) => state.userState);
  const divPrincipalRef = useRef<HTMLDivElement>(null);
  
  const [alturaDivInterna, setAlturaDivInterna] = useState(0);

  useEffect(() => {
    const ajustarAlturaPrincipal = () => {
      const divPrincipal = divPrincipalRef.current;

      if (divPrincipal) {
        divPrincipal.style.minHeight = alturaDivInterna + 100 + 'px';
        setResizeDiv((prev) => !prev)
      }
    };
    ajustarAlturaPrincipal();

    window.addEventListener('resize', ajustarAlturaPrincipal);
    return () => {

      window.removeEventListener('resize', ajustarAlturaPrincipal);
    };
  }, [alturaDivInterna, isShow]); 


  useEffect(() => {
    const divInterna = divPrincipalRef.current?.querySelector('.cards-container') as HTMLElement | null;;

    if (divInterna) {
      setAlturaDivInterna(divInterna.offsetHeight);
    }
  }, [resizeDiv, isShow]);


    
  return (
    <div className="w-screen h-screen flex" id='main-div' ref={divPrincipalRef} onResize={()=> setResizeDiv((prev) => !prev)}>
    <Main showClass={isShow} ></Main>
    {
      !isShow ? <></> :<MembersArea></MembersArea>
    }

  </div>
  )
}

export default Home
