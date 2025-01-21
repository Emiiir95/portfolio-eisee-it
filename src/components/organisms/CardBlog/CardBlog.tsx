import { Typography } from "@/components/atoms/Typography/Typography";
import { Rating } from "flowbite-react";
import { ButtonDrawerBlog } from "@/components/atoms/ButtonDrawer";

interface CardBlogProps {
  articleimageUrl: string;
  rating: number;
  author: string;
  date: string;
  title: string;
  description: string;
  href: string;
}

export function CardBlog({
  articleimageUrl,
  description,
  title,
  date,
  href,
  author,
  rating = 1,
}: CardBlogProps) {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-28 sm:pt-48 lg:pt-40">
      <img
        alt="blog"
        src={articleimageUrl}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <Rating>
        {Array.from({ length: rating }, (_, index) => (
          <Rating.Star key={index} />
        ))}
      </Rating>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-700 via-gray-900/40" />
      <Typography customClassName="mr-8 text-sm/6" color="white">
        {date} • {author}
      </Typography>
      <a target="_blank" href={href} className="text-gray-200" rel="noreferrer">
        <Typography
          color="white"
          weight="semibold"
          customClassName="mt-3 text-lg/6"
        >
          {title}
        </Typography>
      </a>
      <ButtonDrawerBlog
        ButtonColor="warning"
        ButtonLabel="Voir le résumé"
        articleAuthor={author}
        articleResume={description}
        articleDate={date}
        articleTitle={title}
      />
    </article>
  );
}
