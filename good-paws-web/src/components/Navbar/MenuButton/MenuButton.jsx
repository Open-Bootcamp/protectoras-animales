import React, { useRef } from "react";

import { Box, Button } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

export default function MenuButton({ onOpen, isOpen, onClose }) {
  const btnRef = useRef();

  return (
    <Box display={{ base: "block", md: "none" }}>
      <Button
        ref={btnRef}
        bgColor={"transparent"}
        _active={{ bg: "transparent" }}
        _hover={{ bg: "transparent" }}
        onClick={onOpen}
      >
        <IoMenu color="#3c3f41" size={25} />
      </Button>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
