import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Registration.scss";

const axios = require("axios");
const images_path = process.env.PUBLIC_URL + "/assets/images/";

const ViewUser = () => {
  const { state } = useLocation();
  const [gettoken, setGettoken] = useState(localStorage.getItem("token"));
  const [usertypeid, setUserTypeId] = useState("");

  const [vpathshaladata, setvPathshaladata] = useState(false);
  const [votherdata, setvoOtherdata] = useState(false);

  const [userid, setUserId] = useState("");
  const [loader, setLoader] = useState(false);
  const [userdata, setUserData] = useState([]);
  const [isUserExists, setUserExists] = useState("");

  const [imgsrc, setimgState] = useState([]);

  useEffect(() => {
    setGettoken(gettoken);
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
  }, [gettoken]);

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
        //console.log(responseData);
        if (responseData.statusCode == 200) {
          setLoader(false);
          console.log(responseData.data);

          setUserData(responseData.data);
          const usertype = responseData.data[0].user_type_id;
          setUserTypeId(responseData.data[0].user_type_id);

          if (usertype == 1 || usertype == 2) {
            setvPathshaladata(false);
            setvoOtherdata(true);
          } else if (usertype == 3) {
            setvPathshaladata(true);
            setvoOtherdata(false);
          }
          //console.log(responseData.data[0].user_type_id);
          setUserExists("");
        } else {
          setUserExists(responseData.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row_full">
      <div className="container-fluid">
        {/* for addding users  */}
        <div className="row_full">
          <div className="middleboxArea userviewdata">
            {isUserExists ? (
              <p className="errTag">{isUserExists}</p>
            ) : (
              <div>
                <h4>
                  <center>User Details</center>
                </h4>
                <hr />
                {votherdata ? (
                  <div>
                    {userdata.map((txt, v) => (
                      <>
                        <div className="user-img">
                          <center>
                            {txt.profile_image ? (
                              <img src={txt.profile_image} alt="Profile Pic" />
                            ) : (
                              <i className="mdi mdi-account-circle default-profile-image" />
                            )}
                          </center>
                        </div>

                        <ul key={v}>
                          <li>
                            <b>Full Name </b>
                            <span>{txt.full_name}</span>
                          </li>
                          <li>
                            <b>Email </b>
                            <span>{txt.email}</span>
                          </li>
                          <li>
                            <b>Mobile No </b>
                            <span>{txt.mobile}</span>
                          </li>
                          <li>
                            <b>User Type </b>
                            <span>{txt.user_type_id}</span>
                          </li>
                          <li>
                            <b>ReferalCode </b>
                            <span>{txt.referalcode}</span>
                          </li>
                          <li>
                            <b>State Name </b>
                            <span>{txt.state_name}</span>
                          </li>
                          <li>
                            <b>City Name </b>
                            <span>{txt.city_name}</span>
                          </li>
                          <li>
                            <b>Enrollment Id </b>
                            <span>{txt.enrollment_id}</span>
                          </li>
                          <li>
                            <b>Admission Date </b>
                            <span>{txt.admission_date}</span>
                          </li>
                          <li>
                            <b>Student Domain Id </b>
                            <span>{txt.student_domain_id}</span>
                          </li>
                          <li>
                            <b>Date of Birth </b>
                            <span>{txt.dob}</span>
                          </li>
                          <li>
                            <b>Alternate Mobile No </b>
                            <span>{txt.alternate_mobile}</span>
                          </li>
                          {txt.present_address_obj ? (
                            <li>
                              <b>Present Address </b>
                              <span>
                                <p>
                                  Plot No : {txt.present_address_obj.plot_no}
                                </p>
                                <p>
                                  Street Name :{" "}
                                  {txt.present_address_obj.street_name}
                                </p>
                                <p>
                                  Landmark : {txt.present_address_obj.landmark}
                                </p>
                                <p>
                                  State Name :{" "}
                                  {txt.present_address_obj.state_name}
                                </p>
                                <p>
                                  City Name :{" "}
                                  {txt.present_address_obj.city_name}
                                </p>
                                <p>
                                  Pincode :{txt.present_address_obj.pincode}
                                </p>
                              </span>
                            </li>
                          ) : (
                            ""
                          )}
                          {txt.parmanent_address_obj ? (
                            <li>
                              <b>Permannent Address </b>
                              <span>
                                <p>
                                  Plot No : {txt.parmanent_address_obj.plot_no}
                                </p>
                                <p>
                                  Street Name :{" "}
                                  {txt.parmanent_address_obj.street_name}
                                </p>
                                <p>
                                  Landmark :{" "}
                                  {txt.parmanent_address_obj.landmark}
                                </p>
                                <p>
                                  State Name :{" "}
                                  {txt.parmanent_address_obj.state_name}
                                </p>
                                <p>
                                  City Name :{" "}
                                  {txt.parmanent_address_obj.city_name}
                                </p>
                                <p>
                                  Pincode :{txt.parmanent_address_obj.pincode}
                                </p>
                              </span>
                            </li>
                          ) : (
                            ""
                          )}

                          <li>
                            <b>Stream </b>
                            <span>{txt.stream_name}</span>
                          </li>
                          <li>
                            <b>Class </b>
                            <span>{txt.class_name}</span>
                          </li>
                          <li>
                            <b>Aadhar No </b>
                            <span>{txt.aadhar_no}</span>
                          </li>
                          <li>
                            <b>Gender </b>
                            <span>{txt.gender}</span>
                          </li>
                          <li>
                            <b>Blood Group </b>
                            <span>{txt.blood_group}</span>
                          </li>
                          <li>
                            <b>Previous School Name </b>
                            <span>{txt.previous_school_name}</span>
                          </li>
                          <li>
                            <b>School State </b>
                            <span>{txt.school_state_name}</span>
                          </li>
                          <li>
                            <b>School City </b>
                            <span>{txt.school_city_name}</span>
                          </li>
                        </ul>
                      </>
                    ))}
                  </div>
                ) : null}

                {vpathshaladata ? (
                  <div>
                    {userdata.map((txt, v) => (
                      <>
                        <div className="user-img">
                          <center>
                            {txt.profile_image ? (
                              <img src={txt.profile_image} alt="Profile Pic" />
                            ) : (
                              <i className="mdi mdi-account-circle default-profile-image" />
                            )}
                          </center>
                        </div>
                        <ul key={v}>
                          <li>
                            <b>School Name </b>
                            <span>{txt.full_name}</span>
                          </li>
                          <li>
                            <b>Email </b>
                            <span>{txt.email}</span>
                          </li>
                          <li>
                            <b>Mobile No </b>
                            <span>{txt.mobile}</span>
                          </li>
                          <li>
                            <b>Director's Name </b>
                            <span>{txt.director_name}</span>
                          </li>
                          <li>
                            <b>Director's Contact No </b>
                            <span>{txt.director_contact_no}</span>
                          </li>
                          <li>
                            <b>School Admin Contact No</b>
                            <span>{txt.school_admin_contact_no}</span>
                          </li>
                          <li>
                            <b>Director's e-mail Id</b>
                            <span>{txt.director_email}</span>
                          </li>
                          <li>
                            <b>School Admin e-mail Id </b>
                            <span>{txt.school_admin_email}</span>
                          </li>
                          <li>
                            <b>Year of establishment</b>
                            <span>{txt.establish_year}</span>
                          </li>
                          <li>
                            <b>Registration No</b>
                            <span>{txt.registration_no}</span>
                          </li>
                          <li>
                            <b>Aadhar Card No</b>
                            <span>{txt.aadhar_no}</span>
                          </li>
                          <li>
                            <b>GST No</b>
                            <span>{txt.gst_no}</span>
                          </li>
                          <li>
                            <b>PAN No </b>
                            <span>{txt.pan_no}</span>
                          </li>
                          {txt.school_address_obj ? (
                            <li>
                              <b>Pathshala Address </b>
                              <span>
                                <p>
                                  Plot No : {txt.school_address_obj.plot_no}
                                </p>
                                <p>
                                  Street Name :{" "}
                                  {txt.school_address_obj.street_name}
                                </p>
                                <p>
                                  Landmark : {txt.school_address_obj.landmark}
                                </p>
                                <p>
                                  State Name :{" "}
                                  {txt.school_address_obj.state_name}
                                </p>
                                <p>
                                  City Name : {txt.school_address_obj.city_name}
                                </p>
                                <p>Pincode :{txt.school_address_obj.pincode}</p>
                              </span>
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                      </>
                    ))}
                  </div>
                ) : null}

                <div className="row_full d-flex justify-content-around mt-2">
                  <div>
                    <Link
                      className="btn custBtn btn-info pl-1 pr-1"
                      to={{
                        pathname: "/global/registration/edituser",
                        state: {
                          user_id: userid,
                        },
                      }}
                    >
                      Update Profile
                    </Link>
                  </div>
                  {[1, 2].includes(state.user_type_id) ? (
                    <div>
                      <Link
                        className="btn custBtn btn-success pl-1 pr-1"
                        to={{
                          pathname: "/global/registration/courseactivation",
                          state: {
                            user_id: userid,
                          },
                        }}
                      >
                        Course Activation
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
