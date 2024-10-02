"use client"

import { useEffect, useRef, useState } from "react";
import ChevronDoubleDown from "./icons/ChevronDoubleDown";

export default function SeeMore() {

  const TIMEOUT = 5000 // 5 seconds

  const [screenIdle, setScreenIdle] = useState<boolean>(false);
  const timeoutId =  useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
     // Render See More component if screen doesn't move for more than TIMEOUT seconds
    timeoutId.current = setTimeout(() => {
      setScreenIdle(true);
    }, TIMEOUT)

    return () => {
      clearTimeout(timeoutId.current);
    }
  }, [])

  if(typeof window !== "undefined") {
    window.onscroll = () => {
      if(screenIdle == true) {
        setScreenIdle(false);
      } else {
        clearTimeout(timeoutId.current);
      }
    }
  }

  return (
    <>
       { ( screenIdle && (
            <div
              className="flex flex-col absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pb-4 animate-fade" 
            >
                <div
                  className="text-white"
                >
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

