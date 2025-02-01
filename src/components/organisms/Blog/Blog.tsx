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
  source: string;
}

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  const [filterDate, setFilterDate] = useState("Tous");
  const [sortRating, setSortRating] = useState("Par default");
  const [filterSource, setFilterSource] = useState("Tous");

  const filteredAndSortedPosts = posts
    .filter((post) => {
      if (
        filterSource === "Google Alerts" &&
        (!post.source || !post.source.includes("Google Alerts"))
      )
        return false;
      if (
        filterSource === "Newsletter" &&
        (!post.source || !post.source.includes("Newsletter"))
      )
        return false;
      if (
        filterSource === "Feedly" &&
        (!post.source || !post.source.includes("Feedly"))
      )
        return false;

      return true;
    })
    .sort((a, b) => {
      if (filterDate === "Plus récent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (filterDate === "Plus ancien") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
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
          Quels sont les <span className="text-[#31e481]">impacts</span> de{" "}
          <span className="text-[#c031e4]">l&apos;IA</span> et du{" "}
          <span className="text-[#c031e4]">no-code</span> sur le métier de{" "}
          <span className="text-[#027BFF]">développeur ?</span>
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
        <Select
          onChange={(e) => setFilterSource(e.target.value)}
          label="Filtrer par source"
          options={["Tous", "Google Alerts", "Newsletter", "Feedly"]}
        />
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
