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
import CommonButton from "../../components/CommonButton/CommonButton";

export default function index() {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Este campo es requerido")
        .min(6, "La contraseña debe contener 6 caracteres como minimo"),
      confirmPassword: Yup.string()
        .required("Este campo es requerido")
        .min(6, "La contraseña debe contener 6 caracteres como minimo")
        .oneOf(
          [Yup.ref("newPassword"), null],
          "Las contraseñas deben coincidir"
        ),
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
        <form onSubmit={formik.handleSubmit}>
          <Box mb={8}>
            <Text color={"#101828"} fontSize="28px" fontWeight="600">
              ¡Vamos a cambiar tu contraseña!
            </Text>
          </Box>
          <Box w={{ lg: "95%" }}>
            <FormControl
              isInvalid={
                !!formik.errors.newPassword && formik.touched.newPassword
              }
            >
              <FormLabel
                htmlFor="newPassword"
                color="gray5"
                fontSize="sm"
                fontWeight="500"
              >
                Nueva contraseña
              </FormLabel>
              <Input
                label="Nueva Contraseña"
                name="newPassword"
                type="password"
                placeholder="******"
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>{formik.errors.newPassword}</FormErrorMessage>
            </FormControl>
            <FormControl
              mt={6}
              isInvalid={
                !!formik.errors.confirmPassword &&
                formik.touched.confirmPassword
              }
            >
              <FormLabel
                htmlFor="confirmPassword"
                color="gray5"
                fontSize="sm"
                fontWeight="500"
              >
                Confirma tu nueva contraseña
              </FormLabel>
              <Input
                label="Confirma tu nueva contraseña"
                name="confirmPassword"
                type="password"
                placeholder="******"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
              />
              <FormErrorMessage>
                {formik.errors.confirmPassword}
              </FormErrorMessage>
            </FormControl>
            <CommonButton text="Guardar" mt={6} width="100%" href="/" />
          </Box>
        </form>
      </Box>
      <Box display={{ base: "none", lg: "block" }} flex={2}>
        <Image alt={"Main image"} src={"./illustration.svg"} width="100%" />
      </Box>
    </Flex>
  );
}
