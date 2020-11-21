import React from 'react'
import TutorialTemplate from './TutorialTemplate'

export default {
  title: 'Components/Tutorial Template',
  component: TutorialTemplate,
}

const Template = (args) => <TutorialTemplate {...args} />

export const Primary = Template.bind({})
