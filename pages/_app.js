import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from '@chakra-ui/react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{
        useSystsemColorMode: true
      }}>
      <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>  
  )
}

export default appWithTranslation(MyApp);
