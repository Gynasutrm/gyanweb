import React, { useState, useRef, useEffect } from "react";
import "./UpdatePassword.scss";
import * as api from "../../../../Global/apiHelper/Apihelper";
import { useForm } from "react-hook-form";
import _ from "lodash";
const images_path = process.env.PUBLIC_URL + "/assets/images/";

const UpdatePassword = (props) => {
  const { register, handleSubmit, errors, watch } = useForm({
    mode: "onSubmit",
    criteriaMode: "firstError",
    shouldFocusError: true,
  });
  const [loader, setLoader] = useState(false);
  const [password, setUpdatePassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  password.confirm_password = watch("new_password", "");
  useEffect(() => {}, []);

  async function changePassword(data) {
    setLoader(true);
    try {
      let response = await api.httpPostAsync("auth/change-password", data);
      setLoader(false);
      if (response.statusCode !== 200) {
        console.log(response);
        alert(response.message);
        props.onButtonClickHandler(null, "view");
      }
    } catch (e) {}
  }
  const onSubmit = (data) => {
    if (!_.isEmpty(data.confirm_password)) {
      changePassword(data);
    } else {
      alert("Fill required field");
    }
  };
  return (
    <>
      <form
        style={{ paddingTop: "10px" }}
        className="row_full"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="profile-details d-flex flex-column">
          <div className="row_full section-title">Changed Password</div>
          <div className="row_full mar_b_15 d-flex justify-content-between">
            <div className="grid_30 adtopic">
              <span className="w-100">Old Password</span>
              <input
                type="text"
                name="old_password"
                className="row_full form-control"
                placeholder="Old Password"
                ref={register({
                  required: "Old Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className="error-message">
                {errors.old_password && errors.old_password.message}
              </div>
            </div>
            <div className="grid_30 adtopic">
              <span className="w-100">New Password</span>
              <input
                type="text"
                name="new_password"
                className="row_full form-control"
                placeholder="New Password"
                ref={register({
                  required: "New Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className="error-message">
                {errors.new_password && errors.new_password.message}
              </div>
            </div>

            <div className="grid_30 adtopic">
              <span className="w-100">Confirm Password</span>
              <input
                type="text"
                name="confirm_password"
                className="row_full form-control"
                placeholder="Confirm Password"
                ref={register({
                  validate: (value) =>
                    value === password.confirm_password ||
                    "Password do not match",
                  required: "Confirm Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className="error-message">
                {errors.confirm_password && errors.confirm_password.message}
              </div>
            </div>
          </div>
          <div className="row_full mar_b_15  d-flex justify-content-end">
            <div className="grid_30 adtopic">
              <button
                type="submit"
                className="d-flex justify-content-center btn-sm btn-border-info w-100"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdatePassword;
