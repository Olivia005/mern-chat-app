import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useAuthContext } from "../../context/AuthContext";
import Avatar from "../Avatar";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = useSocketContext();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	const isOnline = selectedConversation
		? onlineUsers.includes(selectedConversation._id)
		: false;

	return (
		<div className="sp-chat-panel">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					<div className="sp-chat-header">
						<div className="sp-chat-header-avatar-wrap">
							<Avatar
								name={selectedConversation.fullName}
								size={42}
								className="sp-chat-header-avatar"
							/>
							{isOnline && <span className="sp-online-dot" />}
						</div>
						<div className="sp-chat-header-info">
							<div className="sp-chat-header-name">{selectedConversation.fullName}</div>
							<div className={`sp-chat-header-status ${isOnline ? "online" : "offline"}`}>
								{isOnline ? (
									<>
										<span className="sp-status-dot" />
										Online now
									</>
								) : (
									"Offline"
								)}
							</div>
						</div>
						<div className="sp-encrypted-badge">
							<span className="sp-status-dot" style={{ width: 5, height: 5 }} />
							Encrypted
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();

	return (
		<div className="sp-empty-chat">
			<div className="sp-empty-inner">
				<div className="sp-empty-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
						<path
							d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
							stroke="#fbbf24"
							strokeWidth="1.5"
							fill="rgba(251,191,36,0.1)"
						/>
					</svg>
				</div>
				<h2 className="sp-empty-title">
					Welcome back, <span>{authUser.fullName.split(" ")[0]}</span>
				</h2>
				<p className="sp-empty-sub">
					Select a conversation from the sidebar to start messaging in real time.
				</p>
				<div className="sp-empty-hints">
					<span className="sp-empty-hint">
						<span className="sp-status-dot" />
						Real-time
					</span>
					<span className="sp-empty-hint">
						<span className="sp-status-dot" style={{ background: "#fbbf24", boxShadow: "0 0 6px rgba(251,191,36,0.7)" }} />
						Encrypted
					</span>
					<span className="sp-empty-hint">
						<span className="sp-status-dot" style={{ background: "#00e5ff", boxShadow: "0 0 6px rgba(0,229,255,0.6)" }} />
						Instant
					</span>
				</div>
			</div>
		</div>
	);
};
