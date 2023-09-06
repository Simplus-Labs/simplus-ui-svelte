import type { Meta, StoryObj } from '@storybook/svelte';
import Logo from '../lib/components/Logo.svelte';

const meta = {
	title: 'Example/Logo',
	component: Logo,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
		layout: 'fullscreen'
	}
} satisfies Meta<Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
	args: {
		colorFrom: '#FEB751',
		colorTo: '#FF3F4A',
		height: 32,
		width: 124
	},
	argTypes: {
		colorFrom: { control: 'color' },
		colorTo: { control: 'color' },
		height: { control: 'number' },
		width: { control: 'number' }
	}
};

export const LoggedOut: Story = {};
