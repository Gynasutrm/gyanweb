import  React, { useState , useRef, useEffect } from 'react';
import './Addpathshala.css';

const Addpathshala = () => {

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

                        <h3 className="row_full mar_b_25" style={{fontSize:'15px'}}>Add Pathshala</h3>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">School name</span>
                                <input type="text" name="school_name" value="" className="row_full form-control" placeholder="School name"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Director's name</span>
                                <input type="text" name="directors_name" value="" className="row_full form-control" placeholder="Director's name"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Director's contact</span>
                                <input type="text" name="directors_contact" value="" className="row_full form-control" placeholder="Director's contact"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">School Admin Contact</span>
                                <input type="text" name="school_admin_contact" value="" className="row_full form-control" placeholder="School Admin Contact"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Director's e-mail id</span>
                                <input type="text" name="directors_email_id" value="" className="row_full form-control" placeholder="Director's e-mail id"/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">School Admin e-mail id</span>
                                <input type="text" name="school_admin_email_id" value="" className="row_full form-control" placeholder="School Admin e-mail id"/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">Year of establishment</span>
                                <input type="text" name="year_of_establishment" value="" className="row_full form-control" placeholder="Year of establishment"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">CBSE code of School/ Board registration no.</span>
                                <input type="text" name="cbse_code_of_school" value="" className="row_full form-control" placeholder="CBSE code of School/ Board registration no."/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Adhar card No.</span>
                                <input type="text" name="adhar_card_no" value="" className="row_full form-control" placeholder="Adhar card No."/>
                            </div>
                        </div>

                        <div className="row_full mar_b_25">
                            <div className="grid_32 mar_r_15">
                                <span className="row_full">GSTIN NO</span>
                                <input type="text" name="gstin_no" value="" className="row_full form-control" placeholder="GSTIN NO-"/>
                            </div>

                            <div className="grid_32 mar_r_15">
                                <span className="row_full">PAN No.</span>
                                <input type="text" name="pan_no" value="" className="row_full form-control" placeholder="PAN No."/>
                            </div>

                            <div className="grid_32">
                                <span className="row_full">Pathshala plan Active</span>
                                <input type="text" name="pathshala_plan_active" value="" className="row_full form-control" placeholder="Pathshala plan Active"/>
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

export default Addpathshala;