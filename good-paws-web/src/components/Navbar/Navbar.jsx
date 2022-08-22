import MenuButton from "./MenuButton/MenuButton";
import NavbarContainer from "./NavbarContainer";
import Logo from "../Logo/Logo";
import MenuLinks from "./MenuLinks/MenuLinks";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import MenuItem from "./MenuItem/MenuItem";
import Link from "next/link";

export default function Navbar(props) {
  const toggle = () => setIsOpen(!isOpen);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <NavbarContainer {...props}>
      <Box display={{ base: "block", md: "none" }}>
        <Logo />
      </Box>
      <MenuButton onOpen={onOpen} isOpen={isOpen} onClose={onClose} />

      <MenuLinks isOpen={isOpen} onClose={onClose} />
      <Box display={{ base: "none", md: "block" }}>
        <MenuItem
          to="/soyprotectora"
          title="Soy protectora"
          color={"##144353"}
        />
        <Button
          bgColor={"#144353"}
          _hover={{ bg: "#144353" }}
          color={"#ffffff"}
          ml={10}
        >
          <Link href="/login">
            <a>Iniciar sesion</a>
          </Link>
        </Button>
      </Box>
    </NavbarContainer>
  );
}
