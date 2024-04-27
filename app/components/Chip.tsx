import { status } from "../enums/status";
import { Badge } from "flowbite-react"
import { FaCheck, FaHammer } from "react-icons/fa";

interface statusType {
  stat: string,
  className?: string
}

// Currently not in use but may be used in the future
const getColour = (stat : number) => {
  if(stat == status["Done"]) {
    return "border-green"
  }
  return "border-yellow-300"
}

const getIcon = (stat : number) => {
  if(stat == status["Done"]) {
    return ( FaCheck )
  }
  return ( FaHammer )
}

export default function Chip({ stat, className = '' } : statusType) {
  return (
    <div
      className="flex items-center justify-center"
      >
      <Badge
        icon={ getIcon(status[stat]) }
        className={ className }
        >
          { stat }
      </Badge>
    </div>
  )
}