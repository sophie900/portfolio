import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { ProjectTag } from "./ProjectTag";

export const ProjectCard = ({
    projectName,
    description,
    link,
    imagePath,
    tags
  } : {
    projectName: string,
    description: string,
    link: string,
    imagePath: string,
    tags: Array<string>
  }) => {
  return (
    <CardContainer>
      <a href={link} target="_blank">
      <CardBody className="bg-zinc-100 dark:bg-zinc-950/50
        relative group/card
        dark:hover:shadow-2xl dark:hover:shadow-indigo-600/[0.1] dark:border-white/[0.2] border-zinc-900/[0.1]
        w-auto sm:w-[30rem] h-auto rounded-xl p-6 border
        hover:cursor-pointer"
      >
        <CardItem className="w-full">
            <img
                src={imagePath}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                alt={projectName + " thumbnail"}
            />
        </CardItem>

        <CardItem
            className="text-xl font-bold text-zinc-600 dark:text-white mt-4"
        >
            {projectName}
        </CardItem>

        <CardItem
            as="p"
            className="text-zinc-500 text-sm max-w-sm mt-2 dark:text-zinc-300"
        >
            {description}
        </CardItem>

        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((item, idx) => {
                return(<ProjectTag text={item} key={item+idx} />)
            })}
        </div>
      
      </CardBody>
      </a>
    </CardContainer>
  )
}
