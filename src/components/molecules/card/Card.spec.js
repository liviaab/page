import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card.jsx'

describe("Card component", () => {
  let card

  it('renders children content', () => {
      card = shallow(<Card width={100}>My content</Card>)

      expect(card.text()).toEqual("My content")
  })

  it("has the same width and height if the square option is passed", () => {
    card = shallow(<Card width={200} height={300} square>Square card</Card>)

    expect(card.text()).toEqual("Square card")
    expect(card.prop('style').width).toEqual("200px")
    expect(card.prop('style').height).toEqual("200px")
  })
})
