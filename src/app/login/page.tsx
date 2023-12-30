"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/form/Input';
import { useDispatch } from 'react-redux';
import { isAuthorization } from "@/app/redux/authState";


interface UserData {
  user: string,
  password: string
}


const Login = () => {
  const {setAuth} = isAuthorization
  const dispatch = useDispatch()
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

      if (!response.ok){
        const data = response.statusText;
        setErrState(data)

      }else{
        const {token} = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("username", postData.user);
        dispatch(setAuth(true))
        router.push("/");
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
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-500 ">
      <div className='bg-neutral-700 w-[400px] h-[500px] p-12 relative text-white shadow-xl rounded-xl overflow-hidden'>
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
        <div className='flex bg-neutral-800 absolute bottom-0 left-0 w-full h-12 items-center pl-12 '>
          <p>Have no account?</p>
          <p className='pl-8 cursor-pointer'onClick={()=> router.push("/register")}>Sign-in </p>
        </div>
      </div>
    </div>
  )
}

export default Login
