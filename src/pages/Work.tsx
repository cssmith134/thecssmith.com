import React from 'react'
import Workitem from '../components/Workitem'

export type WorkItemType = {
    name: string,
    image_url: string,
    description: string
    project_url: string
}

const workItemsRaw = [
    {
        name: "Travellers",
        image_url: "/travelers.png",
        description: "Search a city, discover it's weather and current Covid-19 risk levels.",
        project_url: "https://travelers.thecssmith.com/"
    },
    {
        name: "Beer Belly",
        image_url: "/guitar-shop.png",
        description: "Search a city, discover it's weather and current Covid-19 risk levels. ",
        project_url: "https://thecssmith.com"
    },
    {
        name: "YAAASSS",
        image_url: "/YAASSS.png",
        description: "Website for New York based rock band, YAAASS",
        project_url: "https://www.instagram.com/69yaasss69/"
    },
    {
        name: "Travellers",
        image_url: "/guitar-shop.png",
        description: "things lalalalal this is a dscriprtion",
        project_url: "https://thecssmith.com"
    }
]

const workItemGenerator = (work_items_list: WorkItemType[]) => {
   return work_items_list.map(work_item => {
    return <Workitem {...work_item} />
   })
}


function Work() {
  return (
    <div>
        <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20 font-light font-roboto">LATEST PROJECTS</h1>
            <div className="flex flex-auto max-h-fit justify-between gap-x-4 flex-col lg:flex-row">  
                { workItemGenerator(workItemsRaw) }           
            </div>
    </div>
  )
}

export default Work
