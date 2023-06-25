"use client"

import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { SectionHeading } from '@src/components/SectionHeading/SectionHeading'
import React from 'react'
import { cardStyles, categoriesWrapperStyles } from './style'

export const TopCategories = () => {
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
        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>
      </Grid>
    </Box>
  )
};

const TopCategoryCard = () => {
  return (
    <Card {...cardStyles}>
      <Image 
        src="/images/c9e5ebabf7e8c5041847f3938eb7ac38.jpg"
        alt=""
        height={100}
        width={100}
      />

      <CardBody>
        <Heading size={{ base: 'sm', lg: 'md' }}>
          Watches
        </Heading>
      </CardBody>
    </Card>
  )
}
