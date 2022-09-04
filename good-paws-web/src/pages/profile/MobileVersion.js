import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  FormControl,
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
      <Box>
        <PersonalDataComponent />
        <AvatarComponent />
        <UploadComponent />
        <Divider mt={6} mb={6} />
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <VStack
              divider={<StackDivider borderColor={"#EAECF0"} />}
              spacing={4}
              align="stretch"
            >
              <FormControl>
                <FormControlComponent
                  label="Nombre y apellidos"
                  name="fullname"
                  type="text"
                  placeholder="Marta García"
                  formik={formik}
                />
              </FormControl>
              <FormControl>
                <FormControlComponent
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="hola@open-devs.com"
                  icon={envelope}
                  formik={formik}
                />
              </FormControl>

              <FormControl>
                <FormControlComponent
                  label="Contraseña"
                  name="password"
                  type="password"
                  placeholder="*********"
                  icon={<ViewIcon />}
                  formik={formik}
                />
              </FormControl>
            </VStack>
          </form>
        </Box>
        <Divider mt={6} mb={6} />
      </Box>
    </Box>
  );
}
