import { Text, TextProps } from '@jarlei-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut facere nihil natus esse quisquam dicta minus aperiam laboriosam magni totam culpa optio repudiandae neque, ullam nisi ex vitae! Dolor, assumenda.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: [
      'xxs',
      'xs' ,
      'sm' ,
      'md' ,
      'lg' ,
      'xl' ,
      '2xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl'
    ],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
