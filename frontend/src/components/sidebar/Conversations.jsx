import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();

	return (
		<div className="sp-conversations">
			{conversations.map((conversation) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
				/>
			))}

			{loading && (
				<div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
					<span className="sp-spinner" />
				</div>
			)}
		</div>
	);
};
export default Conversations;
