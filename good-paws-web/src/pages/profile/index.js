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
import * as Yup from "yup";
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
    validationSchema: Yup.object({
      fullname: Yup.string()
        .required("Este campo es requerido")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .required("Este campo es requerido")
        .email("Ingrese un email valido"),
      password: Yup.string()
        .required("Este campo es requerido")
        .min(6, "La contraseña debe contener 6 caracteres como minimo"),
    }),
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
