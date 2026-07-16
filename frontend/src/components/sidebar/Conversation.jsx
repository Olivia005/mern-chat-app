import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
import Avatar from "../Avatar";

const Conversation = ({ conversation, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<div
			className={`sp-conv-item ${isSelected ? "active" : ""}`}
			onClick={() => setSelectedConversation(conversation)}
		>
			<div className="sp-conv-avatar-wrap">
				<Avatar name={conversation.fullName} size={44} className="sp-conv-avatar" />
				{isOnline && <span className="sp-online-dot" />}
			</div>

			<div className="sp-conv-body">
				<div className="sp-conv-name">{conversation.fullName}</div>
				<div className="sp-conv-username">@{conversation.username}</div>
			</div>

			<span className="sp-conv-emoji">{emoji}</span>
		</div>
	);
};
export default Conversation;
