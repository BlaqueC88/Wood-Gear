import { Button } from '@chakra-ui/react'
import React from 'react'
import { cartButtonStyles } from './style'

export const AddToCartButton = () => {
  return (
    <Button {...cartButtonStyles}>
      Add to cart
    </Button>
  )
}
