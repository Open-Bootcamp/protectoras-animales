import { ChatCard } from '../ChatCard';

export const ChatList = ({ setActivateView }) => {


  const chatCards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {
        chatCards.map((chat, index) => (
          <ChatCard setActivateView={setActivateView} />
        ))
      }
    </>
  )
}
