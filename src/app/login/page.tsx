"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/form/Input';


interface UserData {
  user: string,
  password: string
}

const Login = () => {
  const router = useRouter()

  const [userValue, setUserValue] = useState<string>("")
  const [passwordValue, setPasswordValue] = useState<string>("")
  const [errState, setErrState] = useState<string>("")

  const handleUser = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserValue(value)
  }
  
  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value)
  }

  const handlePostRequest = async (postData: UserData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    try {
      const response = await fetch("http://localhost:3001/login", options);
      console.log(response.statusText)
      if (!response.ok){
        const data = response.statusText;
        setErrState(data)
        console.log(errState)
      }else{
        router.push("/");
        console.log(`${postData.user} logged`)
      }        
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const userData:UserData = {
      user: userValue,
      password: passwordValue
    }
    handlePostRequest(userData);
  }



  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-400 '>
      <div className='bg-slate-600 w-[400px] h-[500px] p-12 relative text-white shadow-xl rounded-xl overflow-hidden'>
        <h1 className='text-3xl pb-4'>Login</h1>
        <hr />
        <form action='/login' method='POST' className='pt-4' onSubmit={submitForm}>

          {errState === "Unauthorized" || errState === "Bad Request"  ?
          <>
            <Input 
            type = "text"
            label = "User"
            onChange = {handleUser}
            value = {userValue}
            name = {""}
            msg="Wrong username or password"
            txtColor='text-red-600'
            /> 
            <Input 
            type = "password"
            label = "Password"
            onChange = {handlePassword}
            value = {passwordValue}
            name = {""}
            msg="Wrong username or password"
            txtColor="text-red-600"
            />
          </>:
          <>          
          <Input 
          type = "text"
          label = "User"
          onChange = {handleUser}
          value = {userValue}
          name = {""}
          msg=""
          txtColor=""
          
          /> 
          <Input 
          type = "password"
          label = "Password"
          onChange = {handlePassword}
          value = {passwordValue}
          name = {""}
          msg=""
          txtColor=""
          />
          </>
          }

          
            <br /> 
          <input type="submit" value="Login" className='bg-emerald-500 w-[100px] p-1 cursor-pointer mt-2' />
        </form>
        <div className='flex bg-slate-900 absolute bottom-0 left-0 w-full h-12 items-center pl-12 '>
          <p>Have no account?</p>
          <p className='pl-8 cursor-pointer'onClick={()=> router.push("/register")}>Sign-in </p>
        </div>
      </div>
    </div>
  )
}

export default Login
