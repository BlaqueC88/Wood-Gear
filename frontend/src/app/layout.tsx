'use client';

import 'swiper/swiper.min.css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from '@src/components/Navbar/Navbar';
import { theme } from '@src/theme'
import { Footer } from '@src/components/Footer/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Wood Gear</title>
        <meta 
          name="description" content="Wood products for the home, office and person." 
        />
        <link rel="shortcut icon" href="/images/Logo.jpg" type="image/jpg" />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
