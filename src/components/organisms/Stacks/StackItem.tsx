import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ConditionalLink } from '@/components/atoms/ConditionalLink';
import { Typography } from '@/components/atoms/Typography';

export interface StackItemProps {
  category?: string;
  image: string;
  alt: string;
  title: string;
  link?: string;
  grayscale?: boolean;
}

export const StackItem = ({ link, title, alt, image, grayscale }: StackItemProps) => {
  return (
    <ConditionalLink link={link}>
      <div
        className={clsx(
          'inline-block min-w-[110px] rounded-xl border border-gray-200/50 bg-white px-2 py-6 text-center shadow-[0px_3px_0px_0px] shadow-gray-200 md:min-w-[120px]',
          [link && 'duration-300 ease-in hover:shadow-md']
        )}
      >
        <Image
          src={image}
          alt={alt}
          height={40}
          width={40}
          className={clsx('mb-2 inline-block h-10 w-10 object-contain', grayscale && 'opacity-50 grayscale')}
        />
        <Typography weight="bold">
          <strong>{title}</strong>
        </Typography>
      </div>
    </ConditionalLink>
  );
};
