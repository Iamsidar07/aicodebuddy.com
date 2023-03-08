import React from 'react'
import Lottie from 'react-lottie';
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
    height={150}
    width={150}
    />
  </>
  )
}

export default Loading