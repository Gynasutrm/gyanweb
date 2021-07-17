import  React, { useState , useRef, useEffect } from 'react';
import './Addstudentpathshala.css';

const Addstudentpathshala = () => {

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
                        <h3 className="row_full mar_b_25" style={{fontSize:'16px'}}>Add Student Pathshala</h3>

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

                        <div className="row_full mar_b_15">
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

                        <div className="row_full">
                            <a className="pull-right btn btn-success" href="javascript:void(0);">Register</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Addstudentpathshala;