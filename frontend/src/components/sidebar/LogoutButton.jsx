import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<button type="button" className="sp-logout-btn" onClick={logout} disabled={loading}>
			{loading ? (
				<span className="sp-spinner" />
			) : (
				<>
					<BiLogOut size={17} />
					Sign out
				</>
			)}
		</button>
	);
};
export default LogoutButton;
