import { Box, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import upload from "../../../public/assets/images/upload-icon.svg";

export default function UploadComponent({ pl, pr }) {
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
      <IconButton
        bgColor="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
        fontSize="40px"
        icon={<Image src={upload} alt="Upload icon" width={40} height={40} />}
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
