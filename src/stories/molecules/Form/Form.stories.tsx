import { View } from 'react-native';
import type { Meta,StoryFn} from '@storybook/react';
import {MyForm} from './Form';




export default {
  component: MyForm,
  argTypes: {
  },
} as Meta<typeof MyForm>;

const Template: StoryFn<typeof MyForm> = (args) => (
  <MyForm {...args} />
);

export const FormPage = Template.bind({});
FormPage.args = {
};

