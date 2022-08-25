import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "../../Logo/Logo";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuLinks() {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <Stack
          spacing={20}
          direction="row"
          align="center"
          justify="space-between"
        >
          <Logo />

          <MenuItem to="/newpartner" title="Quiero adoptar" />
          <MenuItem to="/centros" title="Protectoras" />
        </Stack>
      </Box>
    </>
  );
}
