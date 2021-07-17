import React, { useState, useRef, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Viewquestion from './Viewquestion';
import './Addquestion.css';

const Addquestion = () => {
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [problemdata, setProblemdata] = useState('');

	const [openpopUp, setOpenpopUp] = useState(false);

	const [viewdata, setViewdata] = useState('');

	const [paragraphInput, setParagraphInput] = useState([]);
	const [paragraphData, setParagraphData] = useState([]);

	const [correct_Option, setCorrect_Option] = useState([]);

	const [detailsolution, setDetailsolution] = useState('');
	const [selected, setSelected] = useState([]);
	const [tagname, setTagname] = useState([{ tag_name: '', tag_value: '' }]);

	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [examlist, setExamlist] = useState([]);
	const [subexamlist, setSubexamlist] = useState([]);
	const [streamlist, setStreamlist] = useState([]);
	const [classlist, setClasslist] = useState([]);

	const [topiclist, setTopiclist] = useState([]);
	const [subtopiclist, setSubtopiclist] = useState([]);
	const [subjectlist, setSubjectlist] = useState([]);

	const [subsubtopiclist, setSubsubtopiclist] = useState([]);
	const [palist, setPalist] = useState([]);
	const [pdlist, setPdlist] = useState([]);

	const [questionlistdata, setQuestionlistdata] = useState([]);

	const [titleUpdate, setTitleUpdate] = useState('Add Question');

	const [examdata, setExamdata] = useState({
		exam_type_name: '',
		exam_type_id: '',
	});

	const [subexamdata, setSubexamdata] = useState({
		sub_exam_type_name: '',
		sub_exam_type_id: '',
	});

	const [streadata, setStreadata] = useState({
		stream_name: '',
		stream_id: '',
	});

	const [classdata, setClassdata] = useState({
		class_name: '',
		class_id: '',
	});

	const [topicdata, setTopicdata] = useState({
		topic_name: '',
		topic_id: '',
	});

	const [subtopicdata, setSubtopicdata] = useState({
		sub_topic_name: '',
		sub_topic_id: '',
	});

	const [subjectdata, setSubjectdata] = useState({
		subject_name: '',
		subject_id: '',
	});

	const [subsubtopicdata, setSubsubtopicdata] = useState({
		sub_sub_topic_name: '',
		sub_sub_topic_id: '',
	});

	const [padata, setPadata] = useState({
		problem_actual_type_name: '',
		problem_actual_type_id: '',
	});

	const [pddata, setPddata] = useState({
		problem_difficulty_name: '',
		problem_difficulty_id: '',
	});

	const [hideshow, setHideshow] = useState(false);
	const [getData, setGetData] = useState([]);

	useEffect(() => {
		setGetData(getData);
	}, [getData]);

	useEffect(() => {
		setGettoken(gettoken);
		getallexam(gettoken);
		// getallsubexam(gettoken);
		getallstream(gettoken);
		getallclass(gettoken);
		getallsubject(gettoken);
		//getallsubsubtopic(gettoken);
		getallpa(gettoken);
		getallpd(gettoken);
		getallQuestion(gettoken);
	}, [gettoken]);

	const selectOpt = () => {
		setHideshow(!hideshow);
	};

	const getValue = (idd, name) => {
		setHideshow(!hideshow);
		const found = getData.some((el) => el.Editor_id === idd);
		if (!found) setGetData([...getData, { Editor_id: idd, Editor_name: name }]);
		else {
			alert('This option is already added!..');
			return false;
		}
	};

	const removeList = (idd) => {
		const values = [...getData];
		values.splice(idd, 1);
		setGetData(values);
	};

	//--------------------------------------------------------------------------------------------
	//function to add TextInput dynamically
	// const addDefaultOption = (index) => {
	// 	let textInput = paragraphInput;
	// 	textInput.push(
	// 		<div key={index} className="secElm grid_49 mar_b_15">
	// 			<div className="row_full pos_relative">
	// 				Option {index + 1}{' '}
	// 				<a
	// 					className="rmvCls pull-right"
	// 					onClick={() => removeTextInput(index)}
	// 				>
	// 					Remove Option
	// 				</a>
	// 			</div>
	// 			<CKEditor
	// 				className="row_full"
	// 				editor={ClassicEditor}
	// 				config={{
	// 					image: {
	// 						// Configure the available styles.
	// 						styles: ['alignLeft', 'alignCenter', 'alignRight'],
	// 						toolbar: [
	// 							'imageStyle:alignLeft',
	// 							'imageStyle:alignCenter',
	// 							'imageStyle:alignRight',
	// 							'|',
	// 							'resizeImage',
	// 							'|',
	// 							'imageTextAlternative',
	// 						],
	// 					},
	// 					// plugins: [ Essentials ],
	// 					ckfinder: {
	// 						// The URL that the images are uploaded to.
	// 						//   uploadUrl: "/upload",
	// 						uploadUrl: 'http://54.251.156.235:4001/questions/upload',
	// 						//   {"uploaded":true,"url":"2697935-200.png"}

	// 						// Enable the XMLHttpRequest.withCredentials property.
	// 						withCredentials: true,

	// 						// Headers sent along with the XMLHttpRequest to the upload server.
	// 						headers: {
	// 							// "X-CSRF-TOKEN": "CSFR-Token",
	// 							Authorization: gettoken,
	// 						},
	// 					},
	// 				}}
	// 				onChange={(text, editor) => addValues(index, editor)}
	// 			/>
	// 		</div>
	// 	);
	// 	setParagraphInput([...textInput]);
	// 	const correctOption = correct_Option;
	// 	correctOption.push({
	// 		Editor_id: `${index + 1}`,
	// 		Editor_name: 'Option ' + `${index + 1}`,
	// 	});
	// 	console.log(correct_Option, index);
	// 	setCorrect_Option(correctOption);
	// };
	const addTextInput = (index) => {
		let textInput = paragraphInput;
		textInput.push(
			<div key={index} className="secElm grid_49 mar_b_15">
				<div className="row_full pos_relative">
					Option {index + 1}{' '}
					<a
						className="rmvCls pull-right"
						onClick={() => removeTextInput(index)}
					>
						Remove Option
					</a>
				</div>
				<CKEditor
					className="row_full"
					editor={ClassicEditor}
					config={{
						image: {
							// Configure the available styles.
							styles: ['alignLeft', 'alignCenter', 'alignRight'],
							toolbar: [
								'imageStyle:alignLeft',
								'imageStyle:alignCenter',
								'imageStyle:alignRight',
								'|',
								'resizeImage',
								'|',
								'imageTextAlternative',
							],
						},
						// plugins: [ Essentials ],
						 ckfinder: {
						//   // The URL that the images are uploaded to.
						//   //   uploadUrl: "/upload",
						   uploadUrl: "http://54.251.156.235:4001/questions/upload",
						//   //   {"uploaded":true,"url":"2697935-200.png"}

						//   // Enable the XMLHttpRequest.withCredentials property.
						   withCredentials: true,

						//   // Headers sent along with the XMLHttpRequest to the upload server.
						   headers: {
						//     // "X-CSRF-TOKEN": "CSFR-Token",
						     Authorization: gettoken,
						   },
						 },
					}}
					onChange={(text, editor) => addValues(index, editor)}
				/>
			</div>
		);
		setParagraphInput([...textInput]);
		setCorrect_Option([
			...correct_Option,
			{ Editor_id: `${index + 1}`, Editor_name: 'Option ' + `${index + 1}` },
		]);
	};

	//function to remove TextInput dynamically
	const removeTextInput = (index) => {
		alert(index);
		let Input = paragraphInput;
		var value = Input.indexOf(index);

		Input.splice(value, 1);

		setParagraphInput(Input);
		setParagraphData([...paragraphData]);
	};

	const addValues = (index, editor) => {
		const data = editor.getData();
		let dataArray = paragraphData;
		let checkBool = false;
		if (dataArray.length !== 0) {
			dataArray.forEach((element) => {
				if (element.index === index) {
					element.text = data;
					checkBool = true;
				}
			});
		}
		if (checkBool) {
			setParagraphData(dataArray);
		} else {
			dataArray.push({ text: data, index: index });
			setParagraphData(dataArray);
		}
	};

	//-----------------------------------------------------------------------------------------------------
	const streamhandleChange = (event) => {
		const selectedIndex = streamlist[event.target.selectedIndex - 1];
		setStreadata({
			...streadata,
			stream_name: selectedIndex ? selectedIndex.stream_name : '',
			stream_id: selectedIndex ? selectedIndex.stream_id : '',
		});
	};

	const classhandleChange = (event) => {
		const selectedIndex = classlist[event.target.selectedIndex - 1];
		setClassdata({
			...classdata,
			class_name: selectedIndex ? selectedIndex.class_name : '',
			class_id: selectedIndex ? selectedIndex.class_id : '',
		});
	};

	const examhandleChange = (event) => {
		const selectedIndex = examlist[event.target.selectedIndex - 1];
		setExamdata({
			...examdata,
			exam_type_name: selectedIndex ? selectedIndex.exam_type_name : '',
			exam_type_id: selectedIndex ? selectedIndex.exam_type_id : '',
		});
		if (selectedIndex.exam_type_id) {
			getallsubexam(selectedIndex.exam_type_id);
		}
	};

	const subexamhandleChange = (event) => {
		const selectedIndex = subexamlist[event.target.selectedIndex - 1];
		setSubexamdata({
			...subexamdata,
			sub_exam_type_name: selectedIndex ? selectedIndex.sub_exam_type_name : '',
			sub_exam_type_id: selectedIndex ? selectedIndex.sub_exam_type_id : '',
		});
	};

	const subjecthandleChange = (event) => {
		const selectedIndex = subjectlist[event.target.selectedIndex - 1];
		setSubjectdata({
			...subjectdata,
			subject_name: selectedIndex ? selectedIndex.subject_name : '',
			subject_id: selectedIndex ? selectedIndex.subject_id : '',
		});
		if (selectedIndex) {
			subjectwiseTopic(selectedIndex.subject_id);
		}
	};

	const topichandleChange = (event) => {
		const selectedIndex = topiclist[event.target.selectedIndex - 1];
		setTopicdata({
			...topicdata,
			topic_name: selectedIndex ? selectedIndex.topic_name : '',
			topic_id: selectedIndex ? selectedIndex.topic_id : '',
		});
		if (selectedIndex) {
			subjectwiseTopic1(selectedIndex.topic_id);
		}
	};

	const subtopichandleChange = (event) => {
		const selectedIndex = subtopiclist[event.target.selectedIndex - 1];
		setSubtopicdata({
			...subtopicdata,
			sub_topic_name: selectedIndex ? selectedIndex.sub_topic_name : '',
			sub_topic_id: selectedIndex ? selectedIndex.sub_topic_id : '',
		});
		if (selectedIndex) {
			subjectwiseTopic2(selectedIndex.sub_topic_id);
		}
	};

	const subsubtopichandleChange = (event) => {
		const selectedIndex = subsubtopiclist[event.target.selectedIndex - 1];
		setSubsubtopicdata({
			...subsubtopicdata,
			sub_sub_topic_name: selectedIndex ? selectedIndex.sub_sub_topic_name : '',
			sub_sub_topic_id: selectedIndex ? selectedIndex.sub_sub_topic_id : '',
		});
	};

	const pahandleChange = (event) => {
		const selectedIndex = palist[event.target.selectedIndex - 1];
		setPadata({
			...padata,
			problem_actual_type_name: selectedIndex
				? selectedIndex.problem_actual_type_name
				: '',
			problem_actual_type_id: selectedIndex
				? selectedIndex.problem_actual_type_id
				: '',
		});
	};

	const pdhandleChange = (event) => {
		const selectedIndex = pdlist[event.target.selectedIndex - 1];
		setPddata({
			...pddata,
			problem_difficulty_name: selectedIndex
				? selectedIndex.problem_difficulty_name
				: '',
			problem_difficulty_id: selectedIndex
				? selectedIndex.problem_difficulty_id
				: '',
		});
	};

	const tagAddClick = () => {
		setTagname([...tagname, { tag_name: '', tag_value: '' }]);
	};

	const tagnhandleChange = (e, index) => {
		const { name, value } = e.target;
		const list = [...tagname];
		list[index][name] = value;
		setTagname(list);
	};

	const tagRemove = (index) => {
		const list = [...tagname];
		list.splice(index, 1);
		setTagname(list);
	};

	const problem_desData = (e, editor) => {
		setProblemdata(editor.getData());
	};

	const detailSolution = (e, editor) => {
		setDetailsolution(editor.getData());
	};

	const getallstream = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/streams', {
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
				setStreamlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallexam = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/exam-types', {
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
				setExamlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallsubexam = (id) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/exam-types/get-sub-exams/' + id, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setLoader(false);
				setSubexamlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallsubject = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/subjects', {
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
				setSubjectlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallclass = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/classes', {
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
				setClasslist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallsubsubtopic = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/sub-sub-topics', {
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
				setSubsubtopiclist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallpa = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/problem-actual-types', {
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
				setPalist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallpd = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/commons/getProbDifflist', {
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
				setPdlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fireApi = () => {
		const streamInput = {
			// problem_type_name:'problem_type_name',
			stream_id: streadata.stream_id ? streadata.stream_id : '',
			class_id: classdata.class_id ? classdata.class_id : '',
			subject_id: subjectdata.subject_id ? subjectdata.subject_id : '',
			topic_id: topicdata.topic_id ? topicdata.topic_id : '',
			sub_topic_id: subtopicdata.sub_topic_id ? subtopicdata.sub_topic_id : '',
			sub_sub_topic_id: subsubtopicdata.sub_sub_topic_id
				? subsubtopicdata.sub_sub_topic_id
				: '',
			problem_difficulty_id: pddata.problem_difficulty_id
				? pddata.problem_difficulty_id
				: '',
			problem_actual_type_id: padata.problem_actual_type_id
				? padata.problem_actual_type_id
				: '',
			problem_description: problemdata ? problemdata : '',
			multiple_options: JSON.stringify(paragraphData),
			tags: JSON.stringify(tagname),
			correct_options: JSON.stringify(
				getData.map((item) => parseInt(item.Editor_id))
			),
			detailed_solutions: JSON.stringify(detailsolution),
		};
		fetch('http://54.251.156.235:4001/questions', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
			body: JSON.stringify(streamInput),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					clearData();
					getallQuestion(gettoken);
					console.log(responseData.message);
				} else {
					console.log(responseData.message);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const subjectwiseTopic = (idd) => {
		fetch(`http://54.251.156.235:4001/sub-topics/subject-wise-topic/${idd}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setTopiclist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const subjectwiseTopic1 = (idd) => {
		fetch(
			`http://54.251.156.235:4001/sub-sub-topics/topic-wise-sub-topic/${idd}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
			}
		)
			.then((response) => response.json())
			.then((responseData) => {
				setSubtopiclist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const subjectwiseTopic2 = (idd) => {
		fetch(
			`http://54.251.156.235:4001/sub-sub-topics/subtopic-wise-sub-subtopic/${idd}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
			}
		)
			.then((response) => response.json())
			.then((responseData) => {
				setSubsubtopiclist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getallQuestion = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/questions', {
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
				setQuestionlistdata(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateQuestion = (obj) => {
		setTitleUpdate('Update Question');
		setUpdateId(obj.sub_sub_topic_id);

		setStreadata({
			...streadata,
			stream_name: obj.stream_name,
			stream_id: obj.stream_id,
		});

		setClassdata({
			...classdata,
			class_name: obj.class_name,
			class_id: obj.class_id,
		});

		setExamdata({
			...examdata,
			exam_type_name: obj.exam_type_name,
			exam_type_id: obj.exam_type_id,
		});

		setSubexamdata({
			...subexamdata,
			sub_exam_type_name: obj.sub_exam_type_name,
			sub_exam_type_id: obj.sub_exam_type_id,
		});

		setSubjectdata({
			...subjectdata,
			subject_name: obj.subject_name,
			subject_id: obj.subject_id,
		});
		subjectwiseTopic(obj.subject_id);

		setTopicdata({
			...topicdata,
			topic_name: obj.topic_name,
			topic_id: obj.topic_id,
		});

		//subjectwiseTopic1(obj.topic_id);

		setSubtopicdata({
			...subtopicdata,
			sub_topic_name: obj.sub_topic_name,
			sub_topic_id: obj.sub_topic_id,
		});

		setSubsubtopicdata({
			...subsubtopicdata,
			sub_sub_topic_name: obj.sub_sub_topic_name,
			sub_sub_topic_id: obj.sub_sub_topic_id,
		});

		setPddata({
			...pddata,
			problem_difficulty_name: obj.problem_difficulty_name,
			problem_difficulty_id: obj.problem_difficulty_id,
		});

		setPadata({
			...padata,
			problem_actual_type_name: obj.problem_actual_type_name,
			problem_actual_type_id: obj.problem_actual_type_id,
		});
	};

	const removeQuestion = (idd) => {
		fetch(`http://54.251.156.235:4001/questions/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Question deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				getallQuestion(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const editStream = () => {
		const streamInput = { sub_topic_id: subtopicdata.sub_topic_id };
		fetch(`http://54.251.156.235:4001/questions/${updateId}`, {
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
				setErrMsg('Question updated successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);

				getallQuestion(gettoken);
				setUpdateId('');
				cancleUpdate();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate('Add Question');
		setUpdateId('');
	};

	const viewData = (objData) => {
		setOpenpopUp(!openpopUp);
		openpopUp == false ? setViewdata('') : setViewdata(objData);
		setViewdata(objData);
	};

	const clearData = () => {
		/*setStreadata({
			stream_name: '',
			stream_id: '',
		});

		setClassdata({
			class_name: '',
			class_id: '',
		});

		setExamdata({
			exam_type_name: '',
			exam_type_id: '',
		});

		setSubexamdata({
			sub_exam_type_name: '',
			sub_exam_type_id: '',
		});

		setSubjectdata({
			subject_name: '',
			subject_id: '',
		});

		setTopicdata({
			topic_name: '',
			topic_id: '',
		});

		setSubtopicdata({
			sub_topic_name: '',
			sub_topic_id: '',
		});

		setSubsubtopicdata({
			sub_sub_topic_name: '',
			sub_sub_topic_id: '',
		});

		setPadata({
			problem_actual_type_name: '',
			problem_actual_type_id: '',
		});

		setPddata({
			problem_difficulty_name: '',
			problem_difficulty_id: '',
		});*/

		setProblemdata('');
		setParagraphInput([]);
		setCorrect_Option([]);
		setDetailsolution('');
		setGetData([]);
		setTagname([{ tag_name: '', tag_value: '' }]);
	};

	return (
		<div className="row_full pad_t_50">
			{openpopUp ? <Viewquestion action={viewData} data={viewdata} /> : null}
			<div className="container">
				<div className="row_full disp_flex">
					<div className="middleboxArea larger">
						<h3 className="row_full mar_b_20 text-center">{titleUpdate}</h3>
						<div className="row_full adtopic nomar0 mar_b_15 inputAdd">
							<div className="grid_20 pad_r_10">
								<span className="row_full">Stream</span>
								<select
									name="stream_name"
									className="form-control grid_75"
									value={streadata.stream_name}
									onChange={streamhandleChange}
								>
									<option value="">Select stream</option>
									{streamlist.map((txt, index) => (
										<option value={txt.stream_name} key={index}>
											{txt.stream_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Class</span>
								<select
									name="class_name"
									className="form-control grid_75"
									value={classdata.class_name}
									onChange={classhandleChange}
								>
									<option value="">Select class</option>
									{classlist.map((txt, index) => (
										<option value={txt.class_name} key={index}>
											{txt.class_name}
										</option>
									))}
								</select>
							</div>

							<div className="grid_20 pad_r_10">
								<span className="row_full">Exam type</span>
								<select
									name="exam_type_name"
									className="form-control grid_75"
									value={examdata.exam_type_name}
									onChange={examhandleChange}
								>
									<option value="">Select Exam Type</option>
									{examlist.map((txt, index) => (
										<option value={txt.exam_type_name} key={index}>
											{txt.exam_type_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Sub exam type</span>
								<select
									name="sub_exam_type_name"
									className="form-control grid_75"
									value={subexamdata.sub_exam_type_name}
									onChange={subexamhandleChange}
								>
									<option value="">Select Exam Type</option>
									{subexamlist.map((txt, index) => (
										<option value={txt.sub_exam_type_name} key={index}>
											{txt.sub_exam_type_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Subject</span>
								<select
									name="subject_name"
									className="form-control grid_75"
									value={subjectdata.subject_name}
									onChange={subjecthandleChange}
								>
									<option value="">Select subject</option>
									{subjectlist.map((txt, index) => (
										<option value={txt.subject_name} key={index}>
											{txt.subject_name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="row_full adtopic nomar0 mar_b_15 inputAdd">
							<div className="grid_20 pad_r_10">
								<span className="row_full">Chapter</span>
								<select
									name="topic_name"
									className="form-control grid_75"
									value={topicdata.topic_name}
									onChange={topichandleChange}
								>
									<option value="">Select Chapter</option>
									{topiclist.map((txt, index) => (
										<option value={txt.topic_name} key={index}>
											{txt.topic_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Topic</span>
								<select
									name="sub_topic_name"
									className="form-control grid_75"
									value={subtopicdata.sub_topic_name}
									onChange={subtopichandleChange}
								>
									<option value="">Select topic</option>
									{subtopiclist.map((txt, index) => (
										<option value={txt.sub_topic_name} key={index}>
											{txt.sub_topic_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Sub topic</span>
								<select
									name="sub_sub_topic_name"
									className="form-control grid_75"
									value={subsubtopicdata.sub_sub_topic_name}
									onChange={subsubtopichandleChange}
								>
									<option value="">Select sub topic</option>
									{subsubtopiclist.map((txt, index) => (
										<option value={txt.sub_sub_topic_name} key={index}>
											{txt.sub_sub_topic_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Problem Difficulty</span>
								<select
									name="problem_difficulty_name"
									className="form-control grid_75"
									value={pddata.problem_difficulty_name}
									onChange={pdhandleChange}
								>
									<option value="">Select Problem Difficulty</option>
									{pdlist.map((txt, index) => (
										<option value={txt.problem_difficulty_name} key={index}>
											{txt.problem_difficulty_name}
										</option>
									))}
								</select>
							</div>
							<div className="grid_20 pad_r_10">
								<span className="row_full">Problem Actual Type</span>
								<select
									name="problem_actual_type_name"
									className="form-control grid_75"
									value={padata.problem_actual_type_name}
									onChange={pahandleChange}
								>
									<option value="">Select Problem Actual Type</option>
									{palist.map((txt, index) => (
										<option value={txt.problem_actual_type_name} key={index}>
											{txt.problem_actual_type_name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="row_full adtopic nomar0 inputAdd">
							<span className="row_full">Problem description</span>
							<div className="row_full">
								<CKEditor
									editor={ClassicEditor}
									onInit={(editor) => {
										//// Here the editor is ready to be used
									}}
									data={problemdata}
									onChange={problem_desData}
									config={{
										image: {
											// Configure the available styles.
											styles: ['alignLeft', 'alignCenter', 'alignRight'],
											toolbar: [
												'imageStyle:alignLeft',
												'imageStyle:alignCenter',
												'imageStyle:alignRight',
												'|',
												'resizeImage',
												'|',
												'imageTextAlternative',
											],
										},
										// plugins: [ Essentials ],
										ckfinder: {
											style: [{ height: '500px' }],
											// The URL that the images are uploaded to.
											//   uploadUrl: "/upload",
											uploadUrl: 'http://54.251.156.235:4001/questions/upload',
											//   {"uploaded":true,"url":"2697935-200.png"}

											// Enable the XMLHttpRequest.withCredentials property.
											withCredentials: true,

											// Headers sent along with the XMLHttpRequest to the upload server.
											headers: {
												// "X-CSRF-TOKEN": "CSFR-Token",
												Authorization: gettoken,
											},
										},
									}}
								/>
							</div>

							<div className="row_full" style={{ marginTop: '15px' }}>
								<a
									onClick={() => {
										addTextInput(paragraphInput.length);
									}}
									className="pull-right btn custBtn btn-success"
									href="javascript:void(0);"
								>
									Add Option
								</a>
							</div>
						</div>

						{paragraphInput.length > 0 ? (
							<div
								className="row_full adtopic nomar0 inputAdd"
								style={{ marginTop: '15px' }}
							>
								{paragraphInput.map((value) => {
									return value;
								})}
							</div>
						) : null}

						{getData.length > 0 ? (
							<div className="row_full adtopic nomar0 mar_b_15 inputAdd">
								<div className="row_full position_rel">
									<span className="row_full selectedCls mar_b_10">
										<span className="row_full">Correct options</span>
										{getData.map((x, y) => (
											<em key={y} onClick={() => removeList(y)}>
												{x.Editor_name}{' '}
												<i className="fa fa-times" aria-hidden="true"></i>
											</em>
										))}
									</span>
								</div>
							</div>
						) : null}
						{paragraphInput.length > 0 ? (
							<div className="row_full adtopic nomar0 mar_b_15 inputAdd">
								<div className="row_full position_rel">
									<span
										onClick={selectOpt}
										className="row_full multiSelect mar_b_10"
										style={{ paddingLeft: '15px' }}
									>
										Correct options{' '}
										<i
											style={{ paddingTop: '3px' }}
											className="fa pull-right fa-angle-down"
											aria-hidden="true"
										></i>
									</span>
									{hideshow ? (
										<ul className="row_full multiUlElm mar_b_10">
											{correct_Option.map((x, y) => (
												<li
													key={y}
													onClick={() => getValue(x.Editor_id, x.Editor_name)}
												>
													{x.Editor_name}
												</li>
											))}
										</ul>
									) : null}
								</div>
							</div>
						) : null}
						<div className="row_full adtopic nomar0 mar_b_15 inputAdd">
							<span className="row_full">Detailed solutions</span>
							<div className="row_full">
								<CKEditor
									editor={ClassicEditor}
									config={{
										image: {
											// Configure the available styles.
											styles: ['alignLeft', 'alignCenter', 'alignRight'],
											toolbar: [
												'imageStyle:alignLeft',
												'imageStyle:alignCenter',
												'imageStyle:alignRight',
												'|',
												'resizeImage',
												'|',
												'imageTextAlternative',
											],
										},
										// plugins: [ Essentials ],
										ckfinder: {
											// The URL that the images are uploaded to.
											//   uploadUrl: "/upload",
											uploadUrl: 'http://54.251.156.235:4001/questions/upload',
											//   {"uploaded":true,"url":"2697935-200.png"}

											// Enable the XMLHttpRequest.withCredentials property.
											withCredentials: true,

											// Headers sent along with the XMLHttpRequest to the upload server.
											headers: {
												// "X-CSRF-TOKEN": "CSFR-Token",
												Authorization: gettoken,
											},
										},
									}}
									data={detailsolution}
									onChange={detailSolution}
								/>
							</div>
						</div>

						<div
							className="row_full adtopic nomar0 mar_b_15 inputAdd"
							style={{ marginTop: '15px' }}
						>
							<h3 className="row_full">
								Tags{' '}
								<a
									className="pull-right btn btn-success btn-xs"
									href="javascript:void(0);"
									onClick={tagAddClick}
								>
									Add Tags
								</a>
							</h3>
							{tagname.map((x, i) => (
								<div className="row_full mar_b_10">
									<div className="grid_49">
										<input
											type="text"
											name="tag_name"
											value={x.tag_name}
											onChange={(e) => tagnhandleChange(e, i)}
											className="row_full form-control"
											placeholder="Tag Name"
										/>
									</div>

									<div
										className="grid_49"
										style={{ float: 'right', position: 'relative' }}
									>
										<input
											type="text"
											name="tag_value"
											value={x.tag_value}
											onChange={(e) => tagnhandleChange(e, i)}
											className="row_full form-control"
											placeholder="Tag Value"
										/>
										{tagname.length - 1 === i && tagname.length !== 1 ? (
											<i
												style={{
													position: 'absolute',
													top: '15px',
													right: '-15px',
													cursor: 'pointer',
													zIndex: '99',
													color: '#333',
													fontSize: '15px',
												}}
												className="fa fa-times"
												onClick={() => tagRemove(i)}
												aria-hidden="true"
											></i>
										) : null}
									</div>
								</div>
							))}
						</div>

						<div className="row_full adtopic inputAdd">
							<div className="row_full">
								{updateId == '' ? (
									<input
										onClick={fireApi}
										type="submit"
										className="btn custBtn btn-success"
										value="Save Question"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Question"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Question
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="row_full mar_t_35 disp_flex">
					<div className="middleboxArea larger">
						<div className="row_full detailsList listBox">
							{loader ? (
								<span className="loaderBox">
									<i className="fa fa-spinner fa-spin"></i>
									<em>Loading All records please wait...</em>
								</span>
							) : (
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Sr NO.</th>
											<th>Class name</th>
											<th>Subject Name</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{questionlistdata.map((txt, v) => (
											<tr key={v}>
												<td>{v + 1}</td>
												<td>{txt.class_name}</td>
												<td>{txt.subject_name}</td>
												<td>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() => updateQuestion(txt)}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-primary btn-xs"
														onClick={() => viewData(txt)}
														href="javascript:void(0);"
													>
														View
													</a>{' '}
													<a
														className="btnpad btn btn-danger btn-xs"
														href="javascript:void(0);"
														onClick={() => removeQuestion(txt.question_id)}
													>
														Delete
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addquestion;
