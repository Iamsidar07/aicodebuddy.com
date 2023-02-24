import React from 'react'
import Image from 'next/image'
const Loading = () => {
  return (
    <Image src={"/flickr-loading.gif"} alt="loading" width={100} height={100} />
  )
}

export default Loading