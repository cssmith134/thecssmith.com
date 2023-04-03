const Home = () => {
    return (
        <div className="bg-theme text-white h-full w-full">
            <div className=" flex text-left flex-col lg:flex-row lg:space-x-32 w-full lg:w-11/12 mx-auto">
                <section className="lg:w-2/4 w-full flex flex-col my-10">
                    <div>
                        <h1 className="mx-10 relative z-80 flex justify-left text-5xl text-blue-500 color: rgb(59 130 246); py-20">
                            Building Solutions
                        </h1>
                    </div>
                    <div className="text-lg w-4/5 mx-10 text-left relative z-80">
                        <p>
                        I am a junior full stack developer with a passion for creativity and innovation. I recently graduated from Columbia Engineering Bootcamp where I honed my skills in web development. Prior to that, I pursued my love for music and the arts, which taught me the importance of attention to detail and dedication. I am excited to apply my diverse skillset to building meaningful and impactful applications.
                        </p>
                    </div>
                </section>
                <section className="pt-20 mx-10 relative">
                    <img src="/bio-photo1.png" width="400" height="400" alt=""  />
                    <div className= "flex justify-left p-5">
                    <h3>
                        Cooper Smith <br />
                        Junior Web Developer
                    </h3>
                   
                    </div>
                </section>
            </div>
            <div className=" flex text-left flex-col lg:flex-row lg:space-x-32 w-full lg:w-11/12 mx-auto">
                <section className="lg:w-2/4 w-full flex flex-col my-10">
                    <div className="mx-10 relative z-80 flex text-left text-3xl py-5">
                        <h1 className="text-xl text-blue-500 color: rgb(59 130 246); py-10">
                            RECENT PROJECTS 
                        </h1>
                    </div>
                    <div>
                    <div className="flex auto max-h-fit justify-between gap-x-20 flex-col lg:flex-row">
                        {/* placeholders for now */}
                    <img src="/bio-photo1.png" width="400" height="400" alt=""  />
                    <img src="/bio-photo1.png" width="400" height="400" alt=""  />
                    <img src="/bio-photo1.png" width="400" height="400" alt=""  />
                    <img src="/bio-photo1.png" width="400" height="400" alt=""  />
                    </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}

export default Home