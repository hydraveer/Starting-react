import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
//     const [data,setData]=useState([])
//   useEffect(()=>{
//     fetch('https://api.github.com/users/hydraveer')
//     .then((res)=>res.json())
//     .then((res)=>{
//         setData(res);
//     })
//   },[])
  return (
    <div className=' text-center m-4 bg-gray-500 text-white text-3xl p-3  flex flex-col justify-center items-center  '>Github : {data.followers}
    <img className=' ' src={data.avatar_url} alt=""width={300} />
    </div>
  )
} 

export default Github

export const gitInfo=async()=>{
    const response=await fetch('https://api.github.com/users/hydraveer')
    return response.json()
}