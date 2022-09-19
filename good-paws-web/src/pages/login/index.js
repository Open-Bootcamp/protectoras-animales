import React, { useState } from "react";
import Input from "../../components/Input";
import MainContainer from "./styles";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Link from "next/link";
import { setIsLoggedIn } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import NextLink from "next/link";
import { Text, Link as ChakraLink } from "@chakra-ui/react";

const initialState = {
  email: "",
  password: "",
  toggle: false,
};

const index = () => {
  const [values, setValues] = useState(initialState);

  const { email, password, toggle } = values;
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const formValidation = Yup.object({
    email: Yup.string()
      .required("El correo es requerido")
      .email("Ingrese un email valido"),
    password: Yup.string()
      .required("La contraseña es requerido")
      .min(6, "La contraseña debe contener 6 caracteres como minimo")
      .max(36, "La contraseña debe contener 6 caracteres como máximo'"),
  });

  const dispatch = useDispatch();

  return (
    <MainContainer>
      <div className="section-form">
        <Formik
          enableReinitialize
          initialValues={{
            email,
            password,
            toggle,
          }}
          validationSchema={formValidation}
          onSubmit={() => {
            console.log("goi");
          }}
        >
          {(formik) => (
            <Form className="form-container" onSubmit={formik.handleSubmit}>
              <h3>Iniciar Sesión</h3>
              <Input
                name="email"
                placeholder="hola@open-devs.com"
                labelText="Email"
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="********"
                labelText="Contraseña"
                onChange={handleChange}
              />

              <div className="recording">
                <div>
                  <input
                    type="checkbox"
                    name="toggle"
                    onClick={() => setValues({ ...values, toggle: !toggle })}
                  />
                  Recordarme
                </div>

                <NextLink href="/reset-password" passHref>
                  <ChakraLink color="primary" fontWeight="500">
                    ¿Has olvidado la contraseña?
                  </ChakraLink>
                </NextLink>
              </div>
              <NextLink href="/" passHref>
                <button
                  type="submit"
                  className="btn "
                  onClick={() => dispatch(setIsLoggedIn(true))}
                >
                  Iniciar Sesion
                </button>
              </NextLink>
              <Link href="/register">
                <div className="text-center">Registrarme</div>
              </Link>
            </Form>
          )}
        </Formik>

        <div className="img-container">
          <img src="./ilustracion.svg" alt="" />
        </div>
      </div>
    </MainContainer>
  );
};

export default index;
