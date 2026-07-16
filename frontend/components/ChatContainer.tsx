
type ChatContainerProps = {
    messages: string[];
};
export default function ChatContainer({messages}: ChatContainerProps){
    return(
        <section className="flex-1 overflow-y-auto p-6">
            {messages.length === 0 ? (
            <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-gray-900">
                    Welcome to AI Chat
                </h2>
                <p className="mt-3 text-gray-600">
                    Ask me anything to get started.
                </p>
            </div>
            ): (
                <div className="mx-auto max-w-4xl space-y-4">
                    {messages.map((msg, index) => (
                        <div 
                            key={index} 
                            className="rounded-lg bg-blue-100 p-3">
                            <strong>You:</strong> {msg}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}