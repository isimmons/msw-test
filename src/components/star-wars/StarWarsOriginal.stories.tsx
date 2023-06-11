import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

import StarWarsOriginal from './StarWarsOriginal';

const swapiPeople = {
  results: [
    { name: 'Fred Sandford' },
    { name: 'Spongebob' },
    { name: 'Some Foo' },
  ],
};

const meta: Meta<typeof StarWarsOriginal> = {
  title: 'Components/StarWarsOriginal',
  component: StarWarsOriginal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get('https://swapi.dev/api/people', (_req, res, ctx) => {
          return res(
            ctx.json({
              results: swapiPeople.results,
            })
          );
        }),
      ],
    },
  },
};

export const MockedError: Story = {
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
