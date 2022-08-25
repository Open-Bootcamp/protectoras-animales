import { Flex, Image, Text, WrapItem, Divider, Container } from "@chakra-ui/react";
import { shelters } from "../../Mocks/mocks";

export default function Shelter() {
  return (
    <Flex direction={'column'} as={Container} maxW="7xl" mt={5} p={4}>
      <Text p={4} mb={2} w={"100%"} fontSize={{ base: "15px", md: "2xl", lg: "17px" }} textAlign={"center"}>Ayudamos a las protectoras a crear finales felices.</Text>
      <Flex alignItems={'center'} justifyContent={'space-around'} w={'100%'} mt={5}>
        {shelters.map(shelter => (
            <WrapItem cursor={'pointer'} key={shelter.id}>
              <Image p={4} w={150} alt={shelter.name} src={shelter.avatar} />
            </WrapItem>  
          )
        )}
      </Flex>
      <Divider mt={12} mb={12} />
    </Flex>
  );
}