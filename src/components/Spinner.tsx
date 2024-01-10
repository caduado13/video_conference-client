import React from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';


const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <ClipLoader
      color="#4285f4"
      size={50}
      loading={true}
    />
  </div>
  )
}

export default Spinner
