import React, { useContext, useEffect } from "react";
import { useClickable } from "@chakra-ui/clickable";
import {
  chakra,
  Text,
  Box,
  Divider,
  Container,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeadBox from "./Components/HeadBox";
import CardsContainer from "../CardsContainer/CardsContainer";
import Sidebar from "./Components/Sidebar";
import { MainContext } from "../../context/maincontext";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from '../../store/animalsSlice';
import { usePagination } from "react-use-pagination";

const Clickable = (props) => {
  const clickable = useClickable(props);
  return (
    <chakra.button
      border={`1px solid gray`}
      rounded={"md"}
      w={8}
      h={8}
      cursor={"pointer"}
      onClick
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{ bg: "primary", color: "white" }}
      {...clickable}
    />
  );
};

const FindNewPartner = () => {
  const { filters, userLocation } = useContext(MainContext);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.animals);
  const { currentPage, totalPages, setNextPage, setPreviousPage, nextEnabled, previousEnabled } = usePagination({ totalItems: data.animals.totalResults, initialPageSize: 8 });

  useEffect(() => {
    dispatch(getAnimals({ filters, initRegs: 8, currentPage, userLocation  }));
  }, [filters, currentPage]);

  return (
    <Stack p={10}>
      <Flex direction={"column"}>
        <HeadBox />
        <Flex direction={{ base: 'column', md: 'row'}}>
          <Sidebar />
          <Flex w={'full'} direction={'column'}>
            <CardsContainer data={data.animals.results && data.animals.results} />
            <Box color={useColorModeValue("gray5", "gray2")}>
              <Divider orientation="horizontal" />
              <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
              >
                <Flex
                  w={"100%"}
                  justifyContent={"space-between"}
                  direction={"row"}
                  spacing={6}
                  alignItems={"center"}
                >
                  <Clickable
                    as="button"
                    onClick={setPreviousPage}
                    _active={{ bg: "primarylight", color: "white" }}
                    _disabled={!previousEnabled}
                  >
                    <FaArrowLeft />
                  </Clickable>
                  <Text>
                    Página {totalPages > 0 ? currentPage + 1 : currentPage} de{" "}
                    {totalPages}
                  </Text>
                  <Clickable
                    as="button"
                    onClick={setNextPage}
                    _active={{ bg: "primarylight", color: "white" }}
                    _disabled={!nextEnabled}
                  >
                    <FaArrowRight />
                  </Clickable>
                </Flex>
              </Container>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default FindNewPartner;
