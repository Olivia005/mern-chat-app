import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import Avatar from "../Avatar";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const shakeClass = message.shouldShake ? "shake" : "";

	// Pick the correct name for the avatar
	const avatarName = fromMe ? authUser.fullName : selectedConversation?.fullName ?? "";

	return (
		<div className={`sp-msg-row ${fromMe ? "sent" : "received"}`}>
			<Avatar name={avatarName} size={32} className="sp-msg-avatar" />
			<div className="sp-msg-content">
				<div className={`sp-msg-bubble ${shakeClass}`}>{message.message}</div>
				<span className="sp-msg-time">{formattedTime}</span>
			</div>
		</div>
	);
};
export default Message;
