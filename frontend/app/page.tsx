"use client"

import {useState} from "react"
import Header from  "@/components/Header";
import ChatContainer from "@/components/ChatContainer";
import ChatInput from "@/components/ChatInput";

export default function Home(){

  type Message = {
    text : string,
    sender: "user" | "ai",
  }

  const [messages, setMessages] = useState<Message[]>([])

  const addMessage = (message: string) =>{
    setMessages((prev) => [...prev, {text: message, sender: "user",},]);
  }
  return(
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header/>
      <ChatContainer messages={messages} />
      <ChatInput addMessage={addMessage} />
    </main>
  );
}