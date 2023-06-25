import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { AppLogo } from '../AppLogo/AppLogo'
import { mobileNavContainer, mobileSearchWrapper } from './style'
import { Search } from '../Search/Search'

export const MobileNav = () => {
  return (
    <Box >
      <Flex {...mobileNavContainer} >
        <Box>Nav Menu</Box>
        <AppLogo />

        <Stack direction="row" spacing={1}>
          <Text>Wishlist</Text>
          <Text>Cart</Text>
        </Stack>
      </Flex>
      <Box {...mobileSearchWrapper}>
        <Search />
      </Box>
    </Box>
  )
}
