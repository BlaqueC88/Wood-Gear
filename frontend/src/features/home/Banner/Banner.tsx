"use client";
import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { 
  bannerButtonStyles, 
  bannerHeadingStyles, 
  bannerTextStyles, 
  bannerWrapperStyles 
} from './style';

export default function Banner() {
  return (
    <Stack {...bannerWrapperStyles} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading {...bannerHeadingStyles}>
            Online Shopping <br /> Made Easy 
          </Heading>
          <Text {...bannerTextStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            autem voluptatem iure illo optio obcaecati accusantium fugiat
            dolores tenetur.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button {...bannerButtonStyles}>
              Shop Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Home Image'}
          objectFit={'cover'}
          src={
            "/images/joycoast-wood-watches-sunglasses-o742KAES-So-unsplash.jpg"
          }
        />
      </Flex>
    </Stack>
  );
}
