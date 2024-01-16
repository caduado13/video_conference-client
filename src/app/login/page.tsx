"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/form/Input';

interface UserData {
  user: string,
  password: string
}

const Login = () => {
  const router = useRouter();
  const [userValue, setUserValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [errState, setErrState] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
        setErrState(true) 
        setLoading(false)
      }else{
        const {token} = await response.json();
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", postData.user);
        setErrState(false)
        router.push("/home");
      }        
    } catch (error) {
      setErrState(true)
      setLoading(false)
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
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
        {/* {loading ? <Spinner/>: <></>} */}
        <hr />
        <form action='/login' method='POST' className='pt-4' onSubmit={submitForm}>

          {errState  ?
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
          msg={""}
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
          <input type="submit" value={`${loading ? "Loading..." : "Login" }`} className={`bg-emerald-500 w-[100px] p-1 cursor-pointer mt-2 ${loading ? "pointer-events-none": "" }`} />
        </form>
        <div className='flex bg-neutral-800 absolute bottom-0 left-0 w-full h-12 items-center pl-12 '>
          <p>Have no account?</p>
          <p className= {`pl-8 cursor-pointer`}onClick={()=> router.push("/register")}>Sign-up </p>
        </div>
      </div>
    </div>
  )
}

export default Login
