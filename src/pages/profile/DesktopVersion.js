import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
} from "@chakra-ui/react";
import envelope from "../../../public/assets/images/envelope-icon.svg";
import AvatarComponent from "./AvatarComponent";
import FormControlComponent from "./FormControlComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import UploadComponent from "./UploadComponent";

export default function DesktopProfile({ formik }) {
  return (
    <Box display={{ base: "none", lg: "block" }}>
      <form onSubmit={formik.handleSubmit}>
        <Flex align="center" justify="space-between">
          <PersonalDataComponent />
        </Flex>
        <Divider mt={2} mb={6} />
        <HStack spacing={10}>
          <HStack spacing={20}>
            <AvatarComponent formik={formik} />
          </HStack>
          <UploadComponent pl={20} pr={20} formik={formik} />
        </HStack>
        <Divider mt={6} mb={6} />
        <FormControl
          isInvalid={!!formik.errors.fullname && formik.touched.fullname}
        >
          <HStack>
            <FormControlComponent
              label="Nombre y apellidos"
              name="fullname"
              type="text"
              placeholder="Marta García"
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
          </HStack>
        </FormControl>
        <Divider mt={6} mb={6} />
        <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
          <HStack>
            <FormControlComponent
              label="Email"
              name="email"
              type="email"
              placeholder="hola@open-devs.com"
              icon={envelope}
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </HStack>
        </FormControl>
        <Divider mt={6} mb={6} />
        <FormControl
          isInvalid={!!formik.errors.password && formik.touched.password}
        >
          <HStack>
            <FormControlComponent
              label="Contraseña"
              name="password"
              type="password"
              placeholder="*********"
              icon={<ViewIcon />}
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </HStack>
        </FormControl>
      </form>
      <Divider mt={6} mb={6} />
    </Box>
  );
}
