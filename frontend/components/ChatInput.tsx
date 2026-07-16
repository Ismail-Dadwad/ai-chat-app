"use client"

import {useState, useRef} from "react"

type ChatInputProps = {
        addMessage: (message: string) => void;
    };
export default function ChatInput({addMessage}: ChatInputProps){

    const [message, setMessage] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSend = () =>{
        
        if(!message.trim()) return;

        addMessage(message);
        setMessage("");

        inputRef.current?.focus();
        
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            handleSend();
        }
    }

    return(
        <footer className="border-t bg-white p-4">
            <div className="mx-auto flex max-w-4xl gap-3">
                <input 
                type="text"
                value={message}
                ref={inputRef}
                onChange={(e)=> setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" 
                 />
                 <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700" 
                 onClick={handleSend}>
                    Send
                 </button>
            </div>
        </footer>
    );
}