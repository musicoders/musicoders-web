import { Grid, GridItem } from "@chakra-ui/react"
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Flex, Heading, Button, Avatar, Wrap, WrapItem } from "@chakra-ui/react"

const Contact = () => {
    return (
        
        <Grid templateColumns="repeat(2, 1fr)" h="100vh" gap={4} >
            <GridItem colSpan={1} alignContent="center" justifyContent="center" >
                <Flex height="100vh" alignItems="center" justifyContent="center" >
                    <Flex direction="column" background="gray.300" p={30} >
                    <Heading>Contactanos!</Heading>
                    <FormControl id="name" isRequired p={6}>
                        <FormLabel m="6">Nombre y Apellido</FormLabel>
                        <Input type="text" variant="filled" placeholder="Tu Nombre y Apellido" />
                    </FormControl>
                    <FormControl id="email" isRequired p={6}>
                        <FormLabel m="6">Email</FormLabel>
                        <Input type="email" variant="filled" placeholder="Tu Email" />
                    </FormControl>
                    <FormControl id="message" isRequired p={6}>
                        <FormLabel m="6">Mensaje</FormLabel>
                        <Textarea placeholder="Escribe tu mensaje" />
                    </FormControl>
                    <Button type="submit" colorScheme="cyan">Enviar</Button>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem colSpan={1}>
                <Flex height="100vh" alignItems="center" justifyContent="center">
                    <Flex direction="column">
                    <Heading>Contactá personalmente a alguno de los miembros del equipo</Heading>
                    <Wrap>
                        <WrapItem>
                            <Avatar size="sm" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%" />
                        </WrapItem>
                    </Wrap>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
       
    )        
}

export default Contact
