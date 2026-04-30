import React, { useState } from 'react';

type Book = {
  title: string;
  year: number;
  author: string;
  description: string;
  read: boolean;
};

const techBooks: Book[] = [
  {
    title: 'Inspired: How to Create Tech Products Customers Love',
    year: 2008,
    author: 'Marty Cagan',
    description:
      'How to structure and staff a vibrant product organization, and how to discover and deliver technology products that customers will love.',
    read: false,
  },
  {
    title: 'Good Strategy Bad Strategy: The Difference and Why It Matters',
    year: 2011,
    author: 'Richard P. Rumelt',
    description:
      'Explains how to create effective business strategies by distinguishing between good strategies that harness power effectively and bad strategies filled with buzzwords, using real-world examples.',
    read: true,
  },
  {
    title: 'The Design of Everyday Things',
    year: 1988,
    author: 'Don Norman',
    description:
      'A guide on designing intuitive products that prioritize usability and leverage principles of cognitive psychology for effortless user experiences.',
    read: false,
  },
  {
    title: 'Continuous Discovery Habits',
    year: 2021,
    author: 'Teresa Torres',
    description:
      'A structured approach to product discovery that helps teams balance action with doubt while making customer-focused decisions that create both business and customer value.',
    read: false,
  },
];

const otherBooks: Book[] = [
  {
    title: 'The Silent Patient',
    year: 2025,
    author: 'Alex Michaelides',
    description:
      'A psychological thriller centered on a woman who stops speaking after a violent crime and the therapist obsessed with uncovering why.',
    read: true,
  },
  {
    title: 'Verity',
    year: 2018,
    author: 'Colleen Hoover',
    description:
      'A psychological thriller about a struggling writer hired to finish a bestselling series for injured author Verity Crawford — with dark secrets hidden in the manuscript.',
    read: true,
  },
  {
    title: 'Norwegian Wood',
    year: 1987,
    author: 'Haruki Murakami',
    description:
      'A nostalgic coming-of-age novel following college student Toru Watanabe as he navigates love, loss, and memory in late 1960s Tokyo.',
    read: true,
  },
  {
    title: 'The Things You Can See Only When You Slow Down',
    year: 2018,
    author: 'Haemin Sunim',
    description:
      'A guide through the busier parts of life, encouraging calm, peace, and inner reflection for a more intentional existence.',
    read: true,
  },
  {
    title: 'The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery',
    year: 2020,
    author: 'Brianna Wiest',
    description:
      'Explores how self-sabotage arises from conflicts between conscious goals and unconscious needs, guiding readers to transform destructive patterns into self-mastery.',
    read: true,
  },
  {
    title: 'Untamed',
    year: 2020,
    author: 'Glennon Doyle',
    description:
      'Glennon Doyle shares her journey from living to please others to embracing her authentic self after falling in love unexpectedly and navigating divorce.',
    read: false,
  },
];

export default function Books() {
  const [tab, setTab] = useState<'tech' | 'other'>('tech');
  const list = tab === 'tech' ? techBooks : otherBooks;

  return (
    <div className="animate-in fade-in duration-700">
      <h1 className="font-serif text-[56px] md:text-[72px] leading-none text-foreground mb-6">
        Books.
      </h1>

      <p className="font-sans text-[16px] md:text-[18px] text-muted-foreground max-w-2xl mb-10 leading-relaxed">
        A shelf of books that have shaped how I think about product, people, and life.
      </p>

      {/* Toggle pills */}
      <div className="flex gap-3 mb-12">
        <button
          onClick={() => setTab('tech')}
          className={`rounded-full px-6 py-2 font-sans text-[12px] uppercase tracking-widest border transition-colors ${
            tab === 'tech'
              ? 'bg-foreground text-background border-foreground'
              : 'bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background'
          }`}
        >
          TECH
        </button>
        <button
          onClick={() => setTab('other')}
          className={`rounded-full px-6 py-2 font-sans text-[12px] uppercase tracking-widest border transition-colors ${
            tab === 'other'
              ? 'bg-foreground text-background border-foreground'
              : 'bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background'
          }`}
        >
          OTHER
        </button>
      </div>

      {/* Book list */}
      <div className="flex flex-col">
        <div className="w-full h-px bg-border" />
        {list.map((book, i) => (
          <div key={`${tab}-${i}`}>
            <div className="py-10 flex flex-col gap-3">
              <div className="flex justify-between items-start gap-6">
                <h2 className="font-serif text-[20px] md:text-[22px] text-foreground leading-snug">
                  {book.title}
                </h2>
                <span className="font-sans text-[13px] uppercase tracking-widest text-muted-foreground shrink-0 mt-1">
                  {book.year}
                </span>
              </div>

              <p className="font-sans italic text-[13px] text-muted-foreground">
                {book.author}
              </p>

              <p className="font-sans text-[14px] leading-relaxed text-muted-foreground max-w-3xl">
                {book.description}
              </p>

              {/* Progress bar */}
              <div className="mt-3 max-w-md">
                <div className="w-full h-[3px] bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-500"
                    style={{ width: book.read ? '100%' : '0%' }}
                  />
                </div>
                <p className="font-sans text-[11px] uppercase tracking-widest text-muted-foreground mt-2">
                  {book.read ? 'Read' : 'Yet to read'}
                </p>
              </div>
            </div>
            <div className="w-full h-px bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}
