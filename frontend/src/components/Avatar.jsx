/**
 * Avatar – renders a black circle with the user's initials.
 * No external service dependency whatsoever.
 *
 * Props:
 *   name  {string}  – full name used to extract initials
 *   size  {number}  – diameter in px (default 44)
 *   className {string} – extra CSS class (optional)
 */
const Avatar = ({ name = "", size = 44, className = "" }) => {
	// Pick up to 2 initials: first letter of first word + first letter of last word
	const parts = name.trim().split(/\s+/).filter(Boolean);
	const initials =
		parts.length >= 2
			? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
			: (parts[0]?.[0] ?? "?").toUpperCase();

	const fontSize = Math.round(size * 0.38);

	return (
		<span
			className={`sp-initials-avatar ${className}`}
			style={{ width: size, height: size, fontSize }}
			aria-label={name}
		>
			{initials}
		</span>
	);
};

export default Avatar;
