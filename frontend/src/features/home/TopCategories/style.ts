import { BoxProps, CardProps } from "@chakra-ui/react";


export const categoriesWrapperStyles: BoxProps = {
  w: { base: '100%', lg: '90%' }, 
  mx: "auto", 
  py: "3rem", 
  px: "2rem",
}

export const cardStyles: CardProps = {
  direction: "row",
  align: "center",
  overflow: "hidden",
  variant: "outline",
  w: "100%",
  p: "10px",
  h: "100%",
  _hover: { cursor: 'pointer', bgColor: 'gray.100' },
}