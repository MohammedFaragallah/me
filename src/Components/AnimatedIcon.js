import Lottie from 'lottie-react-web';
import React from 'react';

import animationData from './AnimatedDownload.json';

//? alternative https://github.com/useAnimations/react-useanimations

export const AnimatedIcon = () => {
	return (
		<Lottie
			options={{
				loop: true,
				autoplay: true,
				animationData,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid slice',
				},
			}}
			height={25}
			width={25}
			isStopped={false}
			isPaused={false}
			eventListeners={[
				{
					eventName: 'loopComplete',
					callback: () => console.log('loopComplete'),
				},
			]}
		/>
	);
};
