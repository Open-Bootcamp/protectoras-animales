import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import DesktopProfile from "./DesktopProfile";
import MobileProfile from "./MobileProfile";

export default function index() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box pl={{ base: 4, lg: 20 }} pr={{ base: 4, lg: 20 }}>
      <Text fontSize="2xl" color={"#101828"} fontWeight="500" ml={4}>
        Ajustes
      </Text>
      <Tabs>
        <TabList>
          <Tab>Mi cuenta</Tab>
          <Tab>Mensajes</Tab>
          <Tab>Adopciones</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MobileProfile formik={formik} />
            <DesktopProfile formik={formik} />
          </TabPanel>
          <TabPanel>
            <p>Mensajes!</p>
          </TabPanel>
          <TabPanel>
            <p>Adopciones!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
