import { useAuthContext } from "../../context/AuthContext";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import Avatar from "../Avatar";

const Sidebar = () => {
	const { authUser } = useAuthContext();

	return (
		<div className="sp-sidebar">
			<div className="sp-sidebar-header">
				<div className="sp-logo-box">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
						<defs>
							<linearGradient id="sidebarLogoGrad" x1="0" y1="0" x2="24" y2="24">
								<stop offset="0%" stopColor="#fde047" />
								<stop offset="100%" stopColor="#fb923c" />
							</linearGradient>
						</defs>
						<path
							d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
							fill="url(#sidebarLogoGrad)"
						/>
					</svg>
				</div>
				<span className="sp-wordmark">Sleipner</span>
			</div>

			<div className="sp-user-card">
				<Avatar name={authUser.fullName} size={36} className="sp-user-avatar" />
				<div className="sp-user-info">
					<div className="sp-user-name">{authUser.fullName}</div>
					<div className="sp-user-status">
						<span className="sp-status-dot" />
						You&apos;re online
					</div>
				</div>
			</div>

			<SearchInput />
			<div className="sp-sidebar-label">Conversations</div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
