import React from "react";

type Job = { title: string; place: string; description: string; };
const Experience = React.memo(() => {
  const jobs: Array<Job> = [
    {
      title: "B.tech (AI-ML)",
      place: "Silver Oak University",
      description: `Graduated at May 2025 with 9.1 GPA`
    }, {
      title: "ML-AI Intern",
      place: "Innoventa Technologies",
      description: "Developed a GenAi Book reading app that generates Picturebooks and Audiobooks"
    }, {
      title: "AI-ML Associate",
      place: "Gateway Corp",
      description: "Curently at, Since 2025 "
    }
  ]
  return (
    <div id="experience" className="flex min-h-screen w-full flex-col items-center md:items-start justify-center gap-20 p-14 md:p-20 lg:p-36">
      <h1 className="text-center text-5xl">Experience </h1>
      <div className=" flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          {jobs.map((item, index) => (
            <div key={index} className="relative space-y-1 border-l-2 p-8 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">{item.title}</h3>
              <p className="font-light text-lg text-gray-600">{item.place}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
});

export default Experience
