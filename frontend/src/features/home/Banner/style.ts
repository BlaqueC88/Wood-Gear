import { ButtonProps, HeadingProps, StackProps, TextProps } from "@chakra-ui/react";

export const bannerWrapperStyles: StackProps = {
  minH: '100vh', 
  direction: { base: 'column', md: 'row' }
}

export const bannerHeadingStyles: HeadingProps = {
  size: { base: 'xl', lg: '3xl' },
  lineHeight: "4rem",
  color: "brand.primary"
}

export const bannerTextStyles: TextProps = {
  fontSize: { base: 'md', lg: 'lg' },
  py: "1rem", 
  maxW: "600px"
}

export const bannerButtonStyles: ButtonProps = {
  rounded: 'full',
  minW: "10rem",
  bg: "brand.primary",
  color: 'white',
  _hover: {bg: 'brand.primaryLight'}
}
