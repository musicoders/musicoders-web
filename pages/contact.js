import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react"
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Flex } from "@chakra-ui/react"
const Contact = () => {
    return (
        
        <Grid templateColumns="repeat(2, 1fr)" h="100vh" gap={4}>
            <GridItem colSpan={1} d-flex alignContent="center" justifyContent="center" >
                <Flex height="100vh" direction="column" alignItems="center" justifyContent="center">
                    <h2>Contactanos!</h2>
                    <FormControl id="first-name" isRequired p={6}>
                        <FormLabel m="6">Nombre y Apellido</FormLabel>
                        <Input type="text" variant="filled" placeholder="Tu Nombre y Apellido" />
                    </FormControl>
                    <FormControl id="email" isRequired p={6}>
                        <FormLabel m="6">Email</FormLabel>
                        <Input type="email" variant="filled" placeholder="Tu Email" />
                    </FormControl>
                    <FormControl id="first-name" isRequired p={6}>
                        <FormLabel m="6">Mensaje</FormLabel>
                        <Textarea placeholder="Escribe tu mensaje" />
                    </FormControl>
                </Flex>
            </GridItem>
            <GridItem colSpan={1}  />
        </Grid>
       
    )        
}

export default Contact
