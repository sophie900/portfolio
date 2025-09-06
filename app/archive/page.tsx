import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-16 w-full md:px-10 xl:px-20 2xl:px-40">
      <h1 className="text-2xl font-semibold">Archive</h1>
      <p className="paragraph italic">An archive of auxilliary pursuits.</p>

      <p className="paragraph mt-8">
        Under construction. For now, check out my <Link href="/archive/fun" className="hyperlink">fun page</Link>.
      </p>
    </div>
  );
}
