import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../styles/chatTheme.css";

const Home = () => {
	return (
		<div className="sp-chat-root">
			<div className="sp-chat-bg" />
			<div className="sp-chat-orb sp-chat-orb-amber" />
			<div className="sp-chat-orb sp-chat-orb-cyan" />
			<div className="sp-chat-shell">
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
