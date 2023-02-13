import React from 'react'
import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import BvIcon from './index'

describe('BeviIcon', () => {
  test('BvIcon component renders correctly', () => {
    const component = renderer.create(
      <BvIcon name='' />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('The greetee prop works', () => {
    const component = renderer.create(
      <BvIcon name={'eco'} />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})