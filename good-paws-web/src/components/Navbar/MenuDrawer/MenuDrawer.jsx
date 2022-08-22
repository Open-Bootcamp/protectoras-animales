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
  Link,
} from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../../Logo/Logo";

export default function MenuDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      isFullHeight
      display={{ md: onClose }}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          pt={5}
          _active={{ bg: "transparent" }}
          _hover={{ bg: "transparent" }}
        />
        <Box pl={4}>
          <Logo />
        </Box>
        <DrawerBody mt={10}>
          <Stack spacing={20} direction="column">
            <MenuItem to="/adoptar" title="Quiero adoptar" />
            <MenuItem to="/protectoras" title="Protectoras" />
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
            bgColor={"#144353"}
            _hover={{ bg: "#144353" }}
            color={"#ffffff"}
            mb={6}
            size="lg"
            width="90%"
          >
            <Link href="/login">
              <a>Iniciar sesion</a>
            </Link>
          </Button>
          <MenuItem to="/soyprotectora" title="Soy protectora" />
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}
