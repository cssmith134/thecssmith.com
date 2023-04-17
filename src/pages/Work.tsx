import React from "react";
import Workitem from "../components/Workitem";

export type WorkItemType = {
  name: string;
  image_url: string;
  description: string;
  project_url: string;
  height: string,
  width: string
};

const workItemsRaw = [
  {
    name: "Travellers",
    image_url: "/travelers.png",
    description: "Track local weather and Covid-19 risk levels.",
    project_url: "https://travelers.thecssmith.com/",
    height: "300px",
    width: "500px"
  },
  {
    name: "Beer Belly",
    image_url: "/beerbelly.png",
    description: "Find breweries for your next destination",
    project_url: "https://github.com/cssmith134/beerbelly",
    height: "300px",
    width: "500px"
  },
  {
    name: "YAASSS",
    image_url: "/YAASSS.png",
    description: "Website for New York based rock band, YAAASS",
    project_url: "https://www.instagram.com/69yaasss69/",
    height: "300px",
    width: "500px"
  },
];

const workItemGenerator = (work_items_list: WorkItemType[]) => {
  return work_items_list.map((work_item) => {
    return <Workitem {...work_item} />;
  });
};

function Work() {
  return (
    <div>
      <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20 font-light font-roboto">
        LATEST PROJECTS
      </h1>
      <div className="flex flex-auto max-h-fit justify-between gap-x-4 flex-col lg:flex-row">
        {workItemGenerator(workItemsRaw)}
      </div>
    </div>
  );
}

export default Work;
