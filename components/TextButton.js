import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../utils/helper'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[globalStyles.textButton, style]}>{children}</Text>
    </TouchableOpacity>
  )
}
