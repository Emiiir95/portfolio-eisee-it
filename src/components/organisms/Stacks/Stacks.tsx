import clsx from 'clsx';
import React from 'react';

import { Stack, StackProps } from './Stack';

export type StacksProps = {
  items: StackProps[];
  horizontal?: boolean;
};

export const Stacks = ({ items, horizontal }: StacksProps) => {
  return (
    <div className={clsx('flex flex-wrap place-content-center gap-6', [horizontal && 'md:flex-col'])}>
      {items.map((item, index) => (
        <Stack key={index} stackTitle={item.stackTitle} items={item.items} horizontal={horizontal} />
      ))}
    </div>
  );
};
