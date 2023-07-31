import React, {useState} from 'react'
import useInterval from './useInternal'

export default function Mescribir({text}) {
    const [index, setIndex]=useState(0)

    useInterval(()=>{
        setIndex(prev=>prev+1)
    },30)
  return (

    <>
        <span>{text.slice(0,index)}</span>
    </>
  )
}
