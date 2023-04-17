import React from 'react'
import { Url } from 'url';
import { WorkItemType } from "../pages/Work"

function Workitem(props: WorkItemType){
  return (
    <a href={props.project_url}>
        <div>
            <img className='h-50 w-50 auto' src={ props.image_url } width="450" height="450" />
            <h1 className='text-2xl'>{props.name}</h1>
            <h3>{props.description}</h3>
        </div>
    </a>
  )
}

export default Workitem