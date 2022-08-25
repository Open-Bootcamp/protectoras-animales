import React from "react";
import logo from "../../../public/assets/images/logo.svg";
import Image from "next/image";
import NextLink from "next/link";
import { IconButton, Link } from "@chakra-ui/react";

export default function Logo({ onClose }) {
  return (
    <NextLink href="/" passHref>
      <IconButton
        as={Link}
        onClick={onClose}
        bgColor="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        icon={<Image src={logo} alt="GoodPaws logo" width={150} height={60} />}
      />
    </NextLink>
  );
}
