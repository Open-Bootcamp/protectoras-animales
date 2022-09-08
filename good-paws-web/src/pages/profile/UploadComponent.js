import { Box, Input, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import upload from "../../../public/assets/images/upload-icon.svg";

export default function UploadComponent({ pl, pr, formik }) {
  const handleChange = (e) => {
    formik.setFieldValue("avatar", e.currentTarget.files[0]);
    // console.log(e.currentTarget.files[0]);
  };
  return (
    <Box
      borderColor="gray2"
      borderWidth="1px"
      align="center"
      pt={6}
      pb={6}
      pl={pl}
      pr={pr}
    >
      <label htmlFor="avatar">
        <Image src={upload} alt="Upload icon" width={40} height={40} />
      </label>
      <Input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        onChange={handleChange}
        hidden
      />
      <Text color="gray4" fontSize="sm" fontWeight="400" mt={2} mb={2}>
        <Text as="b" color="primary" fontWeight="500">
          Arrastra tu archivo
        </Text>{" "}
        o búscalo
      </Text>
      <Text color="gray4" fontSize="xs" fontWeight="400">
        SVG, PNG, JPG o GIF (max. 800x400px)
      </Text>
    </Box>
  );
}
