import Header from  "@/components/Header";
import ChatContainer from "@/components/ChatContainer";
import ChatInput from "@/components/ChatInput";

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col bg-gray-100">
      <Header/>
      <ChatContainer />
      <ChatInput />
    </main>
  );
}