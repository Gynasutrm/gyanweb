import { API_URL } from '../../../../common/constant/api-constant';
import _ from 'lodash';
const axios = require('axios');

export const httpGet = (url) => {
	try {
		const finalUrl = API_URL.BASE_URL + url;
		const token = localStorage.getItem('token');
		return fetch(finalUrl, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				return _.size(responseData.data) ? responseData.data : [];
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (e) {
		console.log('Token is invalid or null');
	}
};

export const httpPost = (url, postParam) => {
	try {
		const finalUrl = API_URL.BASE_URL + url;
		const token = localStorage.getItem('token');
		return fetch(finalUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(postParam),
		})
			.then((response) => response.json())
			.then((responseData) => {
				return _.size(responseData.data) ? responseData.data : [];
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (e) {
		console.log('Token is invalid or null');
	}
};
export const getallexam = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/exam-types', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallcourse = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/course-categories', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getalltest = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/tests', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const removeCourselistdata = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(`http://54.251.156.235:4001/courses/${idd}`, {
				method: 'delete',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallclass = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/classes', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return _.size(responseData.data) ? responseData.data : [];
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getAll = async (url, isFront) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			const baseUrl = isFront ? API_URL.BASE_URL_FRONT : API_URL.BASE_URL;
			return fetch(`${baseUrl}${url}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const httpPostAsync = async (url, postParam) => {
	try {
		const finalUrl = API_URL.BASE_URL_FRONT + url;
		const token = await localStorage.getItem('token');
		return fetch(finalUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(postParam),
		})
			.then((response) => response.json())
			.then((responseData) => {
				return responseData;
			})
			.catch((error) => {
				console.error(error);
			});
	} catch (e) {
		console.log('Token is invalid or null');
	}
};
export const httpFilePostAsync = async (url, formData) => {
	try {
		const finalUrl = API_URL.BASE_URL_FRONT + url;
		const token = await localStorage.getItem('token');
		return axios
			.post(finalUrl, formData, {
				headers: {
					'content-type': 'multipart/form-data',
					Authorization: token,
				},
			})
			.then((responseData) => {
				return responseData;
			});
	} catch (e) {
		console.log('Token is invalid or null');
	}
};
export const getallsubject = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/subjects', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};
export const getallstream = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/streams', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallsubexamByexamtypeId = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(
				`http://54.251.156.235:4001/exam-types/get-sub-exams/${idd}`,
				{
					method: 'GEt',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: token,
					},
				}
			)
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallcoursebycategoryId = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(
				`http://54.251.156.235:4001/commons/course-by-category/${idd}`,
				{
					method: 'GEt',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: token,
					},
				}
			)
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallcourseList = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/courses', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getalltesttype = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/test-types', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getalltestseries = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/test-series', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallcourseactivation = async () => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch('http://54.251.156.235:4001/course-activation-codes', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const removetestSeries = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(`http://54.251.156.235:4001/test-series/${idd}`, {
				method: 'delete',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const removecourseactivation = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(
				`http://54.251.156.235:4001/course-activation-codes/${idd}`,
				{
					method: 'delete',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
						Authorization: token,
					},
				}
			)
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const removetest = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(`http://54.251.156.235:4001/tests/${idd}`, {
				method: 'delete',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};

export const getallstateList = async (idd) => {
	try {
		let token = null;
		token = await localStorage.getItem('token');
		if (token != null) {
			return fetch(`http://54.251.156.235:4001/commons/city-list/${idd}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: token,
				},
			})
				.then((response) => response.json())
				.then((responseData) => {
					// console.log(responseData);
					return responseData;
				})
				.catch((error) => {
					console.error(error);
				});
		}
	} catch (e) {}
};
