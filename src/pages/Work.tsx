import React from 'react'
import Workitem from '../components/Workitem'



function Work() {
  return (
    <div>
        <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20 font-light font-roboto">LATEST PROJECTS</h1>
            <div className="flex flex-auto max-h-fit justify-between gap-x-4 flex-col lg:flex-row">  
            <Workitem name={'cooper'} image="/bio-photo1.png" />           
            </div>
    </div>
  )
}

export default Work
