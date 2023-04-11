import React from 'react'
import { Url } from 'url';

type WorkItem = {
    name: string;
    image: string;
  };

function Workitem({name, image}: {name:string; image:string}){
  return (
   <div className=''>
   <div style={{backgroundImage: `url(${image})`}} />
   <h1>{name}</h1>
   </div>
  )
}

export default Workitem