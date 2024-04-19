import { Meta, StoryFn } from '@storybook/react';
import Avatar from './Avatar';

export default {
    component: Avatar,
    argTypes: {},

} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarPage = Template.bind({});
AvatarPage.args = {
    url: 'https://via.placeholder.com/150',
    text: 'Avatar',
};
