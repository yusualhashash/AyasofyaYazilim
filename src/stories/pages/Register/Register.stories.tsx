import React from 'react';
import { View } from 'react-native';
import { StoryFn, Meta } from '@storybook/react';
import Register from './Register';

export default {
  component: Register,
  argTypes: {},
} as Meta<typeof Register>;


const Template: StoryFn = (args) => (
    <Register {...args} />
);

export const RegisterPage = Template.bind({});

RegisterPage.args = {};
