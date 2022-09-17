import { useContext } from 'react';
import { Link } from "react-router-dom";
import { MainContext } from '../../context/mainContext';
import { useFormik } from "formik";
import { Hide, Image, HStack, Stack, Box, Button, Checkbox, Flex, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { PasswordField } from "./PasswordField";
import { colors } from "../../utils/colors";

export default function App() {
    const { handleLogin } = useContext(MainContext);
    
    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        rememberMe: false
        },
        onSubmit: (values) => {
            handleLogin(values);
        }
    });

    return (
        <Flex justifyContent={'center'} h={'100vh'} alignItems={'center'} w="100%">
            <Box w={['80%', '80%', '70%', '30%']} bg={colors.white} p={6} rounded="md">
                <Link to='/'>
                    <Image mb={6} w={'15rem'} alt={'logo home'} src={'./logo.svg'} />
                </Link>
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={8} align="flex-start">
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input autoComplete='on' required id="email" name="email" type="email" focusBorderColor={colors.primarylight} onChange={formik.handleChange} value={formik.values.email} />
                        </FormControl>
                        <PasswordField required onChange={formik.handleChange} value={formik.values.password} />
                        <HStack w={'100%'} justify="space-between">
                            <Checkbox id="rememberMe" name="rememberMe" onChange={formik.handleChange} isChecked={formik.values.rememberMe} colorScheme="teal">Recordarme?</Checkbox>
                            <Button variant="link" color={colors.primarylight} size="sm">Olvidó su contraseña?</Button>
                        </HStack>
                        <Button p={6} type="submit" color={colors.white} _hover={{ bg: colors.primarylight }} bg={colors.primary} width="full">Iniciar sesión</Button>
                        <Stack w={'100%'} spacing="6">
                            <Link to="/register">
                                <Button variant="link" color={colors.primarylight}>Registrarse</Button>
                            </Link>
                        </Stack>
                    </VStack>
                </form>
            </Box>
            <Hide below='md'>
                <Image w={'50%'} alt={'illustration home'} src={'./illustration.svg'} />
            </Hide>
        </Flex>
    );
}