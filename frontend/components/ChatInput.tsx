export default function ChatInput(){
    return(
        <footer className="border-t bg-white p-4">
            <div className="mx-auto flex max-w-4xl gap-3">
                <input 
                type="text" 
                name="" 
                id="" 
                placeholder="Type your message..."
                className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" 
                 />
                 <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                    Send
                 </button>
            </div>
        </footer>
    );
}