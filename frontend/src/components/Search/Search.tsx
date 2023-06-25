import React from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import { inputGroup, searchInputStyles } from './style';

export const Search = () => {
  return (
    <Box>
      <InputGroup {...inputGroup}>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' />
        </InputLeftElement>
        <Input 
          {...searchInputStyles}
        />
      </InputGroup>
    </Box>
  )
}
