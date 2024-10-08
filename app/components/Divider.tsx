interface dividerPropType {
  text: string,
  className?: string,
}

export default function Divider({ text, className }: dividerPropType) {
  return (
    <div className={`${className} relative flex py-5 items-center`}>
      <div className="flex-grow border-t border-gray-400 ml-20"></div>
      <span className="flex-shrink mx-4 text-gray-200">{ text }</span>
      <div className="flex-grow border-t border-gray-400 mr-20"></div>
    </div>
  )
}