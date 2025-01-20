import { Typography } from "@/components/atoms/Typography/Typography";
import { Rating } from "flowbite-react";
import { Select } from "../Select";
import { Button } from "@mui/material";

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  rating: number;
  author: string;
}

interface BlogProps {
  posts: Post[];
}

export function Blog({ posts }: BlogProps) {
  return (
    <div className="mx-auto mt-10 md:mt-40 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Typography animated variant="componentTitle">
          Quels sont les <span className="text-[#31e481]">impact</span> du{" "}
          <span className="text-[#c031e4]">no-code</span> sur le metier de{" "}
          <span className="text-[#027BFF]">developpeur ?</span>
        </Typography>
        <div className="border-t-4 w-[full] mb-12 animate-shake animate-infinite animate-duration-[4000ms]" />
      </div>
      <div className="flex md:flex-row flex-col w-full items-center justify-center gap-10">
        <Select
          label="Filtrer par date"
          options={["Tous", "La plus récente", "La plus ancienne"]}
        />
        <Select
          label="Trier par note"
          options={["Par default", "La plus haute ", "La plus basse"]}
        />
        <Select
          label="Filtrer par source"
          options={["Tous", "Newsletter", "Youtube"]}
        />
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-28 sm:pt-48 lg:pt-40"
          >
            <img
              alt="blog"
              src={post.imageUrl}
              className="absolute inset-0 -z-10 size-full object-cover"
            />
            <div>
              <Rating>
                {Array.from({ length: post.rating }, (_, index) => (
                  <Rating.Star key={index} />
                ))}
              </Rating>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-700 via-gray-900/40" />
            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-white">
              <div className="mr-8 flex items-center gap-x-4">
                <div className="flex gap-x-2.5">
                  {post.date} • {post.author}
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg/6 font-semibold text-white">
              <a
                target="_blank"
                href={post.href}
                className="text-gray-200"
                rel="noreferrer"
              >
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <Button variant="outlined" className="mt-2" color="warning">
              Voir le résumé
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
