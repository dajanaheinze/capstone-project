import React from 'react'
import TutorialPage from './TutorialPage'

export default {
  title: 'Components/Tutorial Page',
  component: TutorialPage,
}

const Template = (args) => <TutorialPage {...args} />

export const Primary = Template.bind({})
