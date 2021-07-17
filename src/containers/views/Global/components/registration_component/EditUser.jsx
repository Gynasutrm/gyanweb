import { ContactsOutlined } from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import * as api from "../../apiHelper/Apihelper";
import "./Registration.scss";
import { useLocation, Link } from "react-router-dom";

const axios = require("axios");
const images_path = process.env.PUBLIC_URL + "/assets/images/";

const EditUser = (props) => {
  const { state } = useLocation();
  const [gettoken, setGettoken] = useState(localStorage.getItem("token"));
  const [usertypeid, setUserTypeId] = useState("");

  const [userid, setUserId] = useState(""); // set user id for getting the data from db
  const [showprofile, setProfile] = useState(false);
  const [showpathprofile, setPathProfile] = useState(false);
  const [isUserExists, setUserExists] = useState(""); //for checking user exists message

  const [lstate, setVariableState] = useState({
    domanin_id: "1",
    enrollment_id: "1",
    name: "",
    email: "",
    contact: "",
  });

  const [profiledata, setprofiledata] = useState({
    adm_date: "",
    dob: "",
    alt_no: "",
    aadhar_no: "",
    blood_group: "",
    previous_school: "",

    pr_house_no: "",
    pr_street_name: "",
    pr_landmark: "",
    pr_pin_code: "",

    pe_house_no: "",
    pe_street_name: "",
    pe_landmark: "",
    pe_pin_code: "",
  });

  const [pathshaladata, setpathshaladata] = useState({
    dir_name: "",
    dir_contact: "",
    school_admin_contact: "",
    dir_email: "",
    school_admin_email: "",
    year_of_est: "",
    registration_no: "",
    aadhar_no: "",
    gst_no: "",
    pan_no: "",
    pa_house_no: "",
    pa_street_name: "",
    pa_landmark: "",
    pa_pin_code: "",
  });

  const [addressid, setaddressId] = useState({
    present_address_id: "",
    parmanent_address_id: "",
    school_address_id: "",
  });

  useEffect(() => {
    setGettoken(gettoken);
    getstatelist(gettoken); //use
    getallstream();
    getallclass();
    var query = window.location.search.substring(1);
    const getQueryParams = () =>
      window.location.search
        .replace("?", "")
        .split("&")
        .reduce(
          (r, e) => (
            (r[e.split("=")[0]] = decodeURIComponent(e.split("=")[1])), r
          ),
          {}
        );
    setUserId(state.user_id);
    getUserData(state.user_id);

    // if(user_type==5){
    //     setuserParent(true);
    // }
    // else{
    //     setuserParent(false);
    // }
  }, [gettoken]);

  const [userType, setUserType] = useState({
    user_type_name: "",
    user_type_id: "",
  });
  const [stateType, setStateType] = useState({ state_name: "", state_id: "" });
  const [cityType, setCityType] = useState({ city_name: "", city_id: "" });
  const [statelist, setStatelist] = useState([]);
  const [citylist, setCitylist] = useState([]);

  // for permant address
  const [pestateType, setPeStateType] = useState({
    state_name: "",
    state_id: "",
  });
  const [pecityType, setPeCityType] = useState({ city_name: "", city_id: "" });
  const [pestatelist, setPeStatelist] = useState([]);
  const [pecitylist, setPeCitylist] = useState([]);

  // for present address
  const [prstateType, setPrStateType] = useState({
    state_name: "",
    state_id: "",
  });
  const [prcityType, setPrCityType] = useState({ city_name: "", city_id: "" });
  const [prstatelist, setPrStatelist] = useState([]);
  const [prcitylist, setPrCitylist] = useState([]);

  // for school address
  const [scstateType, setScStateType] = useState({
    state_name: "",
    state_id: "",
  });
  const [sccityType, setScCityType] = useState({ city_name: "", city_id: "" });
  const [scstatelist, setScStatelist] = useState([]);
  const [sccitylist, setScCitylist] = useState([]);

  const [usertypelist, setUserTypelist] = useState([]);

  const [streamlist, setStreamlist] = useState([]);
  const [classlist, setClasslist] = useState([]);
  const [userParent, setuserParent] = useState(false);

  const [streadata, setStreadata] = useState({
    stream_name: "",
    stream_id: "",
  });
  const [classdata, setClassdata] = useState({
    class_name: "",
    class_id: "",
  });
  const [gender, setGender] = useState("");

  const [loader, setLoader] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [profMsg, setProfErrMsg] = useState("");

  const [userdata, setUserData] = useState([]); // user data

  // use
  const getUserData = (idd) => {
    setLoader(true);
    fetch(`http://54.251.156.235:4001/users/profile/${idd}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: gettoken,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        if (responseData.statusCode == 200) {
          setLoader(false);

          let data = responseData.data[0];
          setUserData(data);

          console.log("------------", data);

          setVariableState({
            ...lstate,
            name: data.full_name,
            email: responseData.data[0].email,
            contact: data.mobile,
          });

          if (data.user_type_id == 1 || data.user_type_id == 2) {
            setProfile(true);
            setaddressId({
              ...addressid,
              present_address_id: data.present_address_id,
              parmanent_address_id: data.parmanent_address_id,
            });
            // select state for userinfo
            setStateType({
              ...stateType,
              state_name: data.state_name,
              state_id: data.state_id,
            });
            // select city for userinfo
            getcitylist(data.state_id, "setCitylist");
            setCityType({
              ...cityType,
              city_name: data.city_name,
              city_id: data.city_id,
            });
            setprofiledata({
              adm_date: data.admission_date,
              dob: data.dob,
              alt_no: data.alternate_mobile,
              aadhar_no: data.aadhar_no,
              blood_group: data.blood_group,
              previous_school: data.previous_school_name,
              pr_house_no: data.present_address_obj.plot_no,
              pr_street_name: data.present_address_obj.street_name,
              pr_landmark: data.present_address_obj.landmark,
              pr_pin_code: data.present_address_obj.pincode,
              pe_house_no: data.parmanent_address_obj.plot_no,
              pe_street_name: data.parmanent_address_obj.street_name,
              pe_landmark: data.parmanent_address_obj.landmark,
              pe_pin_code: data.parmanent_address_obj.pincode,
            });

            //set stream name
            setStreadata({
              ...streadata,
              stream_name: data.stream_name,
              stream_id: data.stream_id,
            });
            // set class name
            setClassdata({
              ...classdata,
              class_name: data.class_name,
              class_id: data.class_id,
            });

            // select state for schoolinfo
            setScStateType({
              ...scstateType,
              state_name: responseData.data[0].school_state_name,
              state_id: responseData.data[0].school_state_id,
            });

            // select city for schoolinfo
            getcitylist(responseData.data[0].school_state_id, "setScCitylist");
            setScCityType({
              ...sccityType,
              city_name: responseData.data[0].school_city_name,
              city_id: responseData.data[0].school_city_id,
            });

            // select state for presentaddress
            setPrStateType({
              ...prstateType,
              state_name: data.present_address_obj.state_name,
              state_id: data.present_address_obj.state_id,
            });

            // select city for presentaddress
            getcitylist(data.present_address_obj.state_id, "setPrCitylist");
            setPrCityType({
              ...prcityType,
              city_name: data.present_address_obj.city_name,
              city_id: data.present_address_obj.city_id,
            });

            // select state for permanentaddress
            setPeStateType({
              ...pestateType,
              state_name: data.parmanent_address_obj.state_name,
              state_id: data.parmanent_address_obj.state_id,
            });

            // select city for permanentaddress
            getcitylist(data.parmanent_address_obj.state_id, "setPeCitylist");
            setPeCityType({
              ...pecityType,
              city_name: data.parmanent_address_obj.city_name,
              city_id: data.parmanent_address_obj.city_id,
            });
          } else if (data.user_type_id == 3) {
            setPathProfile(true);
            // select state for userinfo
            setStateType({
              ...stateType,
              state_name: data.school_state_name,
              state_id: data.state_id,
            });
            // select city for userinfo
            getcitylist(data.state_id, "setCitylist");
            setCityType({
              ...cityType,
              city_name: data.school_city_name,
              city_id: data.city_id,
            });
            setaddressId({
              ...addressid,
              school_address_id: data.school_address_id,
            });
            setpathshaladata({
              dir_name: data.director_name,
              dir_contact: data.director_contact_no,
              school_admin_contact: data.school_admin_contact_no,
              dir_email: data.director_email,
              school_admin_email: data.school_admin_email,
              year_of_est: data.establish_year,
              registration_no: data.registration_no,
              aadhar_no: data.aadhar_no,
              gst_no: data.gst_no,
              pan_no: data.pan_no,
              pa_house_no: data.school_address_obj.plot_no,
              pa_street_name: data.school_address_obj.street_name,
              pa_landmark: data.school_address_obj.landmark,
              pa_pin_code: data.school_address_obj.pincode,
            });

            // select state for school
            setPeStateType({
              ...pestateType,
              state_name: data.school_address_obj.state_name,
              state_id: data.school_address_obj.state_id,
            });

            // select city for school
            getcitylist(data.school_address_obj.state_id, "setPeCitylist");
            setPeCityType({
              ...pecityType,
              city_name: data.school_address_obj.city_name,
              city_id: data.school_address_obj.city_id,
            });
          }

          setUserTypeId(data.user_type_id);
          //set gender
          setGender(data.gender);
          setUserExists("");
        } else {
          setUserExists(responseData.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function getcitylist(idd, cityType) {
    let response = await api.getallstateList(idd);
    console.log(cityType);
    if (cityType == "setCitylist") setCitylist(response.data);
    else if (cityType == "setScCitylist") setScCitylist(response.data);
    else if (cityType == "setPrCitylist") setPrCitylist(response.data);
    else if (cityType == "setPeCitylist") setPeCitylist(response.data);
  }

  const [picture, setPicture] = useState({});
  const uploadPicture = (e) => {
    setPicture({
      /* contains the preview, if you want to show the picture to the user
               you can access it with this.state.currentPicture
           */
      picturePreview: URL.createObjectURL(e.target.files[0]),
      /* this contains the file we want to send */
      pictureAsFile: e.target.files[0],
    });
  };

  const handleStateChanges = (evt) => {
    const value = evt.target.value;
    setVariableState({
      ...lstate,
      [evt.target.name]: value,
    });
  };

  const handleprofileChanges = (evt) => {
    const value = evt.target.value;
    setprofiledata({
      ...profiledata,
      [evt.target.name]: value,
    });
  };

  const handlepathshalaChanges = (evt) => {
    const value = evt.target.value;
    setpathshaladata({
      ...pathshaladata,
      [evt.target.name]: value,
    });
  };

  // state change call
  async function stateChange(event) {
    try {
      setStateType({
        ...stateType,
        state_name: statelist[event.target.selectedIndex - 1].state_name,
        state_id: statelist[event.target.selectedIndex - 1].state_id,
      });

      let state = statelist[event.target.selectedIndex - 1].state_id;
      let response = await api.getallstateList(state);
      setLoader(false);
      setCitylist(response.data);
    } catch (e) {}
  }

  async function prstateChange(event) {
    try {
      setPrStateType({
        ...prstateType,
        state_name: prstatelist[event.target.selectedIndex - 1].state_name,
        state_id: prstatelist[event.target.selectedIndex - 1].state_id,
      });
      let state = prstatelist[event.target.selectedIndex - 1].state_id;
      let response = await api.getallstateList(state);
      setLoader(false);
      setPrCitylist(response.data);
    } catch (e) {}
  }

  async function pestateChange(event) {
    try {
      setPeStateType({
        ...pestateType,
        state_name: pestatelist[event.target.selectedIndex - 1].state_name,
        state_id: pestatelist[event.target.selectedIndex - 1].state_id,
      });

      let state = pestatelist[event.target.selectedIndex - 1].state_id;
      let response = await api.getallstateList(state);
      setLoader(false);
      setPeCitylist(response.data);
    } catch (e) {}
  }

  async function scstateChange(event) {
    try {
      setScStateType({
        ...scstateType,
        state_name: scstatelist[event.target.selectedIndex - 1].state_name,
        state_id: scstatelist[event.target.selectedIndex - 1].state_id,
      });

      let state = scstatelist[event.target.selectedIndex - 1].state_id;
      let response = await api.getallstateList(state);
      setLoader(false);
      setScCitylist(response.data);
    } catch (e) {}
  }

  //   city change call
  const cityChange = (event) => {
    try {
      setCityType({
        ...cityType,
        city_name: citylist[event.target.selectedIndex - 1].city_name,
        city_id: citylist[event.target.selectedIndex - 1].city_id,
      });
    } catch (e) {}
  };
  const prcityChange = (event) => {
    try {
      setPrCityType({
        ...prcityType,
        city_name: prcitylist[event.target.selectedIndex - 1].city_name,
        city_id: prcitylist[event.target.selectedIndex - 1].city_id,
      });
    } catch (e) {}
  };

  const pecityChange = (event) => {
    try {
      setPeCityType({
        ...pecityType,
        city_name: pecitylist[event.target.selectedIndex - 1].city_name,
        city_id: pecitylist[event.target.selectedIndex - 1].city_id,
      });
    } catch (e) {}
  };

  const sccityChange = (event) => {
    try {
      setScCityType({
        ...sccityType,
        city_name: sccitylist[event.target.selectedIndex - 1].city_name,
        city_id: sccitylist[event.target.selectedIndex - 1].city_id,
      });
    } catch (e) {}
  };

  const streamhandleChange = (event) => {
    try {
      setStreadata({
        ...streadata,
        stream_name: streamlist[event.target.selectedIndex - 1].stream_name,
        stream_id: streamlist[event.target.selectedIndex - 1].stream_id,
      });
    } catch (e) {}
  };
  const classhandleChange = (event) => {
    try {
      setClassdata({
        ...classdata,
        class_name: classlist[event.target.selectedIndex - 1].class_name,
        class_id: classlist[event.target.selectedIndex - 1].class_id,
      });
    } catch (e) {}
  };

  const genderChange = (event) => {
    setGender(event.target.value);
  };

  async function getallstream() {
    setLoader(true);
    try {
      let response = await api.getallstream();
      setLoader(false);
      setStreamlist(response.data);
    } catch (e) {}
  }
  async function getallclass() {
    setLoader(true);
    try {
      let response = await api.getallclass();
      setLoader(false);
      setClasslist(response);
    } catch (e) {}
  }

  // use
  const getstatelist = (data) => {
    setLoader(true);
    fetch("http://54.251.156.235:4001/commons//state-list", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: data,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setLoader(false);
        setStatelist(responseData.data);
        setPrStatelist(responseData.data);
        setPeStatelist(responseData.data);
        setScStatelist(responseData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // update user profile
  const updateProfile = () => {
    const pr_address = {
      plot_no: profiledata.pr_house_no,
      street_name: profiledata.pr_street_name,
      landmark: profiledata.pr_landmark,
      state_id: prstateType.state_id,
      city_id: prcityType.city_id,
      pincode: profiledata.pr_pin_code,
    };
    const pe_address = {
      plot_no: profiledata.pe_house_no,
      street_name: profiledata.pe_street_name,
      landmark: profiledata.pe_landmark,
      state_id: pestateType.state_id,
      city_id: pecityType.city_id,
      pincode: profiledata.pe_pin_code,
    };
    const pa_address = {
      plot_no: pathshaladata.pa_house_no,
      street_name: pathshaladata.pa_street_name,
      landmark: pathshaladata.pa_landmark,
      state_id: pestateType.state_id,
      city_id: pecityType.city_id,
      pincode: pathshaladata.pa_pin_code,
    };

    const streamInput = {
      admission_date: profiledata.adm_date,
      student_domain_id: lstate.domanin_id,
      dob: profiledata.dob,
      alternate_mobile: profiledata.alt_no,
      present_address_id: addressid.present_address_id,
      parmanent_address_id: addressid.parmanent_address_id,
      stream_id: streadata.stream_id,
      class_id: classdata.class_id,
      aadhar_no: profiledata.aadhar_no,
      gender: gender,
      blood_group: profiledata.blood_group,
      previous_school_name: profiledata.previous_school,
      school_state_id: scstateType.state_id,
      school_city_id: sccityType.city_id,
    };

    const formData = new FormData();
    formData.append("user_type_id", usertypeid);
    formData.append("full_name", lstate.name);
    formData.append("state_id", stateType.state_id);
    formData.append("city_id", cityType.city_id);

    if (usertypeid == 3) {
      formData.append("school_name", lstate.name);
      formData.append("director_name", pathshaladata.dir_name);
      formData.append("director_contact_no", pathshaladata.dir_contact);
      formData.append(
        "school_admin_contact_no",
        pathshaladata.school_admin_contact
      );
      formData.append("director_email", pathshaladata.dir_email);
      formData.append("school_admin_email", pathshaladata.school_admin_email);
      formData.append("establish_year", pathshaladata.year_of_est);
      formData.append("registration_no", pathshaladata.registration_no);
      formData.append("aadhar_no", pathshaladata.aadhar_no);
      formData.append("gst_no", pathshaladata.gst_no);
      formData.append("pan_no", pathshaladata.pan_no);
      formData.append("school_address_obj", JSON.stringify(pa_address));
      formData.append("profile_image", picture.pictureAsFile);
    } else {
      formData.append("admission_date", profiledata.adm_date);
      formData.append("student_domain_id", lstate.domanin_id);
      formData.append("dob", profiledata.dob);
      formData.append("alternate_mobile", profiledata.alt_no);
      formData.append("present_address_id", addressid.present_address_id);
      formData.append("present_address_obj", JSON.stringify(pr_address));
      formData.append("parmanent_address_id", addressid.parmanent_address_id);
      formData.append("parmanent_address_obj", JSON.stringify(pe_address));
      formData.append("stream_id", streadata.stream_id);
      formData.append("class_id", classdata.class_id);
      formData.append("aadhar_no", profiledata.aadhar_no);
      formData.append("gender", gender);
      formData.append("blood_group", profiledata.blood_group);
      formData.append("previous_school_name", profiledata.previous_school);
      formData.append("school_state_id", scstateType.state_id);
      formData.append("school_city_id", sccityType.city_id);
      formData.append("profile_image", picture.pictureAsFile);
    }
    //console.log(streamInput);

    //for (var pair of formData.entries()) {
    //  console.log(pair[0]+ ', ' + pair[1]);
    //}

    // return false;

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: gettoken,
      },
    };

    axios
      .post(
        `http://54.251.156.235:4001/users/update-profile/${userid}`,
        formData,
        config
      )
      .then((responseData) => {
        console.log(responseData, responseData.data);
        if (responseData.data.statusCode == 200) {
          setProfErrMsg("User Profile updated successfully.");
          props.history.push({
            pathname: "/global/registration/viewuser",
            state: {
              user_id: userid,
            },
          });
          setTimeout(() => {
            setProfErrMsg("");
          }, 30000);
        } else {
          setProfErrMsg(responseData.data.message);
          setTimeout(() => {
            setProfErrMsg("");
          }, 30000);
        }
      })
      .catch((error) => {
        console.log("Error Found", error);
      });
  };

  return (
    <div className="row_full">
      <div className="container-fluid">
        {isUserExists ? (
          <div className="middleboxArea">
            <p className="errTag">{isUserExists}</p>
          </div>
        ) : (
          <div>
            {/* for addding users  */}
            <div className="row_full">
              <div className="middleboxArea">
                <h5>
                  Edit User Details{" "}
                  <Link
                    className="btnpad btn btn-info text-right btn-xs"
                    to={`/global/registration`}
                  >
                    Back to registration
                  </Link>
                </h5>{" "}
                <br />
                {userParent ? (
                  <div className="grid_33 mar_b_15">
                    <span>Enrollment id</span>
                    <input
                      type="text"
                      name="enrollment_id"
                      value={lstate.enrollment_id}
                      onChange={handleStateChanges}
                      className=" form-control"
                      placeholder="Enrollment id"
                    />
                  </div>
                ) : null}
                <div className="grid_33 mar_b_15">
                  <span>Student Name</span>
                  <input
                    type="text"
                    name="name"
                    value={lstate.name}
                    onChange={handleStateChanges}
                    className=" form-control"
                    placeholder="Student Name"
                  />
                </div>
                <div className="grid_33 mar_b_15">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    value={lstate.email}
                    onChange={handleStateChanges}
                    className=" form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="grid_33 mar_b_15">
                  <span>Phone</span>
                  <input
                    type="text"
                    name="contact"
                    value={lstate.contact}
                    onChange={handleStateChanges}
                    className=" form-control"
                    placeholder="Phone No."
                  />
                </div>
                <div className="grid_33 mar_b_15">
                  <span>State</span>
                  <select
                    name="state_name"
                    className="form-control grid_100"
                    value={stateType.state_name}
                    onChange={stateChange}
                  >
                    <option value="">Select State</option>
                    {statelist.map((txt, index) => (
                      <option value={txt.state_name} key={index}>
                        {txt.state_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid_33 mar_b_15">
                  <span>City</span>
                  <select
                    name="city_name"
                    className="form-control grid_100"
                    value={cityType.city_name}
                    onChange={cityChange}
                  >
                    <option value="">Select City</option>
                    {citylist.map((txt, index) => (
                      <option value={txt.city_name} key={index}>
                        {txt.city_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* for update user profile  */}
            {showprofile ? (
              <div className="row_full">
                <div className="middleboxArea">
                  <h5>Profile Data</h5>
                  <br />
                  <div className="grid_33 mar_b_15">
                    <span>User ID</span>
                    <input
                      type="text"
                      name="user_id"
                      editable={false}
                      value={userid}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="User Id"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Admission Date</span>
                    <input
                      type="date"
                      name="adm_date"
                      value={profiledata.adm_date}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="Admission Date"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Date of Birth</span>
                    <input
                      type="date"
                      name="dob"
                      value={profiledata.dob}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="DOB"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Alternate Phone No</span>
                    <input
                      type="text"
                      name="alt_no"
                      value={profiledata.alt_no}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="Alternate Phone No"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Streams</span>
                    <select
                      name="stream_name"
                      className="form-control grid_100"
                      value={streadata.stream_name}
                      onChange={streamhandleChange}
                    >
                      <option value="">Select Stream</option>
                      {streamlist.map((txt, index) => (
                        <option value={txt.stream_name} key={index}>
                          {txt.stream_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Class</span>
                    <select
                      name="class_name"
                      className="form-control grid_100"
                      value={classdata.class_name}
                      onChange={classhandleChange}
                    >
                      <option value="">Select Class</option>
                      {classlist.map((txt, index) => (
                        <option value={txt.class_name} key={index}>
                          {txt.class_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="row_full">
                    <p>
                      <h6>Present Address</h6>
                    </p>
                    <div className="grid_33 mar_b_15">
                      <span>House No/Plot No</span>
                      <input
                        type="text"
                        name="pr_house_no"
                        value={profiledata.pr_house_no}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="House No / Plot No"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Street Name</span>
                      <input
                        type="text"
                        name="pr_street_name"
                        value={profiledata.pr_street_name}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Street Name"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Landmark</span>
                      <input
                        type="text"
                        name="pr_landmark"
                        value={profiledata.pr_landmark}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Landmark"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>State</span>
                      <select
                        name="pr_state_name"
                        className="form-control grid_100"
                        value={prstateType.state_name}
                        onChange={prstateChange}
                      >
                        <option value="">Select State</option>
                        {prstatelist.map((txt, index) => (
                          <option value={txt.state_name} key={index}>
                            {txt.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>City</span>
                      <select
                        name="pr_city_name"
                        className="form-control grid_100"
                        value={prcityType.city_name}
                        onChange={prcityChange}
                      >
                        <option value="">Select City</option>
                        {prcitylist.map((txt, index) => (
                          <option value={txt.city_name} key={index}>
                            {txt.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Pin Code</span>
                      <input
                        type="text"
                        name="pr_pin_code"
                        value={profiledata.pr_pin_code}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Pin Code"
                      />
                    </div>
                  </div>

                  <div className="row_full">
                    <p>
                      <h6>Permanent Address</h6>
                    </p>
                    <div className="grid_33 mar_b_15">
                      <span>House No/Plot No</span>
                      <input
                        type="text"
                        name="pe_house_no"
                        value={profiledata.pe_house_no}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="House No / Plot No"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Street Name</span>
                      <input
                        type="text"
                        name="pe_street_name"
                        value={profiledata.pe_street_name}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Street Name"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Landmark</span>
                      <input
                        type="text"
                        name="pe_landmark"
                        value={profiledata.pe_landmark}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Landmark"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>State</span>
                      <select
                        name="pe_state_name"
                        className="form-control grid_100"
                        value={pestateType.state_name}
                        onChange={pestateChange}
                      >
                        <option value="">Select State</option>
                        {pestatelist.map((txt, index) => (
                          <option value={txt.state_name} key={index}>
                            {txt.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>City</span>
                      <select
                        name="pe_city_name"
                        className="form-control grid_100"
                        value={pecityType.city_name}
                        onChange={pecityChange}
                      >
                        <option value="">Select City</option>
                        {pecitylist.map((txt, index) => (
                          <option value={txt.city_name} key={index}>
                            {txt.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Pin Code</span>
                      <input
                        type="text"
                        name="pe_pin_code"
                        value={profiledata.pe_pin_code}
                        onChange={handleprofileChanges}
                        className=" form-control"
                        placeholder="Pin Code"
                      />
                    </div>
                  </div>

                  <div className="grid_33 mar_b_15">
                    <span>Aadhar No</span>
                    <input
                      type="text"
                      name="aadhar_no"
                      value={profiledata.aadhar_no}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="Aadhar No."
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Profile Image</span>
                    <input
                      type="file"
                      name="name"
                      onChange={uploadPicture}
                      className=" form-control"
                      placeholder="Student Name"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Gender</span>
                    <select
                      name="gender_name"
                      className="form-control grid_100"
                      value={gender}
                      onChange={genderChange}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Blood Group</span>
                    <input
                      type="text"
                      name="blood_group"
                      value={profiledata.blood_group}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="Student Name"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Previous School Name</span>
                    <input
                      type="text"
                      name="previous_school"
                      value={profiledata.previous_school}
                      onChange={handleprofileChanges}
                      className=" form-control"
                      placeholder="Student Name"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>School State</span>
                    <select
                      name="p_state_name"
                      className="form-control grid_100"
                      value={scstateType.state_name}
                      onChange={scstateChange}
                    >
                      <option value="">Select State</option>
                      {scstatelist.map((txt, index) => (
                        <option value={txt.state_name} key={index}>
                          {txt.state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>School City</span>
                    <select
                      name="p_city_name"
                      className="form-control grid_100"
                      value={sccityType.city_name}
                      onChange={sccityChange}
                    >
                      <option value="">Select City</option>
                      {sccitylist.map((txt, index) => (
                        <option value={txt.city_name} key={index}>
                          {txt.city_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="row_full">
                    <div className="grid_33 mar_b_15">
                      <input
                        type="submit"
                        className="btn grid_100 custBtn btn-info"
                        onClick={updateProfile}
                        value="Update Profile"
                      />
                    </div>
                    {profMsg ? (
                      <p
                        className="row_full errTag"
                        style={{ marginBottom: "15px" }}
                      >
                        {profMsg}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {/* pathshala profile data */}
            {showpathprofile ? (
              <div className="row_full">
                <div className="middleboxArea">
                  <h5>School Profile Data</h5>
                  <br />
                  <div className="grid_33 mar_b_15">
                    <span>Director's Name</span>
                    <input
                      type="text"
                      name="dir_name"
                      value={pathshaladata.dir_name}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Director Name"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Director's Contact</span>
                    <input
                      type="text"
                      name="dir_contact"
                      value={pathshaladata.dir_contact}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Director's Contact"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>School Admin Contact</span>
                    <input
                      type="text"
                      name="school_admin_contact"
                      value={pathshaladata.school_admin_contact}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="School Admin Contact"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Director's e-mail Id</span>
                    <input
                      type="text"
                      name="dir_email"
                      value={pathshaladata.dir_email}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Director's e-mail Id"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>School Admin e-mail Id</span>
                    <input
                      type="text"
                      name="school_admin_email"
                      value={pathshaladata.school_admin_email}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="School Admin e-mail Id"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Year of establishment</span>
                    <input
                      type="text"
                      name="year_of_est"
                      value={pathshaladata.year_of_est}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Year of establishment"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Registration No</span>
                    <input
                      type="text"
                      name="registration_no"
                      value={pathshaladata.registration_no}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Registration No"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Aadhar Card No</span>
                    <input
                      type="text"
                      name="aadhar_no"
                      value={pathshaladata.aadhar_no}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="Aadhar Card No"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>GST No</span>
                    <input
                      type="text"
                      name="gst_no"
                      value={pathshaladata.gst_no}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="GST no"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>PAN No</span>
                    <input
                      type="text"
                      name="pan_no"
                      value={pathshaladata.pan_no}
                      onChange={handlepathshalaChanges}
                      className=" form-control"
                      placeholder="PAN No"
                    />
                  </div>
                  <div className="grid_33 mar_b_15">
                    <span>Profile Image</span>
                    <input
                      type="file"
                      name="name"
                      onChange={uploadPicture}
                      className=" form-control"
                      placeholder="Student Name"
                    />
                  </div>

                  <div className="row_full">
                    {" "}
                    <br />
                    <p>
                      <h6>Pathshala Address</h6>
                    </p>
                    <div className="grid_33 mar_b_15">
                      <span>House No/Plot No</span>
                      <input
                        type="text"
                        name="pa_house_no"
                        value={pathshaladata.pa_house_no}
                        onChange={handlepathshalaChanges}
                        className=" form-control"
                        placeholder="House No / Plot No"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Street Name</span>
                      <input
                        type="text"
                        name="pa_street_name"
                        value={pathshaladata.pa_street_name}
                        onChange={handlepathshalaChanges}
                        className=" form-control"
                        placeholder="Street Name"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Landmark</span>
                      <input
                        type="text"
                        name="pa_landmark"
                        value={pathshaladata.pa_landmark}
                        onChange={handlepathshalaChanges}
                        className=" form-control"
                        placeholder="Landmark"
                      />
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>State</span>
                      <select
                        name="pa_state_name"
                        className="form-control grid_100"
                        value={pestateType.state_name}
                        onChange={pestateChange}
                      >
                        <option value="">Select State</option>
                        {pestatelist.map((txt, index) => (
                          <option value={txt.state_name} key={index}>
                            {txt.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>City</span>
                      <select
                        name="pa_city_name"
                        className="form-control grid_100"
                        value={pecityType.city_name}
                        onChange={pecityChange}
                      >
                        <option value="">Select City</option>
                        {pecitylist.map((txt, index) => (
                          <option value={txt.city_name} key={index}>
                            {txt.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid_33 mar_b_15">
                      <span>Pin Code</span>
                      <input
                        type="text"
                        name="pa_pin_code"
                        value={pathshaladata.pa_pin_code}
                        onChange={handlepathshalaChanges}
                        className=" form-control"
                        placeholder="Pin Code"
                      />
                    </div>
                  </div>

                  <div className="row_full">
                    <div className="grid_33 mar_b_15">
                      <input
                        type="submit"
                        className="btn grid_100 custBtn btn-info"
                        onClick={updateProfile}
                        value="Update Profile"
                      />
                    </div>
                    {profMsg ? (
                      <p
                        className="row_full errTag"
                        style={{ marginBottom: "15px" }}
                      >
                        {profMsg}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUser;
