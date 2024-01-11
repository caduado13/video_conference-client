import React from 'react'
import { MdPersonPin } from "react-icons/md";

const UserCard = () => {
  return (
    <div className="bg-red-600 card m-2">
      <MdPersonPin size = {150} className = "card-icon"/>
    </div>
  )
}

export default UserCard
