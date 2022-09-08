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
import { Adoptions } from "../../components/Adoptions";
import { Chat } from "../../components/Chat";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";

export default function index() {
  const formik = useFormik({
    initialValues: {
      avatar: "",
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
            <MobileVersion formik={formik} />
            <DesktopVersion formik={formik} />
          </TabPanel>
          <TabPanel>
            <Chat />
          </TabPanel>
          <TabPanel>
            <Adoptions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
