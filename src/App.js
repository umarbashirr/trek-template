import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const LoadingTime = setInterval(() => {
			setIsLoading(false);
		}, 4000);

		return () => {
			clearInterval(LoadingTime);
		};
	}, []);

	if (isLoading) {
		return <h1>Loading....</h1>;
	}

	return (
		<>
			<Navbar />
		</>
	);
};

export default App;
