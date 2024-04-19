import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['./src/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls', 
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
  ],
};

export default main;



