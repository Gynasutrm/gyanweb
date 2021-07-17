import React, { useState, useRef, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import * as api from "../../apiHelper/Apihelper";
import "./Test.css";

const Test = () => {
  const [loader, setLoader] = useState(false);
  const [testUpdateId, setTestUpdateId] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [editordata, setEditordata] = useState({ test_instruction: "" });
  const [testlistdata, setTestlistdata] = useState([]);
  const [testseriesList, setTestseriesList] = useState([]);

  const [testTitleUpdate, setTestTitleUpdate] = useState("Add Test");

  const [testdata, setTestdata] = useState({
    test_series_name: "",
    test_series_id: "",
  });

  const [formData, setFormData] = useState({
    test_name: "",
    test_start_date: "",
    test_end_date: "",
    test_time: "",
    test_duration: "",
    test_total_marks: "",
    test_passing_marks: "",
    test_negative_marking: "",
    test_total_question: "",
  });

  const [gettoken, setGettoken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    getalltestseries();
    getalltest();
  }, []);

  const testserieshandleChange = (event) => {
    setTestdata({
      ...testdata,
      test_series_name:
        testseriesList[event.target.selectedIndex - 1].test_series_name,
      test_series_id:
        testseriesList[event.target.selectedIndex - 1].test_series_id,
    });
  };

  const formDatahandleChange = (event) => {
    const { name, value } = event.target;
    const list = { ...formData };
    list[name] = value;
    setFormData(list);
  };

  async function getalltestseries() {
    setLoader(true);
    try {
      let response = await api.getalltestseries();
      setLoader(false);
      setTestseriesList(response.data);
    } catch (e) {}
  }

  async function getalltest() {
    setLoader(true);
    try {
      let response = await api.getalltest();
      setLoader(false);
      setTestlistdata(response.data);
    } catch (e) {}
  }

  async function removetest(idd) {
    try {
      let response = await api.removetest(idd);
      setErrMsg("Test deleted successfully.");
      setTimeout(() => {
        setErrMsg("");
      }, 1500);
      getalltest();
    } catch (e) {}
  }

  const fireTestApi = () => {
    if (testdata.test_series_name == "") {
      setErrMsg("Please select test series name.");
      setTimeout(() => {
        setErrMsg("");
      }, 1500);
      return false;
    } else {
      const streamInput = {
        test_series_id: testdata.test_series_id,
        test_name: formData.test_name,
        test_start_date: formData.test_start_date,
        test_end_date: formData.test_end_date,
        test_time: formData.test_time,
        test_duration: formData.test_duration,
        test_total_marks: formData.test_total_marks,
        test_passing_marks: formData.test_passing_marks,
        test_negative_marking: formData.test_negative_marking,
        test_total_question: formData.test_total_question,
        test_instruction: JSON.stringify(editordata.test_instruction),
      };

      fetch("http://54.251.156.235:4001/tests", {
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
          if (responseData.statusCode == 200) {
            clearData();
            getalltest();
          } else {
            console.log(responseData.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const updateTestCourse = (obj) => {
    setTestTitleUpdate("Update Test");
    setTestUpdateId(obj.test_id);

    setFormData({
      test_name: obj.test_name,
      test_start_date: obj.test_start_date,
      test_end_date: obj.test_end_date,
      test_time: obj.test_time,
      test_duration: obj.test_duration,
      test_total_marks: obj.test_total_marks,
      test_passing_marks: obj.test_passing_marks,
      test_negative_marking: obj.test_negative_marking,
      test_total_question: obj.test_total_question,
    });

    setTestdata({
      test_series_name: obj.test_series_name,
      test_series_id: obj.test_series_id,
    });

    setEditordata({ test_instruction: obj.test_instruction });
    console.log(editordata.test_instruction);
  };

  const editTestStream = () => {
    if (testdata.test_series_name == "") {
      setErrMsg("Please select test series name.");
      setTimeout(() => {
        setErrMsg("");
      }, 1500);
      return false;
    } else {
      const streamInput = {
        test_series_id: testdata.test_series_id,
        test_name: formData.test_name,
        test_start_date: formData.test_start_date,
        test_end_date: formData.test_end_date,
        test_time: formData.test_time,
        test_duration: formData.test_duration,
        test_total_marks: formData.test_total_marks,
        test_passing_marks: formData.test_passing_marks,
        test_negative_marking: formData.test_negative_marking,
        test_total_question: formData.test_total_question,
        test_instruction: JSON.stringify(editordata.test_instruction),
      };

      fetch(`http://54.251.156.235:4001/tests/${testUpdateId}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: gettoken,
        },
        body: JSON.stringify(streamInput),
      })
        .then((response) => response.json())
        .then((responseData) => {
          setErrMsg("Test updated successfully.");
          setTimeout(() => {
            setErrMsg("");
          }, 1500);

          clearData();
          getalltest();
          setTestUpdateId("");
          cancleTestUpdate();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const cancleTestUpdate = () => {
    setTestTitleUpdate("Add Test");
    clearData();
    setTestUpdateId("");
  };

  const detailSolution = (e, editor) => {
    setEditordata({ test_instruction: editor.getData() });
  };

  const clearData = () => {
    setFormData({
      test_name: "",
      test_start_date: "",
      test_end_date: "",
      test_time: "",
      test_duration: "",
      test_total_marks: "",
      test_passing_marks: "",
      test_negative_marking: "",
      test_total_question: "",
    });

    setTestdata({
      test_series_name: "",
      test_series_id: "",
    });

    setEditordata({ test_instruction: "" });
  };

  return (
    <div className="row_full">
      <div className="container">
        <div className="row_full disp_flex">
          <div className="middleboxArea larger">
            <h3 className="row_full mar_b_20 text-center">{testTitleUpdate}</h3>

            <div className="row_full mar_b_15 adtopic">
              <div className="grid_49">
                <span className="row_full">Test series</span>
                <select
                  name="test_series_name"
                  className="form-control row_full"
                  value={testdata.test_series_name}
                  onChange={testserieshandleChange}
                >
                  <option value="">Select test series</option>
                  {testseriesList.map((txt, index) => (
                    <option value={txt.test_series_name} key={index}>
                      {txt.test_series_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid_49" style={{ float: "right" }}>
                <span className="row_full">Test name</span>
                <input
                  type="text"
                  name="test_name"
                  value={formData.test_name}
                  onChange={formDatahandleChange}
                  className="row_full form-control"
                  placeholder="Test name"
                />
              </div>
            </div>

            <div className="row_full adtopic">
              <div className="grid_49 mar_b_15">
                <div className="row_full position_rel">
                  <div className="row_full position_rel">
                    <span className="row_full">Test start date</span>
                    <input
                      type="date"
                      name="test_start_date"
                      value={formData.test_start_date}
                      onChange={formDatahandleChange}
                      className="row_full form-control"
                      placeholder="Test start date"
                    />
                  </div>
                </div>
              </div>

              <div className="grid_49 mar_b_15" style={{ float: "right" }}>
                <span className="row_full">Test end date</span>
                <input
                  type="date"
                  name="test_end_date"
                  value={formData.test_end_date}
                  onChange={formDatahandleChange}
                  className="row_full form-control"
                  placeholder="Test end date"
                />
              </div>
            </div>

            <div className="row_full adtopic">
              <div className="grid_49 mar_b_15">
                <div className="row_full position_rel">
                  <div className="row_full position_rel">
                    <span className="row_full">Test time</span>
                    <input
                      type="text"
                      name="test_time"
                      value={formData.test_time}
                      onChange={formDatahandleChange}
                      className="row_full form-control"
                      placeholder="Test time"
                    />
                  </div>
                </div>
              </div>

              <div className="grid_49 mar_b_15" style={{ float: "right" }}>
                <span className="row_full">Test duration</span>
                <input
                  type="text"
                  name="test_duration"
                  value={formData.test_duration}
                  onChange={formDatahandleChange}
                  className="row_full form-control"
                  placeholder="Test duration"
                />
              </div>
            </div>

            <div className="row_full adtopic">
              <div className="grid_49 mar_b_15">
                <div className="row_full position_rel">
                  <div className="row_full position_rel">
                    <span className="row_full">Test total marks</span>
                    <input
                      type="text"
                      name="test_total_marks"
                      value={formData.test_total_marks}
                      onChange={formDatahandleChange}
                      className="row_full form-control"
                      placeholder="Test total marks"
                    />
                  </div>
                </div>
              </div>

              <div className="grid_49 mar_b_15" style={{ float: "right" }}>
                <span className="row_full" style={{ width: "100%" }}>
                  Test passing marks
                </span>
                <input
                  type="text"
                  name="test_passing_marks"
                  value={formData.test_passing_marks}
                  onChange={formDatahandleChange}
                  className="row_full form-control"
                  placeholder="Test passing marks"
                />
              </div>
            </div>

            <div className="row_full adtopic">
              <div className="grid_49 mar_b_15">
                <div className="row_full position_rel">
                  <div className="row_full position_rel">
                    <span className="row_full" style={{ width: "100%" }}>
                      Test negative marking
                    </span>
                    <input
                      type="text"
                      name="test_negative_marking"
                      value={formData.test_negative_marking}
                      onChange={formDatahandleChange}
                      className="row_full form-control"
                      placeholder="Test negative marking"
                    />
                  </div>
                </div>
              </div>

              <div className="grid_49 mar_b_15" style={{ float: "right" }}>
                <span className="row_full" style={{ width: "100%" }}>
                  Test total question
                </span>
                <input
                  type="text"
                  name="test_total_question"
                  value={formData.test_total_question}
                  onChange={formDatahandleChange}
                  className="row_full form-control"
                  placeholder="Test total question"
                />
              </div>
            </div>

            <div className="row_full adtopic">
              <div className="row_full mar_b_15">
                <span className="row_full" style={{ width: "100%" }}>
                  Test instruction
                </span>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    entities: false,
                    basicEntities: false,

                    // plugins: [ Essentials ],
                    ckfinder: {
                      // The URL that the images are uploaded to.
                      //   uploadUrl: "/upload",
                      uploadUrl: "http://54.251.156.235:4001/questions/upload",
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
                  data={editordata.test_instruction}
                  onChange={detailSolution}
                />
              </div>

              <span>{editordata.test_instruction}</span>
            </div>

            <div className="row_full adtopic inputAdd">
              {errMsg ? (
                <p className="row_full errTag" style={{ marginBottom: "15px" }}>
                  {errMsg}
                </p>
              ) : null}
              <div className="row_full">
                {testUpdateId == "" ? (
                  <input
                    onClick={fireTestApi}
                    type="submit"
                    className="btn custBtn btn-success"
                    value="Save Test"
                  />
                ) : (
                  <div className="row_fulll">
                    <input
                      type="submit"
                      style={{ float: "left", marginRight: "15px" }}
                      onClick={editTestStream}
                      className="custBtn btn btn-success"
                      value="Update Test"
                    />
                    <a
                      onClick={cancleTestUpdate}
                      className="addstrm"
                      href="javascript:void(0)"
                    >
                      Add Test
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
                      <th>Sr no.</th>
                      <th>Test series name</th>
                      <th>Test name</th>
                      <th>Test duration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testlistdata.map((txt, v) => (
                      <tr key={v}>
                        <td>{v + 1}</td>
                        <td>{txt.test_series_name}</td>
                        <td>{txt.test_name}</td>
                        <td>{txt.test_duration}</td>
                        <td>
                          <a
                            className="btnpad btn btn-success btn-xs"
                            onClick={() => updateTestCourse(txt)}
                            href="javascript:void(0);"
                          >
                            Edit
                          </a>{" "}
                          <a
                            className="btnpad btn btn-danger btn-xs"
                            href="javascript:void(0);"
                            onClick={() => removetest(txt.test_id)}
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

export default Test;
