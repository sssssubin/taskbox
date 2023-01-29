import { within, userEvent } from '@storybook/testing-library';
import MyPage from './Page.vue';

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },

  // Here we define the `template`
  template: '<my-page />',
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
LoggedIn.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/yWZkCEF0vsCVGUGe02h1Ln/component-sample?node-id=2%3A213&t=ZxtmsiOxqjmAjvkt-1",
  },
};