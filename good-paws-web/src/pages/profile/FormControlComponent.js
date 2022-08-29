import {
  Box,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";

export default function FormControlComponent({
  label,
  name,
  type,
  placeholder,
  icon,
  formik,
}) {
  return (
    <>
      <Box w={{ lg: "25%" }}>
        <FormLabel htmlFor={name} color={"#344054"} fontSize="sm">
          {label}
        </FormLabel>
      </Box>
      {icon ? (
        <Box w={{ lg: "50%" }}>
          <InputGroup>
            {type === "email" ? (
              <InputLeftElement
                pointerEvents="none"
                children={
                  <IconButton
                    bgColor="transparent"
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    icon={
                      <Image src={icon} alt={label} width={17} height={14} />
                    }
                  />
                }
              />
            ) : (
              <InputRightElement
                children={
                  <IconButton
                    bgColor="transparent"
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                    icon={icon}
                  />
                }
              />
            )}

            <Input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </InputGroup>
        </Box>
      ) : (
        <Box w={{ lg: "50%" }}>
          <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            value={formik.values.email}
            color="gray5"
          />
        </Box>
      )}
    </>
  );
}
