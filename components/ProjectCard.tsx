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
        dark:border-zinc-300/20 border-zinc-900/20
        w-[84vw] md:w-[36vw] lg:w-[32vw] h-auto rounded-xl p-6 border
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
            className="text-xl font-bold text-zinc-700 dark:text-zinc-200 mt-4"
        >
            {projectName}
        </CardItem>

        <CardItem
            as="p"
            className="text-zinc-500 dark:text-zinc-300 text-sm max-w-sm mt-2"
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
