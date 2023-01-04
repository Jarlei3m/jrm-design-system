import { Box, BoxProps } from '@jarlei-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  
  args: {
    children: (
      <>
        <span>Testing Box element</span>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
