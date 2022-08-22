import Link from 'next/link';
import { Button, Heading, Flex, Text } from '@chakra-ui/react'
import { colors } from '../components/ui/colors';
import { errors } from '../components/ui/errors';

function Error({ statusCode }) {
    const customError = errors.find(error => error.code === statusCode);

    return (
        <Flex h={'100vh'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
            {customError && 
                <>
                    <Text lineHeight={'24px'} size={'16px'} fontWeight={600} color={colors.primarylight}>{customError.code ? customError.code : '404'} error</Text>
                    <Heading mb={3} textAlign={'center'} maxW={'100%'} fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}>
                        <Text>{customError.title ? customError.title : '¡Página no encontrada!'}</Text>
                    </Heading>
                    <Text size={'20px'} p={6} fontWeight={400} lineHeight={'30px'} mb={6} color={colors.error}>{customError.description ? customError.description : 'Lo siento, no hemos encontrado lo que estabas buscando.'}</Text>
                    <Link href="/">
                        <Button color={colors.white} _active={{ bg: colors.primarypastel }} _hover={{ bg: colors.primarylight }} bg={colors.primary}>Volver al inicio</Button>
                    </Link>
                </>
            }
        </Flex>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;