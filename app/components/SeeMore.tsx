"use client"

import { useEffect, useState } from "react";
import ChevronDoubleDown from "./icons/ChevronDoubleDown";

export default function SeeMore() {

  const TIMEOUT = 3000 // 3 seconds

  const [screenIdle, setScreenIdle] = useState<boolean>(false);
  let timeoutId : ReturnType<typeof setTimeout>;
  useEffect(() => {
     // Render See More component if screen doesn't move for more than 3 seconds
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

  return (
    <>
       { ( screenIdle && (
            <div
              className="flex absolute bottom-0 flex-col pb-5 animate-fade" // TODO: add bounce animation to this later
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

