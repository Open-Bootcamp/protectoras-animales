import MobileMenu from "./MobileMenu/MobileMenu";
import NavbarContainer from "./NavbarContainer";
import Logo from "../Logo/Logo";
import MenuLinks from "./MenuLinks/MenuLinks";
import {
  Box,
  Button,
  Link,
  Avatar,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem/MenuItem";
import NextLink from "next/link";
import exitIcon from "../../../public/assets/images/exit-icon.svg";
import Image from "next/image";
import { selectIsLoggedIn, setIsLoggedIn } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <NavbarContainer {...props}>
      <Box display={{ base: "block", lg: "none" }}>
        <Logo />
      </Box>
      <MobileMenu
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        exitIcon={exitIcon}
      />

      <MenuLinks isOpen={isOpen} onClose={onClose} />
      {isLoggedIn ? (
        <Box display={{ base: "none", lg: "block" }}>
          <NextLink href="/profile" passHref>
            <IconButton
              as={Link}
              bgColor="transparent"
              _hover={{ bg: "transparent", textDecoration: "none" }}
              _active={{ bg: "transparent" }}
              icon={<Avatar name="name" src="" size="md" />}
            />
          </NextLink>
          <NextLink href="/" passHref>
            <IconButton
              as={Link}
              bgColor="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              ml={2}
              icon={
                <Image src={exitIcon} alt="Logout" width={20} height={20} />
              }
              onClick={() => dispatch(setIsLoggedIn(false))}
            />
          </NextLink>
        </Box>
      ) : (
        <Box display={{ base: "none", lg: "block" }}>
          <MenuItem
            to="/
            
            
            imshelter"
            title="Soy protectora"
            color="primary"
          />
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
      )}
    </NavbarContainer>
  );
}
