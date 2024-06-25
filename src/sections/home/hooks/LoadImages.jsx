import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
const LoadImages =({item})=>{
  const [picture,setPicture]= useState(null)
  useEffect(()=>{
    const loadImage = async()=>{
      try{
        const {default:image} = await import(`${item.url}`)
        setPicture(image)
      }catch(error){
        console.error('Error al cargar imagen:', error)
      }
    };
    loadImage()
  },[item.url]);
  return (
    <Image src={picture} alt={item.name} fluid />
  )
}
export default LoadImages;