import React from 'react'


const List = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="mt-8">
      {children}
    </div>
  )
}

export default List
