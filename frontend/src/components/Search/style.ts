import { InputGroupProps, InputProps } from "@chakra-ui/react";

export const inputGroup: InputGroupProps = {
  w: { base: '100%', lg: '32rem' },
  size: 'sm',
};

export const searchInputStyles: InputProps = {
  type: 'text', 
  placeholder: 'Search...',
  focusBorderColor: "brand.primaryLight", 
  borderWidth: "1px",
  borderColor: "gray.400",
  borderRadius: "full",
}