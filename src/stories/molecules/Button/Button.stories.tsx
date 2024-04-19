
import type { Meta, StoryFn } from '@storybook/react';
import { MyButton } from './Button';


export default {
  component: MyButton,
  argTypes: {
  },
} as Meta<typeof MyButton>;

const Template: StoryFn<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const ButtonPage = Template.bind({});
ButtonPage.args = {
  text: 'Button', 
};
