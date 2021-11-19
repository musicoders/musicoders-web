import { Grid, GridItem } from "@chakra-ui/react"
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Flex, Heading, Button, Avatar, Center} from "@chakra-ui/react"

const Contact = () => {
    return (
        
        <Grid templateColumns="repeat(2, 1fr)" h="100vh" gap={4} >
            <GridItem colSpan={1} alignContent="center" justifyContent="center" >
                <Flex h="100vh" alignItems="center" justifyContent="center" >
                    <Flex direction="column" background="gray.300" p={30} borderRadius="20px" >
                    <Heading>Contactanos!</Heading>
                    <FormControl id="name" isRequired p={1}>
                        <FormLabel m="3">Nombre y Apellido</FormLabel>
                        <Input type="text" variant="filled" placeholder="Tu Nombre y Apellido" />
                    </FormControl>
                    <FormControl id="email" isRequired p={1}>
                        <FormLabel m="3">Email</FormLabel>
                        <Input type="email" variant="filled" placeholder="Tu Email" />
                    </FormControl>
                    <FormControl id="message" isRequired p={1}>
                        <FormLabel m="3">Mensaje</FormLabel>
                        <Textarea placeholder="Escribe tu mensaje" variant="filled" marginBottom="2"></Textarea>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">Enviar</Button>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem colSpan={1}>
                <Flex height="100vh" alignItems="center" justifyContent="center">
                    <Flex direction="column">
                    <Heading p={5}>Contactá personalmente a alguno de los miembros del equipo</Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4} >
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        <GridItem>
                            <Center>
                            <Avatar size="xl" name="Pilar Chanampe" src="https://bit.ly/code-beast" borderRadius="50%"/>
                            </Center>
                        </GridItem>
                        
                    </Grid>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
       
    )        
}

export default Contact
