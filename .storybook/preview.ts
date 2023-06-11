import type { Preview } from '@storybook/react';
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize({
  onUnhandledRequest: ({ method, url }) =>
    console.log('msw-request:  ', method, url),
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
  // decorators: [mswDecorator],
};

export default preview;
