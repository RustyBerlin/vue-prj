import { shallowMount } from '@vue/test-utils';
import Component from '../../../components/Headline.vue';

describe('Test', () => {
  let wrapper;
  const headline = 'Headline';

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        headline,
      },
    });
  });

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('check headline element and text', () => {
    expect(wrapper.find('h1').text()).toBe(headline);
  });
});
