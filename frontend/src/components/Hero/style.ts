import { CardProps, ImageProps } from "@chakra-ui/react";


export const heroCardStyles: CardProps = {
  direction: { base: 'column', md: 'row' },
  align: "center",
  justify: "space-between",
  overflow: "hidden",
  variant: "outline",
  w: { base: '100%', lg: '90%' },
  mx: "auto",
  shadow: "sm",
  p: "2rem",
  mb: "2rem",
}

export const heroImageStyles: ImageProps = {
  objectFit: "cover",
  maxW: { base: '100%' },
  rounded: "md",
}