import { useState, useEffect } from 'react';
import { ContainerTag } from './styles';

export const Tag = ({ text, color }) => {
  const [stateTag, setStateTag] = useState({
    text,
    color,
    backgroundColor: '',
  });

  const changeColor = ({ colorText, backgroundColor }) => {
    setStateTag({
      ...stateTag,
      color: colorText,
      backgroundColor,
    });
  };

  useEffect(() => {
    switch (color) {
      case 'gray-1':
        return changeColor({
          colorText: '#3C3F41',
          backgroundColor: '#F3F3F3',
        });
      case 'primary':
        return changeColor({
          colorText: '#144353',
          backgroundColor: '#57888726',
        });
      case 'asenct':
        return changeColor({
          colorText: '#CD7474',
          backgroundColor: '#F1989826',
        });
      case 'error':
        return changeColor({
          colorText: '#B42318',
          backgroundColor: '#FEF3F2',
        });
      case 'warning':
        return changeColor({
          colorText: '#B54708',
          backgroundColor: '#FFFAEB',
        });
      case 'success':
        return changeColor({
          colorText: '#027A48',
          backgroundColor: '#ECFDF3',
        });
      case 'blue-gray':
        return changeColor({
          colorText: '#363F72',
          backgroundColor: '#F8F9FC',
        });
      case 'blue-light':
        return changeColor({
          colorText: '#026AA2',
          backgroundColor: '#F0F9FF',
        });
      case 'blue':
        return changeColor({
          colorText: '#175CD3',
          backgroundColor: '#EFF8FF',
        });
      case 'indigo':
        return changeColor({
          colorText: '#3538CD',
          backgroundColor: '#EEF4FF',
        });
      case 'purple':
        return changeColor({
          colorText: '#5925DC',
          backgroundColor: '#F4F3FF',
        });
      case 'pink':
        return changeColor({
          colorText: '#C11574',
          backgroundColor: '#FDF2FA',
        });
      case 'rose':
        return changeColor({
          colorText: '#C01048',
          backgroundColor: '#FFF1F3',
        });
      case 'orange':
        return changeColor({
          colorText: '#C4320A',
          backgroundColor: '#FFF6ED',
        });
    }
  }, []);

  return (
    <ContainerTag
      backgroundColor={stateTag.backgroundColor}
      color={stateTag.color}
    >
      {stateTag.text}
    </ContainerTag>
  );
};
