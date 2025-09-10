import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import image from "/src/assets/user.webp"
import type { IconType } from "react-icons"
import React from "react"
import { IoDocumentAttach } from "react-icons/io5";

const Home = React.memo(() => {
  const name: string = "Prince Patel"
  const role: string = "Software Developer"
  const description: string = `You will catch me putting 2 days into developing a tool that will save me 2 seconds and 4 clicks.`

  const Links: Record<string, IconType> = {
    "https://github.com/Prince2412k2": BiLogoGithub,
    "https://www.linkedin.com/in/prince2412k2": BiLogoLinkedin,
    "https://prince2412k2.github.io/Resume/resume.pdf": IoDocumentAttach
  };
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img src={image} loading="lazy" alt="user" className="w-[300px] sm:w-[300px] rounded-full scale-105" />
        <div className="space-y-1 sm:space-y-3">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5x1 lg:text-6xl">{name}</h1>
          <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2x1 lg:text-3xl">{role}</h3>
          <p className="max-w-[500] text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-3">

          {Object.entries(Links).map(([link, Icon], index: number) => (
            <a aria-label={link} key={index} href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center" >
              <Icon className="h-10 w-10 
            cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 
            hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12"/>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
});

export default Home
