import React, { useState, useRef, useEffect } from 'react';
import './AddUser.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const AddUser = (userid) => {
	const [userType, setUserType] = useState({
		user_type_name: '',
		user_type_id: '',
	});

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add sub exam type',
		type: 'Select Exam Type',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [usertypelist, setUserTypelist] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallsubexamtype(gettoken);
		getallusertype(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};

	const handleChange = (event) => {
		// console.log('value',event.target.value)
		// console.log('key',event.target.selectedIndex)
		setUserType({
			...userType,
			user_type_name:
				usertypelist[event.target.selectedIndex - 1].user_type_name,
			user_type_id: usertypelist[event.target.selectedIndex - 1].user_type_id,
		});
	};

	const getallsubexamtype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/sub-exam-types', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: data,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setLoader(false);
				setList(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallusertype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/commons/user-type-list', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: data,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setLoader(false);
				setUserTypelist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate({ name: 'Add sub exam type', type: 'Select Exam Type' });
		setUpdateId('');
		setSub_exam_type_name('');
	};

	// const addsubexamtype = () => {
	//     if(subexamtype.exam_type_name=='' && subexamtype.exam_type_name.length==0){
	//         setErrMsg('Please select sub exam type.');
	//         setTimeout(()=>{
	//             setErrMsg('');
	//         },1500);
	//         return false;
	//     }else if(sub_exam_type_name=='' && sub_exam_type_name.length==0){
	//         setErrMsg('Please Add sub exam type.');
	//         setTimeout(()=>{
	//             setErrMsg('');
	//         },1500);
	//         return false;
	//     }else{
	//         if(!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)){
	//             setErrMsg('Please enter valid sub exam type.');
	//             setTimeout(()=>{
	//                 setErrMsg('');
	//             },1000);
	//             setSubexamtype({
	//                 exam_type_name:"",
	//                 exam_type_id:""
	//             });
	//             setSub_exam_type_name('');
	//             return false;
	//         }

	//         const streamInput = {exam_type_name:subexamtype.exam_type_name,sub_exam_type_name: sub_exam_type_name,exam_type_id:subexamtype.exam_type_id}
	//         console.log('hi... ',streamInput);

	//         fetch("http://54.251.156.235:4001/sub-exam-types", {
	//             method: 'POST',
	//             headers: {'Accept': 'application/json','Content-Type': 'application/json','Authorization':gettoken},
	//             body: JSON.stringify(streamInput)
	//         })
	//         .then((response) => response.json())
	//         .then((responseData) => {
	//                 if(responseData.statusCode==200){
	//                     setSubexamtype({
	//                         exam_type_name:"",
	//                         exam_type_id:""
	//                     });
	//                     setSub_exam_type_name('');
	//                     getallsubexamtype(gettoken);
	//                 }else{
	//                     setErrMsg(responseData.message);
	//                     setSubexamtype({
	//                         exam_type_name:"",
	//                         exam_type_id:""
	//                     });
	//                     setSub_exam_type_name('');
	//                     setTimeout(()=>{
	//                         setErrMsg('');
	//                     },1000)
	//                 }
	//         })
	//         .catch((error) =>{
	//             console.error(error);
	//         })
	//     }
	// }

	const removeStream = (idd) => {
		fetch(`http://54.251.156.235:4001/sub-exam-types/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Sub Exam deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				getallsubexamtype(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateStream = (idd, name, examTypeName, examTypeId) => {
		setTitleUpdate({ name: 'Update sub exam type', type: 'Select Exam Type' });
		setSub_exam_type_name(name);
		setUpdateId(idd);

		// setSubexamtype({
		//     ...subexamtype,
		//     exam_type_name:examTypeName,
		//     exam_type_id:examTypeId
		// })
	};

	const editStream = () => {
		if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please enter to Update Sub Exam.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid exam.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				// setSubexamtype({
				//     exam_type_name:"",
				//     exam_type_id:""
				// });
				setSub_exam_type_name('');
				return false;
			}
			const streamInput = { sub_exam_type_name: sub_exam_type_name };
			console.log(streamInput);
			fetch(`http://54.251.156.235:4001/sub-exam-types/${updateId}`, {
				method: 'PATCH',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
				body: JSON.stringify(streamInput),
			})
				.then((response) => response.json())
				.then((responseData) => {
					setErrMsg('Exam updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					getallsubexamtype(gettoken);
					setUpdateId('');
					setSub_exam_type_name('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	return (
		<div className="row_full">
			<div className="container">
				<div className="row_full disp_flex">
					<div className="middleboxArea">
						<h3 className="row_full mar_b_20 text-left">
							Select Registration Type
						</h3>
						<div className="row_full adtopic mar_b_15 inputAdd">
							<select
								name="exam_type_name"
								className="form-control grid_100"
								value={userType.user_type_name}
								onChange={handleChange}
							>
								<option value="">Select Registration Type</option>
								{usertypelist.map((txt, index) => (
									<option value={txt.user_type_name} key={index}>
										{txt.user_type_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic inputAdd">
							<span>&nbsp;</span>
							<div className="grid_75 text-right">
								<input
									type="submit"
									className="btn custBtn btn-success"
									value="Add New"
								/>
							</div>
							{errMsg ? <p className="errTag">{errMsg}</p> : null}
						</div>
					</div>
				</div>

				<div className="row_full mar_t_35 disp_flex">
					<div className="middleboxArea larger">
						<div className="row_full detailsList listBox">
							<b>{userType.user_type_name}</b>

							{loader ? (
								<span className="loaderBox">
									<i className="fa fa-spinner fa-spin"></i>
									<em>Loading All records please wait...</em>
								</span>
							) : (
								<ul className="row_full">
									<li>
										<span className="grid_8">Sr NO.</span>
										<span className="grid_30">Exam Name</span>
										<span className="grid_30">Sub Exam Name</span>
										<span className="grid_30">Action</span>
									</li>
									{list.map((txt, v) => (
										<li key={v}>
											<span className="grid_8">{v + 1}</span>
											<span className="grid_30">{txt.exam_type_name}</span>
											<span className="grid_30">{txt.sub_exam_type_name}</span>
											<span className="grid_30">
												<a
													className="btnpad btn btn-success btn-xs"
													onClick={() =>
														updateStream(
															txt.sub_exam_type_id,
															txt.sub_exam_type_name,
															txt.exam_type_name,
															txt.exam_type_id
														)
													}
													href="javascript:void(0);"
												>
													Edit
												</a>{' '}
												<a
													className="btnpad btn btn-alert btn-xs"
													href="javascript:void(0);"
													onClick={() => removeStream(txt.sub_exam_type_id)}
												>
													Delete
												</a>
											</span>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
