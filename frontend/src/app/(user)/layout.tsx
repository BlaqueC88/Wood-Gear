'use client';

import 'swiper/swiper.min.css';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from '@src/components/Navbar/Navbar';
import { theme } from '@src/theme'
import { Footer } from '@src/components/Footer/Footer';
import { AppContextProvider } from '@src/context/AppContext';

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
          title="description" content="Wood products for the home, office and person." 
        />
        <link rel="shortcut icon" href="/images/Logo.jpg" type="image/jpg" />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
