import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie';
// import animationUrl from "../public/fire.json"
import animationUrl from "../public/running-dog.json"
const Loading = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationUrl,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (<>
    <Lottie
    options={defaultOptions}
    height={120}
    width={120}
    />
  </>
  )
}

export default Loading