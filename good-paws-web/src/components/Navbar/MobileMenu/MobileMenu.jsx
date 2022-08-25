import React, { useRef } from "react";
import { Box, Button } from "@chakra-ui/react";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileMenu({ onOpen, isOpen, onClose }) {
  const btnRef = useRef();

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <Button
        ref={btnRef}
        bgColor={"transparent"}
        _active={{ bg: "transparent" }}
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      >
        <HamburgerIcon w={25} h={25} color="gray5" />
      </Button>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
