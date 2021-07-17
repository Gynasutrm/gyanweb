export function isLoggedIn() {
	return !!localStorage.getItem('roles') && !!localStorage.getItem('token');
}
export function isAdminLoggedIn() {
	return (
		!!localStorage.getItem('token') && localStorage.getItem('roles') === '6'
	);
}
export function isArrayWithLength(arr) {
	return Array.isArray(arr) && arr.length;
}

export function getAllowedRoutes(routes, key) {
	// const roles = JSON.parse(localStorage.getItem('roles'));

	const roles = localStorage.getItem('roles');
	return routes.filter(({ permission }) => {
		if (!permission) {
			return true;
		} else if (!isArrayWithLength(permission)) {
			return true;
		} else {
			return permission.includes(roles);
		}
	});
}
