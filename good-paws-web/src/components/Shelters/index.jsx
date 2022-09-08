import { useEffect } from "react";
import { Flex, Image, Text, WrapItem, Divider, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getCenters } from '../../store/centersSlice';

export default function Shelter({ content }) {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCenters());
  }, []);

  const centers = useSelector((state) => state.centers.centers);

  return (
    <>
      {centers.length > 0 ?
      <Flex direction={'column'} as={Container} maxW="7xl" mt={5} p={4}>
        <Text p={4} mb={2} w={"100%"} fontSize={{ base: "15px", md: "2xl", lg: "17px" }} textAlign={"center"}>{content}</Text>
        <Flex direction={{ base: 'row', sm: 'column', md: 'column', lg: 'row'}} alignItems={'center'} justifyContent={'space-around'} w={'100%'} mt={5}>
          {centers.map(shelter => (
              <WrapItem cursor={'pointer'} key={shelter.id}>
                <Image p={4} w={180} alt={shelter.name} src={shelter.picture ? `${process.env.NEXT_PUBLIC_HOST}${shelter.picture.url.substring(1,1000)}` : './dog.svg' } />
              </WrapItem>  
            )
          )}
        </Flex>
        <Divider mt={12} />
      </Flex>
      : null
      }
    </>
  );
}