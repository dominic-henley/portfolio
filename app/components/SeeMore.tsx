"use client"

import { useEffect, useState } from "react";
import ChevronDoubleDown from "./icons/ChevronDoubleDown";

export default function SeeMore() {

  const TIMEOUT = 5000 // 5 seconds

  const [screenIdle, setScreenIdle] = useState<boolean>(false);
  let timeoutId : ReturnType<typeof setTimeout>;
  useEffect(() => {
     // Render See More component if screen doesn't move for more than TIMEOUT seconds
    timeoutId = setTimeout(() => {
      setScreenIdle(true);
    }, TIMEOUT)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [])

  if(typeof window !== "undefined") {
    window.onscroll = () => {
      if(screenIdle == true) {
        setScreenIdle(false);
      } else {
        clearTimeout(timeoutId);
      }
    }
  }

  // TODO: add bounce animation to this later
  return (
    <>
       { ( screenIdle && (
            <div
              className="flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4 animate-fade" 
            >
                <div>
                  See More
                </div>  
                <div
                  className="flex justify-center"
                >
                  <ChevronDoubleDown />
                </div>
            </div>
          )
        )
      }
    </>
  )
}

