"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Spinner from "@/components/Spinner";

import {useSelector, useDispatch} from "react-redux"
import { setUserName, setUserId } from "@/redux/users";
import Cookie from "js-cookie"

export default function HomeRoot() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  const dispatch = useDispatch()
  const getRouter = async () => {
    setLoading(true)
    const token = sessionStorage.getItem("token");
    
    if (!token) {
      router.push("/login");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3001", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const userData = await response.json();
      
      dispatch(setUserName(userData.data.user));
      dispatch(setUserId(userData.data._id));
      
      router.push("/home");
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };


useEffect(() => {
  getRouter();
}, []);


  return (<>{loading && <Spinner/>}</>)
}
