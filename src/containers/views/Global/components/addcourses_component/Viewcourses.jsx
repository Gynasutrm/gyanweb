import  React, { useState , useRef, useEffect } from 'react';
const Viewcourses = (props) => {

    useEffect(() => {

    },[]);

    return (
        <div className="row_full popupCntr">
            <div className="container">
                <div className="row_full disp_flex">
                    <div className="midelmContent position_rel" style={{width:'85%'}}>
                        <i onClick={()=>props.action()} className="fa closeRemove fa-times" aria-hidden="true"></i>
                        <div className="row_full" style={{padding:'10px 25px 25px 25px'}}>
                            <h3 className="row_full" style={{marginBottom:'25px',textTransform:'initial'}}>Courses Details</h3>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Stream name</th>
                                    <th>Course name</th>
                                    <th>Course code</th>
                                    <th>Course category name</th>
                                    <th>Medium</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.data.stream_name}</td>
                                        <td>{props.data.course_name}</td>
                                        <td>{props.data.course_code}</td>
                                        <td>{props.data.course_category_name}</td>
                                        <td>{props.data.medium}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Viewcourses;