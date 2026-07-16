import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<div className="sp-input-area">
			<form className="sp-input-form" onSubmit={handleSubmit}>
				<div className="sp-input-wrap">
					<input
						type="text"
						className="sp-msg-input"
						placeholder="Type a message…"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<button type="submit" className="sp-send-btn" disabled={loading} aria-label="Send message">
					{loading ? <span className="sp-spinner" style={{ width: 16, height: 16, borderWidth: 2 }} /> : <BsSend size={17} />}
				</button>
			</form>
		</div>
	);
};
export default MessageInput;
