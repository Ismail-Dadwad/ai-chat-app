type MessageBubbleProps = {
    text: string;
}

export default function MessageBubble({text}: MessageBubbleProps){
    return (
        <div className="rounded-lg bg-blue-100 p-3 text-black">
            <strong>You:</strong> {text}
        </div>
    )
}