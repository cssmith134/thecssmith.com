import React from 'react'
import { Url } from 'url';
import { WorkItemType } from "../pages/Work"

function Workitem(props: WorkItemType){
  return (
    <a href={props.project_url}>
        <div>
            <img src={ props.image_url } width="400" height="300" />
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
        </div>
    </a>
  )
}

export default Workitem