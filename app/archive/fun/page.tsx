import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Fun() {
  const media = [
    {
      'type': 'Artistic',
      'collection': [
        'Composition VIII (1923)',
        'Inmensa (1982-2002)',
        'The Weather Project (2003)',
        'View of Delft (1660-61)',
        'Waterway (1997)',
        'Sistine Chapel',
      ]
    }, {
      'type': 'Literary',
      'collection': [
        'To Live',
        'Norwegian Wood',
        'The Martian',
        'Invisible Cities',
        'Logicomix'
      ]
    }, {
      'type': 'Strategic',
      'collection': [
        'Word Grid',
        'Minesweeper',
        'Set with Friends',
        'Connections',
        'Card Games',
        'Chess'
      ]
    }
  ]

  return (
    <div className="mt-16 w-full justify-start self-start md:px-10 xl:px-20 2xl:px-40">
      <Link href="/archive">
        <Button variant="outline" size="sm" className="mb-8 hover:cursor-pointer">
          <IconArrowLeft />
          Back to archive
        </Button>
      </Link>

      <h1 className="text-2xl font-semibold">Fun</h1>
      <p className="paragraph italic mb-4">A small collection of things I enjoy.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {media.map(items => 
          <section
            className="col-span-1 px-12 py-8 rounded-md
            border border-zinc-300 dark:border-zinc-700
            hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
            key={items.type}
          >
            <h2 className="font-serif text-2xl">{items.type}</h2>
            <ul className="list-disc paragraph mt-2">
              {items.collection.map(element =>
                <li key={element}>{element}</li>
              )}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
