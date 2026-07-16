import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const messagesContainerRef = useRef(null);

	useEffect(() => {
		const container = messagesContainerRef.current;
		if (!container) return;

		container.scrollTo({
			top: container.scrollHeight,
			behavior: "smooth",
		});
	}, [messages]);

	return (
		<div className="sp-messages" ref={messagesContainerRef}>
			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<div className="sp-messages-empty">
					No messages yet — say hello to start the conversation
				</div>
			)}

			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<Message key={message._id} message={message} />
				))}
		</div>
	);
};
export default Messages;
