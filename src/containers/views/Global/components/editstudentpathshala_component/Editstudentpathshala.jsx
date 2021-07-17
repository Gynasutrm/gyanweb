import  React, { useState , useRef, useEffect } from 'react';
import './Editstudentpathshala.css';

const Editstudentpathshala = () => {

    const registerData = [
        {id:'1',name:'Durgesh Kumar',email:'durgeshkumar@gmail.com',phone:'8750732976',state:'Delhi',city:'Delhi',admission_date:'12 March 2021',dob:'28 Sep 1995'},
        {id:'2',name:'Aman Kumar',email:'aman@gmail.com',phone:'8750732976',state:'Delhi',city:'Delhi',admission_date:'12 March 2021',dob:'28 Sep 1995'},
        {id:'3',name:'Neeraj Kumar',email:'neeraj@gmail.com',phone:'8750732976',state:'Delhi',city:'Delhi',admission_date:'12 March 2021',dob:'28 Sep 1995'},
        {id:'4',name:'Raj Kumar',email:'raj@gmail.com',phone:'8750732976',state:'Delhi',city:'Delhi',admission_date:'12 March 2021',dob:'28 Sep 1995'},
        {id:'5',name:'Tiger Kumar',email:'tiger@gmail.com',phone:'8750732976',state:'Delhi',city:'Delhi',admission_date:'12 March 2021',dob:'28 Sep 1995'}
    ];

    useEffect(() => {
        
    },[]);
 
    return (
        <div className="row_full">
            <div className="container">

                <div className="row_full disp_flex">
                    <div className="middleboxArea larger">
                        <h3 className="row_full mar_b_25" style={{fontSize:'15px'}}>Add Student Pathshala</h3>
                        <div className="row_full mar_b_15">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Pathshala Enrollment Id</span>
                                <input type="text" name="pe_id" value="" className="row_full form-control" placeholder="Pathshala Enrollment Id"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Student Name</span>
                                <input type="text" name="student_name" value="" className="row_full form-control" placeholder="Student Name"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Email</span>
                                <input type="text" name="email" value="" className="row_full form-control" placeholder="Email"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Phone</span>
                                <input type="text" name="phone" value="" className="row_full form-control" placeholder="Phone"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">State</span>
                                <input type="text" name="state" value="" className="row_full form-control" placeholder="State"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">City</span>
                                <input type="text" name="city" value="" className="row_full form-control" placeholder="City"/>
                            </div>
                        </div>

                        <h3 className="row_full mar_b_25" style={{fontSize:'15px'}}>Profile data</h3>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Stream</span>
                                <input type="text" name="stream" value="" className="row_full form-control" placeholder="Stream"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Student ID</span>
                                <input type="text" name="student_id" value="" className="row_full form-control" placeholder="Student ID"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Admission Date</span>
                                <input type="text" name="admission_date" value="" className="row_full form-control" placeholder="Admission Date"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Date Of Birth</span>
                                <input type="text" name="date_of_birth" value="" className="row_full form-control" placeholder="Date Of Birth"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Phone Number</span>
                                <input type="text" name="phone_number" value="" className="row_full form-control" placeholder="Phone Number"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Email Address</span>
                                <input type="text" name="email_address" value="" className="row_full form-control" placeholder="Email Address"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Present Address</span>
                                <input type="text" name="present_address" value="" className="row_full form-control" placeholder="Present Address"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Permanent Address</span>
                                <input type="text" name="permanent_address" value="" className="row_full form-control" placeholder="Permanent Address"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Grade</span>
                                <input type="text" name="grade" value="" className="row_full form-control" placeholder="Grade"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Course Code</span>
                                <input type="text" name="course_code" value="" className="row_full form-control" placeholder="Course Code"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Active course</span>
                                <input type="text" name="active_course" value="" className="row_full form-control" placeholder="Active course"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Student Image</span>
                                <input type="file" name="student_image" value="" className="row_full form-control" placeholder="Student Image"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Gender</span>
                                <input type="text" name="gender" value="" className="row_full form-control" placeholder="Gender"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Blood Group</span>
                                <input type="text" name="blood_group" value="" className="row_full form-control" placeholder="Blood Group"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Previous School Details</span>
                                <input type="text" name="previous_school_details" value="" className="row_full form-control" placeholder="Previous School Details"/>
                            </div>
                        </div>

                        <div className="row_full">
                            <a className="pull-right btn btn-success" href="javascript:void(0);">Update Profile</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Editstudentpathshala;