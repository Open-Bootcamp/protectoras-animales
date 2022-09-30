import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function MenuItem({ to, title, onClose }) {
  return (
    <NextLink href={to} passHref>
      <Link color="primary" fontWeight="500" onClick={onClose}>
        {title}
      </Link>
    </NextLink>
  );
}
