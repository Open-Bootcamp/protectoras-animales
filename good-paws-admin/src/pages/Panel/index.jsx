import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Panel = () => {
    return (
      <Flex>
        <Sidebar />
        <Outlet/>
      </Flex>
    );
}

export default Panel;