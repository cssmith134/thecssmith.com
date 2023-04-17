import React from 'react';
import { ExperienceItemType } from '../pages/Experience';
import { Url } from 'url';


function Experienceitem(props: ExperienceItemType) {
  return (
    <a href={props.image_url}>
             <div>
                 <img className='h-50 w-50' src={ props.image_url } width="450" height="450" />
                 <h1 className='text-2xl'>{props.name}</h1>
                 <h3>{props.description}</h3>
             </div>
         </a>
  )
}


export default Experienceitem