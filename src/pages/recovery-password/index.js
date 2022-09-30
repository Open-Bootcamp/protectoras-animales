import {
  Box,
  Image,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import CommonButton from "../../components/CommonButton/CommonButton";

export default function index() {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Este campo es requerido")
        .email("Ingrese un email valido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      justify="center"
      align="center"
      maxWidth={"70%"}
      margin={"0 auto"}
      minHeight="90vh"
    >
      <Box flex={1.2}>
        {isValidEmail ? (
          <Box>
            <Box mb={8}>
              <Text color={"#101828"} fontSize="28px" fontWeight="600">
                ¡Gracias!
              </Text>
              <Text
                color="gray4"
                fontSize="18px"
                fontWeight="500"
                letterSpacing="-0.02em"
              >
                Acabamos de enviarte un email con las instrucciones.
              </Text>
            </Box>
            <Box w={{ lg: "95%" }}>
              <CommonButton text="Volver" mt={6} width="100%" href="/" />
            </Box>
          </Box>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <Box mb={8}>
              <Text color={"#101828"} fontSize="28px" fontWeight="600">
                ¿Has olvidado tu contraseña?
              </Text>
              <Text
                color="gray4"
                fontSize="18px"
                fontWeight="500"
                letterSpacing="-0.02em"
              >
                ¡No pasa nada! Te enviaremos un email para que puedas
                recuperarla.
              </Text>
            </Box>
            <Box w={{ lg: "95%" }}>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel
                  htmlFor="email"
                  color="gray5"
                  fontSize="sm"
                  fontWeight="500"
                >
                  Email
                </FormLabel>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="hola@open-devs.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <CommonButton
                text="Recuperar contraseña"
                mt={6}
                width="100%"
                href=""
                onClick={setIsValidEmail}
              />
            </Box>
          </form>
        )}
      </Box>
      <Box display={{ base: "none", lg: "block" }} flex={2}>
        <Image alt={"Main image"} src={"./illustration.svg"} width="100%" />
      </Box>
    </Flex>
  );
}
