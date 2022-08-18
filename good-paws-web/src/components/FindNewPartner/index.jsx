import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import HeadBox from "./Components/HeadBox";
import MainBox from "./Components/MainBox";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { products } from "../../Mocks/mocks";
import usePagination from "../../Hooks/usePagination.tsx";

const FindNewPartner = () => {
  // Create pagination.
  const pagination = usePagination(products, 8);

  return (
    <Stack p={10}>
      <Flex direction={'column'}>
        <HeadBox />
        <Flex direction={{ base: 'column', md: 'row'}}>
          <Sidebar />
          <Flex w={'full'} direction={'column'}>
            <MainBox data={pagination.data} />
            <Footer page={pagination.page} totalPages={pagination.totalPages} setPage={pagination.setPage} />
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default FindNewPartner;
