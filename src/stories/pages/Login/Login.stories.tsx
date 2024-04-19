import React from 'react';
import { View, Image } from 'react-native';
import { StoryFn, Meta } from '@storybook/react';
import  Login from './Login';

export default {
  component: Login,
  argTypes: {},
} as Meta<typeof Login>;

const Template: StoryFn<typeof Login> = (args) => (
    <Login {...args} />
);

export const LoginPage = Template.bind({});
LoginPage.args = {

};
