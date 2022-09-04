import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../../Logo/Logo";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, setIsLoggedIn } from "../../../store/authSlice";
import Image from "next/image";

export default function MenuDrawer({ isOpen, onClose, exitIcon }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <Drawer isOpen={isOpen} placement="right" size="full" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent pt={4}>
        <DrawerCloseButton
          size="lg"
          color="gray4"
          _active={{ bg: "transparent" }}
          _hover={{ bg: "transparent" }}
        />
        <Box pl={4}>
          <Logo onClose={onClose} />
        </Box>
        <DrawerBody mt={10}>
          <Stack spacing={20} direction="column">
            <MenuItem
              to="/newpartner"
              title="Quiero adoptar"
              onClose={onClose}
            />
            <MenuItem to="/centros" title="Protectoras" onClose={onClose} />
          </Stack>
        </DrawerBody>
        <Divider />
        <Flex
          as="div"
          direction="column"
          align="center"
          justify="space-around"
          pt={6}
          pb={8}
        >
          {isLoggedIn ? (
            <Box width="90%">
              <Flex direction="row" align="flex-start" justify="space-between">
                <HStack>
                  <NextLink href="/profile" passHref>
                    <Link onClick={onClose}>
                      <IconButton
                        bgColor="transparent"
                        _hover={{ bg: "transparent", textDecoration: "none" }}
                        _active={{ bg: "transparent" }}
                        icon={<Avatar name="name" src="" size="md" />}
                      />
                    </Link>
                  </NextLink>
                  <VStack align="flex-start" spacing={0} ml={3}>
                    <Text color="#101828" fontWeight={500}>
                      Marta García
                    </Text>
                    <Text color="gray4" fontWeight={400}>
                      hola@open-devs.com
                    </Text>
                  </VStack>
                </HStack>
                <NextLink href="/" passHref>
                  <Link onClick={onClose}>
                    <IconButton
                      bgColor="transparent"
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                      ml={2}
                      icon={
                        <Image
                          src={exitIcon}
                          alt="Logout"
                          width={15}
                          height={15}
                        />
                      }
                      onClick={() => dispatch(setIsLoggedIn(false))}
                    />
                  </Link>
                </NextLink>
              </Flex>
            </Box>
          ) : (
            <>
              <Button
                bg="primary"
                _hover={{ bg: "primary" }}
                color="white"
                mb={6}
                size="lg"
                width="90%"
              >
                <NextLink href="/login" passHref>
                  <Link onClick={onClose}>Iniciar sesion</Link>
                </NextLink>
              </Button>
              <MenuItem
                to="/soyprotectora"
                title="Soy protectora"
                onClose={onClose}
              />
            </>
          )}
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}
