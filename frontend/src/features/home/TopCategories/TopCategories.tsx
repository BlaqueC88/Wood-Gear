"use client"

import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { SectionHeading } from '@src/components/SectionHeading/SectionHeading'
import React from 'react'
import { cardStyles, categoriesWrapperStyles } from './style'
import { ICategory } from '@src/model'

interface TopCategoriesProps {
  categories: ICategory[];
}

export const TopCategories = ({ categories }: TopCategoriesProps) => {
  return (
    <Box {...categoriesWrapperStyles}>
      <SectionHeading title={"Our Top Categories"} />

      <Grid 
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap="4"
      >
        {categories.map((category) => (
          <GridItem key={category.id}>
            <TopCategoryCard category={category} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
};

interface TopCategoryCardProps {
  category: ICategory;
}

const TopCategoryCard = ({ category }: TopCategoryCardProps) => {
  return (
    <Card {...cardStyles}>
      <Image 
        src={category.image}
        alt={category.name}
        height={100}
        width={100}
      />

      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>
          {category.name}
        </Heading>
      </CardBody>
    </Card>
  )
}
