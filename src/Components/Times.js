const Times = props => {
	const { children, times } = props;

	return times > 0
		? Array(times)
				.fill()
				.map(() => children)
		: null;
};

export default Times;
