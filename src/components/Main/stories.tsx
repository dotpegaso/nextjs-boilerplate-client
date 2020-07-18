import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
}

export const Basic = () => (
  <Main
    title={text('Title', 'Storybook Avançado')}
    description={text('Description', 'Com knobs e muito mais')}
  />
)
