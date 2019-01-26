import { shallowMount } from '@vue/test-utils'
import Component from '../../components/Headline.vue'

describe('Headline', () => {
  let wrapper

  let headline = 'Headline'

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        headline: headline
      },
    }, {})
  })

  test('snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('check headline tag and text', () => {
    expect(wrapper.find('h1').text()).toBe(headline)
  })
})
