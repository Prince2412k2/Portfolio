import type { IconType } from "react-icons";
import { BiLogoGit, BiLogoGithub, BiLogoMongodb, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoStripe } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { LuGithub } from "react-icons/lu";
import { PiVectorThree } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";

type Projects = { title: string; techStack: Array<IconType | string>; description: string; link: string; live?: string };
const Project = () => {

  const projects: Array<Projects> = [
    {
      title: "MD-Muse",
      techStack: [BiLogoPython, BiLogoReact, BiLogoPostgresql],
      description:
        "An AI-powered markdown blogging platform with a rich editor, automatic content and tag generation, and a clean, responsive UI.",
      link: "https://github.com/Prince2412k2/genai_blog.git",
      live: "https://md-muse.vercel.app",
    },
    {
      title: "Ecom",
      techStack: [BiLogoStripe, RiNextjsFill, BiLogoMongodb],
      description:
        "A full-stack e-commerce application built with Next.js using server-side rendering, secure payments via Stripe, and a modern product workflow.",
      link: "https://github.com/Prince2412k2/ecom.git",
      live: "https://ecom-sand-omega.vercel.app",
    },
    {
      title: "Context-Machine",
      techStack: [BiLogoPython, BiLogoPostgresql, PiVectorThree, BiLogoReact, SiFastapi],
      description:
        "A document-first chat system that lets users interact with and query documents. Built with a React frontend and FastAPI backend.",
      link: "https://github.com/Prince2412k2/context_machine.git",
    },
    {
      title: "Social-Media",
      techStack: [BiLogoPython, BiLogoPostgresql, BiLogoReact, DiDjango],
      description:
        "A full-stack social media platform built with Django REST Framework and React, featuring posts, comments, and user interaction features.",
      link: "https://github.com/Prince2412k2/social-media.git",
    },
    {
      title: "VCS",
      techStack: [BiLogoPython],
      description:
        "A lightweight version control system inspired by Git, providing commits, diffs, repository management, and CLI tooling.",
      link: "https://github.com/Prince2412k2/vcs.git",
    },
    {
      title: "Noter",
      techStack: [BiLogoPython, BiLogoGit, "curses"],
      description:
        "A terminal-based note-taking application with Git-backed version control and a minimal TUI interface.",
      link: "https://github.com/Prince2412k2/Noter.git",
    },
    {
      title: "Static Site Generator",
      techStack: [BiLogoPython, BiLogoGithub],
      description:
        "A static site generator that converts Markdown to HTML and deploys seamlessly to GitHub Pages.",
      link: "https://github.com/Prince2412k2/static_site_gen.git",
      live: "https://prince2412k2.github.io/static_site_gen",
    },
    {
      title: "Pyman",
      techStack: [BiLogoPython, "uv"],
      description:
        "A terminal-based note-taking tool with Git integration, fast startup via uv, and a clean TUI workflow.",
      link: "https://github.com/Prince2412k2/Pyman.git",
    },
  ];
  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center gap-20 p-10 md:p-16 px-16"
    >

      <h1 className="text-center text-5xl font-light">Projects</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

        {projects.map((item, index) => (
          <a
            key={index}
            href={item.live ?? item.link} target="_blank" rel="noopener noreferrer"
            className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-teal-500 rounded-lg hover:bg-teal-50"
          >
            <span className="flex flex-row justify-between"><h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">{item.title}</h1>
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                className="text-md sm:text-xl md:text-2xl  hover:text-blue-500"><LuGithub /></a>
            </span>
            <div className="flex space-x-0.5" >
              {item.techStack.map((Tech, indexb) => typeof Tech === "function" ? (
                <Tech key={indexb} className="text-2xl text-gray-500" />
              ) : (
                <span key={indexb} className="text-sm text-gray-500" >({Tech})</span>
              )
              )}
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </a>))}
      </div>
    </div>
  )
}

export default Project
