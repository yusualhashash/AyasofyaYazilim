import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ForgotPasswordForm from './ForgotPasswordForm';

export default {
  component: ForgotPasswordForm,
  argTypes: {},
} as Meta<typeof ForgotPasswordForm>;

const Template: StoryFn = (args) => (
  <ForgotPasswordForm {...args} />
);

export const ForgetPasswordPage = Template.bind({});
ForgetPasswordPage.args = {};


