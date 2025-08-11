import { BiRightArrowAlt, BiHome, BiBriefcase, BiMailSend, BiCode } from "react-icons/bi"
import "../index.css"
import type { IconType } from "react-icons"


const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};



const HeaderLeft = () => {
  const headers: Record<string, IconType> = {
    home: BiHome,
    experience: BiBriefcase,
    project: BiCode,
    contact: BiMailSend,
  };
  return (
    <div className="md:flex-[1]">
      <div className="min-h-screen top-0 hidden md:sticky md:flex items-center justify-center bg-teal-600 text-white">
        <ul className="flex flex-col gap-10">
          {Object.entries(headers).map(([item, _]) => (
            <li key={item} className="flex items-center justify-start cursor-pointer font-medium transition-all duration-200 group sm:text:lg md:text-xl xl:text-3x1">
              <BiRightArrowAlt className="text-4xl -translate-x-5 opacity-0 tranform transition-all duration-200 group-hover:opacity-100 " /> {/*group-hover:opacity-0 */}
              <a href={`#${item}`} className='transition-all duration-200 hover:font-bold '>{capitalize(item)}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* for mobile view */}
      <div className="fixed left-0 right-0 top-0 flex justify-evenly bg-teal-600 p-5 text-white md:hidden">
        {Object.entries(headers).map(([item, Icon]) => (
          <a href={`#${item}`} className="flex flex-col items-center justify-center" >
            <Icon className="text-2xl" />
            <span className="text-xs">{capitalize(item)}</span>
          </a>))}
      </div>
    </div >
  )
}

export default HeaderLeft
