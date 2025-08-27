import { CardItem } from "./ui/3d-card";

export const Tag = ({text} : {text: string}) => {
  return (
    <CardItem
      as="span"
      className="text-sm text-indigo-300 font-medium
        bg-indigo-900/50
        rounded px-2 py-1 border-indigo-500/40 border-1 whitespace-nowrap"
    >
        {text}
    </CardItem>
  )
}
