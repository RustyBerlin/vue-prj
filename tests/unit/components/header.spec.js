import { shallowMount } from '@vue/test-utils';
import Component from '../../../components/Header.vue';

describe('Test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Component);
  });

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('check header', () => {
    expect(wrapper.contains('header')).toBe(true);
  });
});
