import React from 'react'
import { Fade } from 'react-reveal'
import Image from 'next/image'
const Loading = () => {
  return (
      <>
        <Fade bottom>
        <Image src={"/flickr-loading.gif"} alt="loading" width={100} height={100} />
          </Fade>
      </>
  )
}

export default Loading