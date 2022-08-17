import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from "@chakra-ui/react";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton
            _active={{ bg: "transparent" }}
            _hover={{ bg: "transparent" }}
          />
        </DrawerHeader>
        <DrawerBody mt={10}>
          <Stack
            spacing={20}
            direction="column"
            align="center"
            justify="center"
          >
            <MenuItem to="/adoptar" title="Quiero adoptar" />
            <MenuItem to="/protectoras" title="Protectoras" />
          </Stack>
        </DrawerBody>
        <DrawerFooter pb={6}>
          <MenuItem to="/soyprotectora" title="Soy protectora" />
          <Button
            bgColor={"#144353"}
            _hover={{ bg: "#144353" }}
            color={"#ffffff"}
            ml={10}
          >
            Iniciar sesion
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
