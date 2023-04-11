const Home = () => {
  return (
    <div className="bg-theme text-white h-full w-full">
      <div className=" flex text-left flex-col lg:flex-row lg:space-x-32 w-full lg:w-11/12 mx-auto">
        <section className="lg:w-2/4 w-full flex flex-col my-10">
          <div>
            <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20 font-light font-roboto">
              Building Solutions
            </h1>
          </div>
          <div className="text-lg w-4/5 mx-10 text-left relative z-80">
            <p>
              I am a junior full stack developer with a passion for creativity
              and innovation. I recently graduated from Columbia Engineering
              Bootcamp where I honed my skills in web development. Prior to
              that, I pursued my love for music and the arts, which taught me
              the importance of attention to detail and dedication. I am excited
              to apply my diverse skillset to building meaningful and impactful
              applications.
            </p>
          </div>
        </section>
        <section className="pt-20 mx-10 relative">
          <img src="/bio-photo1.png" width="400" height="400" alt="" />
          <div className="flex justify-left p-5">
            <h3>
              Cooper Smith <br />
              Junior Web Developer
            </h3>
          </div>
        </section>
      </div>
      <div className=" flex text-left flex-col lg:flex-row lg:space-x-32 w-full lg:w-11/12 mx-auto">
        <section className="lg:w-2/4 w-full flex flex-col my-10">
          <div className="skills mx-10 relative z-80 flex text-left text-3xl py-5">
            <h1 className="text-1xl text-blue-500 color: rgb(59 130 246); py-10">
              SKILLS / LANGUAGES
            </h1>
          </div>
          <div className="flex mx-1 flex-row justify-between">
            <div>
              <h3 className=" text-2xl pl-10 underline">Front End</h3>
              <ul className="text-lg pl-10 py-10 ">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Figma</li>
                <li>Vite</li>
                <li>Tailwind</li>
              </ul>
            </div>

            <div>
              <h3 className=" text-2xl pl-10 underline">Back End</h3>
              <ul className=" text-lg pl-10 py-10">
                <li>API's</li>
                <li>Node</li>
                <li>OOP & TDD</li>
                <li>Express</li>
                <li>Express Handlebars</li>
                <li>SQL</li>
                <li>MVC's</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl pl-10 underline">More</h3>
              <ul className="text-lg pl-10 py-10">
                <li>PWA's</li>
                <li>NoSQL</li>
                <li>MERN</li>
                <li>Docker</li>
                <li>Nginx</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>
          </div> 
        </section>
      </div>
    </div>
  );
};

export default Home;
