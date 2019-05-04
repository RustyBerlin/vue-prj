import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import Component from '../../../components/Footer.vue';

describe('Test', () => {
  let wrapper;
  const localVue = createLocalVue();
  localVue.component('router-link', RouterLinkStub);

  beforeEach(() => {
    wrapper = mount(Component, {
      localVue,
    });
  });

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('check html elements', () => {
    const htmlElements = [
      'footer',
      'ul',
      'li',
      'a',
    ]

    htmlElements.forEach(element => {
      expect(wrapper.contains(element)).toBe(true);
    });
  });
});
