import React, { useState, useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import Button from '@material-ui/core/Button';
import {
	emphasize,
	withStyles,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import './Chatbot.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const useStyles = makeStyles((theme) => ({
	chatBot: {
		textAlign: 'center',
		backgroundColor: '#282c34',
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
	},
	chatButton: {
		padding: 0,
		position: 'absolute',
		zIndex: 5,
		top: '-50px',
		right: '10px',
		cursor: 'pointer',
	},
}));

const ChatBott = () => {
	const [showBot, toggleBot] = useState(false);
	const [chatbotheight, setChatbotheight] = useState('250px');
	const [btnshowEl, setBtnshowEl] = useState('none');
	const [btnposition, setBtnposition] = useState('');

	useEffect(() => {
		setTimeout(() => {
			toggleBot(true);
			setBtnshowEl('block');
		}, 5000);
	}, []);

	const classes = useStyles();

	function clickHandler() {
		toggleBot((prev) => !prev);
		if (showBot == true) {
			setChatbotheight('auto');
			setBtnposition('-10px');
		} else {
			setChatbotheight('250px');
			setBtnposition('-50px');
		}
	}

	return (
		<div className="chatBoxres" style={{ height: chatbotheight }}>
			<div
				style={{ height: '100%', position: 'relative' }}
				className="row_full"
			>
				{showBot && (
					<div className="chatBElm">
						<Chatbot
							className={classes.chatBot}
							config={config}
							messageParser={MessageParser}
							actionProvider={ActionProvider}
						/>
					</div>
				)}

				<img
					onClick={clickHandler}
					style={{ display: btnshowEl, top: btnposition }}
					className={classes.chatButton}
					src={`${images_path}drona_chat.png`}
					alt="drona Chat Bot"
				/>
			</div>
		</div>
	);
};

export default ChatBott;
