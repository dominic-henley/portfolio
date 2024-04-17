import { useGSAP } from "@gsap/react";
import { MutableRefObject, RefObject, useRef } from "react";
import { IconContext } from "react-icons";
import gsap from "gsap";

interface skillType {
  name: string,
  icon: JSX.Element // This should be a React icon
}


export default function Skill({ name, icon } : skillType) {
  
  return (
    <>
      <IconContext.Provider
        value={ { size: "45px" } }
        >
        <div
          className="flex flex-col border-x-2 rounded-lg w-fit h-fit p-4 skill opacity-0"
          >
            <div
              className="flex justify-center"
              >
              { icon }
            </div>
          { name }
        </div>
      </IconContext.Provider>
    </>
  )
}