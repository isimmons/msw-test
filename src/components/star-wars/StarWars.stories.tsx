import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import StarWars from './StarWars';

const swapiPeople = [
  { name: 'Fred Sandford' },
  { name: 'Spongebob' },
  { name: 'Some Foo' },
];

const meta: Meta<typeof StarWars> = {
  title: 'Components/StarWars',
  component: StarWars,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MockedSuccess: Story = {
  render: StarWars,
  parameters: {
    msw: {
      handlers: [
        rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
          return res(
            ctx.json({
              results: swapiPeople,
            })
          );
        }),
      ],
    },
  },
};
export const MockedError: Story = {
  render: StarWars,
  parameters: {
    msw: {
      handlers: [
        rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
          return res(ctx.delay(800), ctx.status(500));
        }),
      ],
    },
  },
};

export const MockedForeverLoading: Story = {
  render: StarWars,
  parameters: {
    msw: {
      handlers: [
        rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
          return res(ctx.delay('infinite'));
        }),
      ],
    },
  },
};

// export const Loading: Story = {};
