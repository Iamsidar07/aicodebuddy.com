import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
import animationUrl1 from "../public/fire.json"
import animationUrl2 from "../public/running-dog-2.json"
const Loading = () => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:animationUrl2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (<>
    <Lottie
    options={defaultOptions}
    height={200}
    width={200}
    />
  </>
  )
}

export default Loading