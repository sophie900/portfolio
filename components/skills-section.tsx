import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "./ui/accordion"

const SkillsSection = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-4 px-10 lg:px-20"
      defaultValue="languages"
    >
      <AccordionItem value="languages">
        <AccordionTrigger>Languages</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Python, JavaScript, TypeScript, SQL, HTML/CSS, LaTeX
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="frameworks">
        <AccordionTrigger>Frameworks/Libraries</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            React, Next.js, Tailwind CSS, FastAPI, SQLite
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="software">
        <AccordionTrigger>Software</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Git, Adobe Creative Suite (Illustrator, Photoshop, Premiere Pro), Figma
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="languages-spoken">
        <AccordionTrigger>Languages (Spoken)</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            English, Mandarin Chinese, Spanish
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default SkillsSection;
