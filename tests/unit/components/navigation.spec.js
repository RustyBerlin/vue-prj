import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Component from '../../../components/Navigation.vue'

const $route = {
  path: '/'
}

describe('Test', () => {
  let wrapper
  const localVue = createLocalVue();
  localVue.component('router-link', RouterLinkStub);

  beforeEach(() => {
    wrapper = mount(Component, {
      mocks: {
        $route
      },
      localVue,
    })
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('check nav', () => {
    expect(wrapper.contains('nav ul li')).toBe(true)
    expect(wrapper.contains('nav div.ham')).toBe(true)
  })

  test('check hamburger click', () => {
    expect(wrapper.contains('ul.hide')).not.toBe(true)
    wrapper.find('div.ham').trigger('click')
    expect(wrapper.contains('ul.hide')).toBe(true)
  })

  test('check active link', () => {
    expect(wrapper.contains('nav ul li.active')).toBe(true)
  })
})
