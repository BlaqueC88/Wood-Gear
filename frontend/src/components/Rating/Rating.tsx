import { Flex, Text } from '@chakra-ui/react';
import ReactStars from "react-stars"
import React from 'react'
import { colors } from '@src/theme';

export const Rating = () => {
  return (
    <Flex>
      <ReactStars
        count={5}
        value={3.5}
        half={true}
        size={18}
        color2={colors.brand.primary}
        edit={false}
      />
      <Text fontSize="xs" mx="1">
        ({200})
      </Text>
    </Flex>
  )
}
