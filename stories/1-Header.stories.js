import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HeaderSample from './../components/Header/sample.vue';

export default {
  title: 'Public | 天地/Header',
  component: HeaderSample,
};

export const 範例_header = () => ({
  components: { HeaderSample },
  template: '<header-sample></header-sample>',
});