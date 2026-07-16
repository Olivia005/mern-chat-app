const MessageSkeleton = () => {
	return (
		<>
			<div className="sp-msg-row received">
				<div className="sp-skeleton sp-skel-avatar" />
				<div className="sp-msg-content">
					<div className="sp-skeleton sp-skel-line" style={{ width: 180 }} />
					<div className="sp-skeleton sp-skel-line" style={{ width: 120, marginTop: 6 }} />
				</div>
			</div>
			<div className="sp-msg-row sent">
				<div className="sp-skeleton sp-skel-avatar" />
				<div className="sp-msg-content">
					<div className="sp-skeleton sp-skel-line" style={{ width: 160 }} />
				</div>
			</div>
		</>
	);
};
export default MessageSkeleton;
