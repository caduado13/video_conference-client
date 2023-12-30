import React from 'react'
import { HiOutlineStatusOnline } from "react-icons/hi";

const UserLayout = ({username}: {username: string | null}) => {
  return (
    <div className="hover:bg-neutral-200 rounded-md bg-neutral-300 p-1 px-3 flex justify-between">
        <p>{username}</p>
        <p><HiOutlineStatusOnline size = {25} color = {"green"} /></p>
    </div>
  )
}

export default UserLayout
