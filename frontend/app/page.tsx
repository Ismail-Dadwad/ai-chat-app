"use client"

import {useState} from "react"
import Header from  "@/components/Header";
import ChatContainer from "@/components/ChatContainer";
import ChatInput from "@/components/ChatInput";

export default function Home(){
  const [messages, setMessages] = useState<string[]>([])

  const addMessage = (message: string) =>{
    setMessages((prev) => [...prev, message]);
  }
  return(
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header/>
      <ChatContainer messages={messages} />
      <ChatInput addMessage={addMessage} />
    </main>
  );
}