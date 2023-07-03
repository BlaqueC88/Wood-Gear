import { Box, Card, CardBody, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { productCardStyles } from './style'
import { Rating } from '../Rating/Rating'
import { AddToCartButton } from '../Cart/AddToCartButton'
import { IProduct } from '@src/model'
import { getSubstring } from '@src/helpers'
import { AddToWishlistButton } from '../AddToWishlistButton/AddToWishlistButton'
import Link from 'next/link'

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card {...productCardStyles}>
      <CardBody>
        <AddToWishlistButton product={product} />
        <Link href={`/products/${product.slug}`}>
          <Box
            bg={`center / contain no-repeat url(${product.mainImage})`}
            borderRadius="lg"
            boxSize="200px"
            mx="auto"
          />
        </Link>
        <Stack mt='6' spacing='3'>
          <Flex justify="space-between" align="center">
            <Link href={`/products/${product.slug}`}>
              <Heading size='sm'>{getSubstring(product.name, 20)}</Heading>
            </Link>
            <Flex color="brand.primaryDark" fontWeight="bold">
              <Text fontSize="sm">R </Text>
              <Text fontSize="lg">{product.price}</Text>
            </Flex>
          </Flex>
          <Text fontSize="sm">
            {getSubstring(product.description, 30)}
          </Text>
          <Rating rating={product.rating} />

          <AddToCartButton product={product} />
        </Stack>
      </CardBody>
    </Card>
  )
}
