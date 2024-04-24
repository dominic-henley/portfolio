import { client } from "@/sanity/lib/client";
import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react";
import { SanityDocument } from "next-sanity";
import { parseDate } from "../utils/date";
import Divider from "./Divider";
import React from "react";
import Bio from "./Bio";

export default async function TimelineBio() {

  const TIMELINE_QUERY = "*[_type == 'timelinePoint']";

  // GROQ request to fetch data of _type timelinePoint
  const timelinePoints = await client.fetch<Array<SanityDocument>>(TIMELINE_QUERY);

  // Sort fetched data based on date
  timelinePoints.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));



  // TODO: add mobile support
  return (
    <>
    <div
      className="flex flex-col"
      >
      <div
        className="flex flex-row"
        >
        <div
          className="w-2/3 flex justify-center"
        >
          <Timeline
            className="w-2/3"
            >
            { timelinePoints && timelinePoints.map((timelineData) => (
                <TimelineItem
                  key="_id"
                >
                  <TimelinePoint />
                  <TimelineContent>
                    <TimelineTime> { parseDate(timelineData.date) } </TimelineTime>
                    <TimelineTitle className="text-white"> { timelineData.title } </TimelineTitle>
                    <TimelineBody className="text-white-dark"> { timelineData.body ? timelineData.body[0].children[0].text : null } </TimelineBody>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </div>
        <Bio />
      </div>
      <Divider text="-" />
    </div>
    </>
  )
}