"use client"

import { useState } from "react"
import Image from "next/image"
import { fetchImage } from "./fetch-image"

type CatImageProps = {
  url: string;
}

export function CatImage({ url }: CatImageProps){
  const [ imageUrl, setImageUrl ] = useState(url)

  const refreshImage = async () => {
    setImageUrl("")
    const image = await fetchImage()
    setImageUrl(image.url)
  }

  return (
    <div>
      <button onClick={refreshImage}>他の猫を見る</button>
      { imageUrl && <Image src={imageUrl} alt="random cat" width={500} height={500} /> }
    </div>
  )
}