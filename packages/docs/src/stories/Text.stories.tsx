import { Text, TextProps } from '@jarlei-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere nihil natus esse quisquam dicta minus aperiam laboriosam magni totam culpa optio repudiandae neque, ullam nisi ex vitae! Dolor, assumenda.'
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
