import React from 'react'
import Sidebar from "@/components/Sidebar";
      

const Main = () => {
  return (
    <div className='bg-slate-700 relative w-full'>
      <Sidebar></Sidebar>
      <button className='absolute right-0'>VOLTAR</button>
</div>
  )
}

export default Main
