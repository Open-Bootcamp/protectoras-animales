import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, useDisclosure, useMergeRefs } from '@chakra-ui/react';
import * as React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { colors } from '../../utils/colors';
  
export const PasswordField = React.forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = React.useRef(null);
  const mergeRef = useMergeRefs(inputRef, ref);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }

  return (
    <FormControl isRequired>
      <FormLabel htmlFor="password">Contraseña</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton variant="link" aria-label={isOpen ? 'Mask password' : 'Reveal password'} icon={isOpen ? <HiEyeOff /> : <HiEye />} onClick={onClickReveal} />
        </InputRightElement>
        <Input focusBorderColor={colors.primarylight} id="password" ref={mergeRef} name="password" type={isOpen ? 'text' : 'password'} autoComplete="current-password" required {...props} />
      </InputGroup>
    </FormControl>
  )
})
  
  PasswordField.displayName = 'PasswordField';