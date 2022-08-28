import { ChatList } from './ChatList';
import { ChatSelected } from './ChatSelected';
import { SendMessage } from './SendMessage';
import { ChatContainer } from './styles';

export const Chat = () => {
  return (
    <ChatContainer>
        <div>
            <ChatList />
        </div>
        <div>
            <ChatSelected />
            <SendMessage />
        </div>

    </ChatContainer>
  )
}
