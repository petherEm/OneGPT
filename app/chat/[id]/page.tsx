import React from "react";
import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

type Props = {
  params: {
    id: string;
  }
}

const ChatPage = ({ params: { id }}: Props) => {
 
  return <div className="text-white flex flex-col w-full min-h-screen h-auto overflow-hidden">

    {/* Chat  */}
    <Chat chatId={id} />

    {/* ChatInput */}
    <ChatInput chatId={id} />
    
  </div>;
};

export default ChatPage;
