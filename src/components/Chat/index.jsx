import { useState } from 'react';
import useScreenSize from '../../hooks/useScreenSize';
import { BackButton } from './BackButton';
import { ChatList } from './ChatList';
import { ChatSelected } from './ChatSelected';
import { SendMessage } from './SendMessage';
import { ChatContainer, GridChats, GridMessages } from './styles';

export const Chat = () => {

  const [activateView, setActivateView] = useState(false);
  const { width } = useScreenSize();

  return (
    <ChatContainer>
      <GridChats>
        <ChatList setActivateView={setActivateView} />
      </GridChats>
      <GridMessages show={activateView}>
        {width <= 1024 && <BackButton setActivateView={setActivateView} />}
        <ChatSelected />
        <SendMessage />
      </GridMessages>
    </ChatContainer>
  )
}
