import MobileMenu from "./MobileMenu/MobileMenu";
import NavbarContainer from "./NavbarContainer";
import Logo from "../Logo/Logo";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Box, Button, Link, useDisclosure } from "@chakra-ui/react";
import MenuItem from "./MenuItem/MenuItem";
import NextLink from "next/link";

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <NavbarContainer {...props}>
      <Box display={{ base: "block", lg: "none" }}>
        <Logo />
      </Box>
      <MobileMenu onOpen={onOpen} isOpen={isOpen} onClose={onClose} />

      <MenuLinks isOpen={isOpen} onClose={onClose} />
      <Box display={{ base: "none", lg: "block" }}>
        <MenuItem to="/imshelter" title="Soy protectora" color="primary" />
        <Button
          bg="primary"
          _hover={{ bg: "primary" }}
          color="white"
          ml={{ lg: 5, xl: 10 }}
        >
          <NextLink href="/login" passHref>
            <Link>Iniciar sesion</Link>
          </NextLink>
        </Button>
      </Box>
    </NavbarContainer>
  );
}
