import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  FormControl,
  FormErrorMessage,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import envelope from "../../../public/assets/images/envelope-icon.svg";
import AvatarComponent from "./AvatarComponent";
import FormControlComponent from "./FormControlComponent";
import PersonalDataComponent from "./PersonalDataComponent";
import UploadComponent from "./UploadComponent";

export default function MobileProfile({ formik }) {
  return (
    <Box display={{ base: "block", lg: "none" }}>
      <form onSubmit={formik.handleSubmit}>
        <PersonalDataComponent />
        <AvatarComponent formik={formik} />
        <UploadComponent formik={formik} />
        <Divider mt={6} mb={6} />
        <VStack
          divider={<StackDivider borderColor={"#EAECF0"} />}
          spacing={4}
          align="stretch"
        >
          <FormControl
            isInvalid={!!formik.errors.fullname && formik.touched.fullname}
          >
            <FormControlComponent
              label="Nombre y apellidos"
              name="fullname"
              type="text"
              placeholder="Marta García"
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!formik.errors.email && formik.touched.email}
          >
            <FormControlComponent
              label="Email"
              name="email"
              type="email"
              placeholder="hola@open-devs.com"
              icon={envelope}
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!formik.errors.password && formik.touched.password}
          >
            <FormControlComponent
              label="Contraseña"
              name="password"
              type="password"
              placeholder="*********"
              icon={<ViewIcon />}
              formik={formik}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
        </VStack>
      </form>
      <Divider mt={6} mb={6} />
    </Box>
  );
}
