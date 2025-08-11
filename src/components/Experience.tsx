
type Job = { id: number; title: string; description: string; };

const Experience = () => {
  const jobs: Array<Job> = [
    {
      id: 1,
      title: "Job Title",
      description: "Description"
    }, {
      id: 2,
      title: "Job Title",
      description: "Description"
    }, {
      id: 3,
      title: "Job Title",
      description: "Description"
    }
  ]
  return (
    <div id="experience" className="flex min-h-screen w-full flex-col items-center md:items-start justify-center gap-20 p-14 md:p-20 lg:p-36">
      <h1 className="text-center text-5xl">Experience </h1>
      <div className=" flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          {jobs.map((index) => (
            <div className="relative space-y-1 border-l-2 p-8 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Experience {index.id} </h3>
              <p className="font-light text-lg text-gray-600">{index.title}</p>
              <p className="text-sm text-gray-600">{index.description}</p>
              <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
