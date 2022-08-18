import { useCallback } from 'react';
import { useClickable } from "@chakra-ui/clickable"
import { Box, chakra, Container, Stack, Text, useColorModeValue, VisuallyHidden, Divider, Flex } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
  
  const Clickable = (props) => {
    const clickable = useClickable(props)
    return <chakra.button border={'1px solid #c3c6c8'} rounded={'md'} w={8} h={8} cursor={'pointer'} onClick display={'inline-flex'} alignItems={'center'} justifyContent={'center'} transition={'background 0.3s ease'} _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'), }} {...clickable} />
  }
  
  export default function Footer({ page, totalPages, setPage }) {
    // Next page handler.
    const onNextPage = useCallback(() => {
      setPage((prevState) => {
        if (prevState < totalPages) {
          return prevState + 1;
        }

        return prevState;
      });
    }, [totalPages]);

    // Previous page handler.
    const onPrevPage = useCallback(() => {
      setPage((prevState) => {
        if (prevState > 0) {
          return prevState - 1;
        }

        return prevState;
      });
    }, []);

    return (
      <Box color={useColorModeValue('gray.700', 'gray.200')}>
        <Divider orientation='horizontal' />
        <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
          <Flex w={'100%'} justifyContent={'space-between'} direction={'row'} spacing={6}>
            <Clickable as="div" onClick={onPrevPage} _active={{ bg: "blue", color: "white" }} _disabled={{ opacity: 0.4, pointerEvents: "none" }}><FaArrowLeft /></Clickable>
            <Text>Página {page + 1} de {totalPages}</Text>
            <Clickable as="div" onClick={onNextPage} _active={{ bg: "blue", color: "white" }} _disabled={{ opacity: 0.4, pointerEvents: "none" }}><FaArrowRight /></Clickable>
          </Flex>
        </Container>
      </Box>
    );
  }