import { CardItem } from "./3d-card";

export const ProjectTag = ({text} : {text: string}) => {
  return (
    <CardItem
      as="span"
      className="text-sm text-indigo-700 dark:text-indigo-300 font-medium
        bg-indigo-200/50 dark:bg-indigo-900/50
        rounded px-2 py-1 border-indigo-400/40 dark:border-indigo-500/40 border-1 whitespace-nowrap"
    >
        {text}
    </CardItem>
  )
}
