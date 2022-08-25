import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
} from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../../Logo/Logo";
import NextLink from "next/link";

export default function MenuDrawer({ isOpen, onClose }) {
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
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}
