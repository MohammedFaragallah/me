import Lottie from 'lottie-react-web';
import React from 'react';

import animationData from './AnimatedDownload.json';

//? alternative https://github.com/useAnimations/react-useanimations

export const AnimatedIcon = () => {
	return (
		<Lottie
			eventListeners={[
				{
					eventName: 'loopComplete',
					callback: () => console.log('loopComplete'),
				},
			]}
			height={25}
			isPaused={false}
			isStopped={false}
			options={{
				loop: true,
				autoplay: true,
				animationData,
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid slice',
				},
			}}
			width={25}
		/>
	);
};
