import React, { useState, useRef, useEffect } from "react";
import * as api from "./../../../../Global/apiHelper/Apihelper";
import { useLocation } from "react-router-dom";
import "./courseActivation.scss";
import _ from "lodash";

const CourseActivation = (props) => {
  const { state } = useLocation();
  const [loader, setLoader] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [courseactivationdata, setCourseactivationdata] = useState([]);

  const [gettoken, setGettoken] = useState(localStorage.getItem("token"));
  const [courseCategoryList, setCourseCategoryList] = useState([]);
  const [courseNameList, setCourseNameList] = useState([]);

  const [courseActivationData, setCourseActivationData] = useState({
    course_category_name: "",
    course_category_id: "",
    course_name: "",
    course_id: "",
  });

  useEffect(() => {
    getAllCourse();
  }, []);

  const handleInputChange = (event) => {
    setCourseActivationData({
      ...courseActivationData,
      activation_code: event.target.value,
    });
  };

  const handleCourseCategoryChange = (event) => {
    const value = event.target.value;
    const selectedCategory = courseCategoryList.filter(
      (item) => item.course_category_id == value
    );
    setCourseActivationData({
      ...courseActivationData,
      course_category_name: selectedCategory[0].course_category_name,
      course_category_id: selectedCategory[0].course_category_id,
    });
    getCourseListByCategoryId(value);
  };

  const handleCorseNameChange = (event) => {
    const value = event.target.value;
    const selectedCourse = courseNameList.filter(
      (item) => item.course_id == value
    );
    setCourseActivationData({
      ...courseActivationData,
      course_name: selectedCourse[0].course_name,
      course_id: selectedCourse[0].course_id,
    });
  };
  const checkDisable = () => {
    console.log("checkDisable");
    for (const key in courseActivationData) {
      if (_.isEmpty(courseActivationData[key])) {
        return true;
      }
    }
    return false;
  };
  const handleActivateCourse = () => {
    const streamInput = {
      user_id: state.user_id,
      activation_code: courseActivationData.activation_code,
    };
    const token = localStorage.getItem("token");
    fetch("http://54.251.156.235:4001/course-activation-codes/activate-code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: gettoken,
      },
      body: JSON.stringify(streamInput),
    })
      .then((response) => response.json())
      .then((responseData) => {
        props.history.push({
          pathname: "/global/registration/viewuser",
          state: {
            user_id: state.user_id,
          },
        });
        if (responseData.statusCode === 200) {
          props.history.push({
            pathname: "/global/registration/viewuser",
            state: {
              user_id: state.user_id,
            },
          });
        } else {
          alert(responseData.message);
        }
      });
  };
  async function getCourseListByCategoryId(idd) {
    try {
      let response = await api.getallcoursebycategoryId(idd);
      if (response.statusCode == 203) {
        alert("Course not available for this Course category");
        setCourseActivationData({
          course_category_name: "",
          course_category_id: "",
        });
        return false;
      } else {
        setCourseNameList(response.data);
      }
    } catch (e) {}
  }

  async function getAllCourse() {
    setLoader(true);
    try {
      let response = await api.getallcourse();
      setLoader(false);
      setCourseCategoryList(response.data);
    } catch (e) {}
  }

  return (
    <div className="row_full">
      <div className="container">
        <div className="row_full disp_flex">
          <div className="middleboxArea larger">
            <h3 className="row_full mar_b_20 text-center">Course Activation</h3>
            <div className="row_full mar_b_15 adtopic  d-flex justify-content-between">
              <div className="grid_32">
                <span className="row_full w-100">Course category</span>
                <select
                  name="course_category_name"
                  className="form-control row_full"
                  value={courseActivationData.course_category_id}
                  onChange={handleCourseCategoryChange}
                >
                  <option value="">Select course category</option>
                  {courseCategoryList.map((txt, index) => (
                    <option value={txt.course_category_id} key={index}>
                      {txt.course_category_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid_32">
                <span className="row_full w-100">Course Name</span>
                <select
                  name="course_name"
                  className="form-control row_full"
                  value={courseActivationData.course_id}
                  onChange={handleCorseNameChange}
                >
                  <option value="">Select course name</option>
                  {courseNameList.map((txt, index) => (
                    <option value={txt.course_id} key={index}>
                      {txt.course_name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid_32">
                <span className="row_full w-100">Activation Code</span>
                <input
                  type="text"
                  name="activation_code"
                  value={courseActivationData.activation_code}
                  onChange={handleInputChange}
                  className="row_full form-control"
                  placeholder="Activation Code"
                />
              </div>
            </div>
            <div className="row_full mar_b_15 d-flex justify-content-end">
              <button type="button" className="btn custBtn btn-success">
                <span className="pl-2 pr-2" onClick={handleActivateCourse}>
                  Activate
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseActivation;
