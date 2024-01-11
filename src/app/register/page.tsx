"use client";
import React, { useState, useEffect } from "react";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";

interface UserData {
  user: string;
  password: string;
}

const Register = () => {
  const router = useRouter();
  
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [passwordValueConfirm, setPasswordValueConfirm] = useState<string>("");
  const [passwordMatch, setPasswordsMatch] = useState<boolean>(true);
  const [userValue, setUserValue] = useState<string>("");
  const [userError, setUserError] = useState<any>({ status: false, error: null });

  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => setUserValue(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === "password" ? setPasswordValue(value) : setPasswordValueConfirm(value);
  };

  const handlePostRequest = async (postData: UserData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    try {
      const response = await fetch("http://localhost:3001/register", options);

      if (!response.ok) {
        const data = await response.json();        
        setUserError({ status: true, error: data });
      } else {
        setUserError({ status: false, error: null });
      }
    } catch (error) {
      console.log(error);
      setUserError({ status: false, error: null });
    }
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordValue === "" || passwordValueConfirm === "" || !passwordMatch) {
      return;
    }

    const userData: UserData = { user: userValue, password: passwordValue };

    try {
      await handlePostRequest(userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userError.status && userValue !== "") {
      alert("User register successful, you will be redirected to the login page!");
      router.push("/login");
    } 
  }, [userError]);

  useEffect(() => {
    const match = passwordValue === passwordValueConfirm;
    setPasswordsMatch(match);
  }, [passwordValue, passwordValueConfirm]);

  const getPasswordInputProps = () => ({
    label: "Password",
    type: "password",
    value: passwordValue,
    name: "password",
    onChange: handlePasswordChange,
  });

  const getPasswordConfirmInputProps = () => ({
    label: "Confirm password",
    type: "password",
    value: passwordValueConfirm,
    name: "passwordConfirm",
    onChange: handlePasswordChange,
  });

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-neutral-500 ">
      <div className="bg-neutral-700 w-[400px] h-[500px] p-12 relative text-white shadow-xl rounded-xl overflow-hidden">
        <h1 className="text-3xl pb-4">Register</h1>
        <hr />
        <form action="/register" method="POST" className="pt-4" onSubmit={submitForm}>
          {userError.status && userError.error?.errors?.user === "Account already exists!" ? (
            <Input name="" label="User" type="text" value={userValue} onChange={handleUser} msg={userError.error?.errors?.user}  txtColor="text-red-600"/>
          ) : userError.status && userError.error?.errors?.user && userError.error?.errors?.user !== "Account already exists!" ? ((
            <Input name="" label="User" type="text" value={userValue} onChange={handleUser} msg="User shorted than 3 characters" txtColor="text-red-600" />
          )):(
            <Input txtColor="text-slate-300" name="" label="User" type="text" value={userValue} onChange={handleUser} msg="Write a username with min 3 characters" />
          )}

          {!passwordMatch ? (
            <Input {...getPasswordInputProps()} msg="Passwords don't match" txtColor="text-red-600" />
          ) : passwordMatch && userError.error?.errors?.password ? (
            <Input {...getPasswordConfirmInputProps()} msg="Password is shorter than 8 characters"  txtColor="text-red-600"/>
          ) : (
            <Input {...getPasswordInputProps()} msg="Write a password with min 8 characters" txtColor="text-slate-300" />
          )}

          {!passwordMatch ? (
            <Input {...getPasswordConfirmInputProps()} msg="Passwords don't match"  txtColor="text-red-600"/>
          ) : passwordMatch && userError.error?.errors?.password ? (
            <Input {...getPasswordConfirmInputProps()} msg="Password is shorter than 8 characters" txtColor="text-red-600" />
          ) : (
            <Input {...getPasswordConfirmInputProps()} msg="Confirm a password with min 8 characters" txtColor="text-slate-300" />
          )}

          <br />
          <input type="submit" value="Login" className="bg-emerald-500 w-[100px] p-1 mt-2" />
        </form>
        <div className='flex bg-neutral-800 absolute bottom-0 left-0 w-full h-12 items-center pl-12 '>
          <p>Do you have account?</p>
          <p className='pl-8 cursor-pointer'onClick={()=> router.push("/login")}>Sign-in </p>
        </div>
      </div>

    </div>
  );
};

export default Register;