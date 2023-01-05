import { Avatar, AvatarProps } from '@jarlei-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  
  args: {
    src: 'https://github.com/Jarlei3m.png',
    alt: 'Jarlei Rodrigues'
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
