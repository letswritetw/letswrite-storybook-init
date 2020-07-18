import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import FooterSample from './../components/Footer/sample.vue';

export default {
  title: 'Footer',
  component: FooterSample,
};

export const 範例_footer = () => ({
  components: { FooterSample },
  template: '<footer-sample></footer-sample>',
});