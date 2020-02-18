import React from 'react';

interface Props {
	times: number;
}

const Times: React.FC<Props> = props => {
	const { children, times } = props;

	return (
		<>
			{times > 0
				? Array(times)
						.fill(0)
						.map(() => children)
				: null}
		</>
	);
};

export default Times;
