import Link from 'next/link';
import { BackArrowButton } from './styles';
import { ArrowBackIcon } from '@chakra-ui/icons'


export const BackArrow = ({ text, link }) => {
  return (
    <Link href={link}>
      <BackArrowButton> <ArrowBackIcon w="1.5rem" h="1.5rem" color="#3C3F41" /> {text}</BackArrowButton>
    </Link>
  )
}
