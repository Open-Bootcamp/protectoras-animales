import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

export default function MenuToggle({ toggle, isOpen, onOpen }) {
  const btnRef = useRef();

  return (
    <Button
      ref={btnRef}
      display={{ base: "block", md: "none" }}
      bgColor={"transparent"}
      _active={{ bg: "transparent" }}
      _hover={{ bg: "transparent" }}
      onClick={onOpen}
    >
      <IoMenu color="#3c3f41" size={25} />
    </Button>
  );
}
