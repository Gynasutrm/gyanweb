import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import './Toaster.scss';

const Toaster = () => {
	useEffect(() => {}, []);
	return (
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar
			newestOnTop
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable={false}
			pauseOnHover
		/>
	);
};

export default Toaster;
