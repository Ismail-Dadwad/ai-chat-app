type MessageBubbleProps = {
    text: string,
    sender: "user" | "ai",
}

export default function MessageBubble({text, sender}: MessageBubbleProps){
    return (
        <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-md rounded-lg p-3 ${sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}>
                <strong>{sender === "user" ? "You" : "Ai"}:</strong> {text}
            </div>
        </div>
    )
}