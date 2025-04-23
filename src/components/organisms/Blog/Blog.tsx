import { Typography } from "@/components/atoms/Typography/Typography";
import { Select } from "../Select";
import { useState } from "react";
import { CardBlog } from "../CardBlog";

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  rating: number;
  author: string;
  // source: string;
}

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  const [filterDate, setFilterDate] = useState("Tous");
  const [sortRating, setSortRating] = useState("Par default");
  // const [filterSource, setFilterSource] = useState("Tous");

  const parseFrenchDate = (dateStr: string) => {
    const parts = dateStr.split(" ");

    if (parts.length !== 3) {
      console.error("Format de date incorrect:", dateStr);
      return new Date(0);
    }

    const day = parseInt(parts[0], 10);

    const monthMap: { [key: string]: number } = {
      janvier: 0,
      février: 1,
      mars: 2,
      avril: 3,
      mai: 4,
      juin: 5,
      juillet: 6,
      août: 7,
      septembre: 8,
      octobre: 9,
      novembre: 10,
      décembre: 11,
      // Versions avec première lettre en majuscule
      Janvier: 0,
      Février: 1,
      Mars: 2,
      Avril: 3,
      Mai: 4,
      Juin: 5,
      Juillet: 6,
      Août: 7,
      Septembre: 8,
      Octobre: 9,
      Novembre: 10,
      Décembre: 11,
    };

    const month = monthMap[parts[1]];
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || month === undefined || isNaN(year)) {
      console.error("Impossible de parser la date:", dateStr);
      return new Date(0);
    }

    return new Date(year, month, day);
  };

  const filteredAndSortedPosts = posts
    // .filter((post) => {
    //   if (
    //     filterSource === "Google Alerts" &&
    //     (!post.source || !post.source.includes("Google Alerts"))
    //   )
    //     return false;
    //   if (
    //     filterSource === "Developpez.com" &&
    //     (!post.source || !post.source.includes("Developpez.com"))
    //   )
    //     return false;

    //   return true;
    // })
    .sort((a, b) => {
      if (filterDate === "Plus récent") {
        return (
          parseFrenchDate(b.date).getTime() - parseFrenchDate(a.date).getTime()
        );
      }
      if (filterDate === "Plus ancien") {
        return (
          parseFrenchDate(a.date).getTime() - parseFrenchDate(b.date).getTime()
        );
      }
      if (sortRating === "La plus haute") {
        return b.rating - a.rating;
      }
      if (sortRating === "La plus basse") {
        return a.rating - b.rating;
      }
      return 0;
    });

  return (
    <div className="mx-auto mt-10 md:mt-40 max-w-7xl px-6 lg:px-8 min-h-screen">
      <div className="mx-auto max-w-2xl text-center">
        <Typography animated variant="componentTitle">
          Les <span className="text-[#31e481]">impacts</span> de{" "}
          <span className="text-[#c031e4]">l&apos;IA</span> sur le métier de{" "}
          <span className="text-[#027BFF]">développeur</span>
        </Typography>
        <div className="border-t-4 w-[full] mb-12 animate-shake animate-infinite animate-duration-[4000ms]" />
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-10">
        <Select
          value={filterDate}
          onChange={(e) => {
            setSortRating("Par default");
            setFilterDate(e.target.value);
          }}
          label="Trier par date"
          options={["Tous", "Plus récent", "Plus ancien"]}
        />
        {/* <Select
          onChange={(e) => setFilterSource(e.target.value)}
          label="Filtrer par source"
          options={["Tous", "Google Alerts", "Developpez.com"]}
        /> */}
        <Select
          value={sortRating}
          onChange={(e) => {
            setFilterDate("Tous");
            setSortRating(e.target.value);
          }}
          label="Trier par note"
          options={["Par default", "La plus haute", "La plus basse"]}
        />
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {filteredAndSortedPosts.map((post) => (
          <CardBlog
            key={post.id}
            articleimageUrl={post.imageUrl}
            author={post.author}
            date={post.date}
            description={post.description}
            href={post.href}
            rating={post.rating}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}
