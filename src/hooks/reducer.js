export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				...state,
				userInfo: action.payload,
			};
		default:
			throw new Error();
	}
};
