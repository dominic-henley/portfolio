"use client"

import { IconContext } from "react-icons";

interface iconType {
  name: string,
  icon: JSX.Element, // This should be a React icon
  className?: string,
  url?: string
}

export default function Icon({ name, icon, className = '', url = undefined } : iconType) {
  
  return (
    <>
      <IconContext.Provider
        value={ { size: "45px", color: 'white' } }
        >
          { url && (
              <a href={ url } target="_blank">
                <div
                  className={`flex flex-col ${className}`}
                  >
                    <div
                      className="flex justify-center"
                      >
                      { icon }
                    </div>
                    <div
                      className="flex justify-center text-white"
                      >
                      { name }
                    </div>
                </div>
              </a>
          )}
          { !url && (
              <div
              className={`flex flex-col ${className}`}
              >
                <div
                  className="flex justify-center"
                  >
                  { icon }
                </div>
                <div
                  className="flex justify-center text-white"
                  >
                  { name }
                </div>
            </div>
          )}
      </IconContext.Provider>
    </>
  )
}