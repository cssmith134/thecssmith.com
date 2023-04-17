import React from "react";
import Experienceitem from "../components/Experienceitem";

export type ExperienceItemType = {
  name: string;
  image_url: string;
  description: string;
}

const ExperienceItemsRaw = [
  {
    name: "Columbia Engineering Coding Bootcamp ",
    image_url: "/columbia-cert.png",
    description: "Gratuated top of my class with a 95.6% A+",
  },
  {
    name: "Technologies Intern at Tunecore",
    image_url: "/tune-core.png",
    description: "Interned at a music disribution company",
  },
  {
    name: "Sisters",
    image_url: "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tyyfjk08tahiypilxxac",
    description:"Bartender at brooklyn based cocktail bar with over 8 years of experience.",
  },
];

const ExperienceItemGenerator = (
  experience_items_list: ExperienceItemType[]
) => {
  return experience_items_list.map((experience_item) => {
    return <Experienceitem {...experience_item} />;
  });
};

function Experience() {
  return (
    <div>
      <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20 font-light font-roboto">
        Experience
      </h1>
      <div className="flex flex-auto max-h-fit justify-between gap-x-4 flex-col lg:flex-row">
        {ExperienceItemGenerator(ExperienceItemsRaw)}
      </div>
    </div>
  );
}

export default Experience;
