import Link from "next/link";
// import Image from "next/image";

export default function About() {
  return (
    <div className="mt-16 md:px-10 lg:px-30 xl:px-60 2xl:px-80">
      <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-200 w-full text-center">About</h1>

      <div className="mt-8">
        <p className="paragraph mb-4">
        Thanks for stopping by!
        </p>

        <p className="paragraph mb-4">
        I&apos;m Sophie, a student at UC Irvine studying computer science.
        In my free time, I enjoy coding, art & design, music (playing and listening), table tennis, and writing.
        </p>

        <p className="paragraph mb-4">
        Previously, I <Link href="https://www.techknowhowkids.com/" target="_blank" className="hyperlink">taught kids to build cool tech</Link> and designed promotional content for the <Link href="https://ucidesignathon.devpost.com/" target="_blank" className="hyperlink">largest collegiate design hackathon in SoCal</Link>.
        </p>

        <p className="paragraph mb-4">
        Feel free to reach out; I would love to chat with you!
        </p>
    </div>

      {/* <div className="grid grid-cols-2 gap-8 mt-8">
        <Image
        src="/square.png"
        alt="Profile photo"
        width={100}
        height={100}
        className="h-100 w-full object-cover col-span-2 lg:col-span-1 right-0 justify-self-center lg:justify-self-end"
        />
        <div className="col-span-2 lg:col-span-1">
          <p className="paragraph mb-4">
            Thanks for stopping by!
          </p>

          <p className="paragraph mb-4">
            I&apos;m Sophie, a student at UC Irvine studying computer science.
            In my free time, I enjoy coding, art & design, music (playing and listening), table tennis, and writing.
          </p>

          <p className="paragraph mb-4">
            Previously, I <Link href="https://www.techknowhowkids.com/" target="_blank" className="hyperlink">taught kids to build cool tech</Link> and designed promotional content for the <Link href="https://ucidesignathon.devpost.com/" target="_blank" className="hyperlink">largest collegiate design hackathon in SoCal</Link>.
          </p>

          <p className="paragraph mb-4">
            Feel free to reach out; I would love to chat with you!
          </p>
        </div>
      </div> */}
    </div>
  );
}
