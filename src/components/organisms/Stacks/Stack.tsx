import clsx from 'clsx';
import React from 'react';

import { Typography } from '@/components/atoms/Typography';

import { StackItem, StackItemProps } from './StackItem';

export type StackProps = {
  items: StackItemProps[];
  stackTitle?: string;
  horizontal?: boolean;
};

export const Stack = ({ items, stackTitle, horizontal }: StackProps) => {
  return (
    <div className={clsx('flex p-2', [horizontal && 'flex-row', !horizontal && ' max-w-[150px] flex-col text-center'])}>
      <div className={clsx('my-2', horizontal && 'sm:rotate-360 w-36 self-center')}>
        <Typography weight="medium" variant="h3">
          {stackTitle}
        </Typography>
      </div>
      <div className={clsx('mt-2 flex gap-4', [horizontal && 'flex-row', !horizontal && 'flex-col'])}>
        {items &&
          items.map((item, index) => (
            <StackItem
              key={index}
              image={item.image}
              title={item.title}
              alt={item.alt}
              link={item.link}
              grayscale={item.grayscale}
            />
          ))}
      </div>
    </div>
  );
};
