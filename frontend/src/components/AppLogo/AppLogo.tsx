import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image 
        src="/images/Logo.jpg" 
        alt="app-logo" 
        w="5rem"
        h="5rem"
      />
    </Link>
  )
}
