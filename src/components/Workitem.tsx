import React from 'react'
import { Url } from 'url';
import { WorkItemType } from "../pages/Work"

function Workitem(props: WorkItemType){
  return (
    <a href={props.project_url}>
        <div >
           <img style={{width : props.width, height: props.height}} src={ props.image_url }  />
            <h1 className='text-2xl'>{props.name}</h1>
            <h3>{props.description}</h3>
        </div>
    </a>
  )
}

export default Workitem