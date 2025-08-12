import type { IconType } from "react-icons";
import { BiLogoGit, BiLogoGithub, BiLogoPostgresql, BiLogoPython, BiLogoReact } from "react-icons/bi";

type Project = { title: string; techStack: Array<IconType | string>; description: string; };
const Project = () => {


  const projects: Array<Project> = [
    {
      title: "VCS",
      techStack: [BiLogoPython],
      description: "A version control system.Clone of Git CLI."
    }, {
      title: "Noter",
      techStack: [BiLogoPython, BiLogoGit, "curses"],
      description: "A Tui Note taking app with git integration for version control"
    }, {
      title: "Static Site Generator",
      techStack: [BiLogoPython, BiLogoGithub],
      description: "Generate Static HTML from Markdown Hosted at github pages"
    }, {
      title: "Bookish",
      techStack: [BiLogoReact, BiLogoPython, BiLogoPostgresql, "RAG"],
      description: "Book reader with context aware word lookup (in progress)"
    }, {
      title: "Pyman",
      techStack: [BiLogoPython, "uv"],
      description: `A TUI note-taking app with Git integration for version control.`
    }
    , {
      title: "GreenRoute",
      techStack: [BiLogoReact, BiLogoPython],
      description: "CO2 emissions calculator for given vehicle type for given route"
    }]
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 px-32"
    >

      <h1 className="text-center text-5xl font-light">Projects</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

        {projects.map((item, index) => (
          <div
            key={index}
            className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">{item.title}</h1>
            <div className="flex space-x-0.5" >
              {item.techStack.map((Tech, indexb) => typeof Tech === "function" ? (
                <Tech key={indexb} className="text-2xl " />
              ) : (
                <span key={indexb} className="text-sm text-gray-500" >({Tech})</span>
              )
              )}
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>))}
      </div>
    </div>
  )
}

export default Project
