"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Spinner from "@/components/Spinner";

export default function HomeRoot() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

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


  return (
      
        <>
          {loading && <Spinner/> }
        </>
      
  )
}
