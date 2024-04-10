import { Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle } from "flowbite-react"

export default function MyTimeline() {
  
  interface timelineObj {
    id: number
    date: string,
    title: string,
    body: string
  }

  const timelineData : Array<timelineObj> = [
    {id: 0, date: "2019", title: "Bronze Medalist in South East Asian Mathematical Olympiad", body: "test"},
    {id: 1, date: "2020", title: "test2", body: "test2"}
  ]
  
  // TODO: add mobile support
  return (
    <>
      <Timeline
        className="mx-8"
      >
        { timelineData.map((timelineData) => (
            <TimelineItem
              key="id"
            >
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime> { timelineData.date } </TimelineTime>
                <TimelineTitle className="text-white"> {timelineData.title } </TimelineTitle>
                <TimelineBody className="text-white-dark"> {timelineData.body } </TimelineBody>
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Timeline>
    </>
  )
}