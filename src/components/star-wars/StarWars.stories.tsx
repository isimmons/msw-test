import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import StarWars from './StarWars';
import { BASE_URL } from '../../hooks/useStarWars';

const swapiPeople = {
  results: [
    { name: 'Fred Sandford' },
    { name: 'Spongebob' },
    { name: 'Some Foo' },
  ],
};

const meta: Meta<typeof StarWars> = {
  title: 'Components/StarWars',
  component: StarWars,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [rest.get(BASE_URL, (_req, res, ctx) => res(ctx.status(500)))],
    },
  },
};

export const Loading: Story = {};
