import  React, { useState , useRef, useEffect } from 'react';
import { Link,useHistory } from "react-router-dom";
import './Sidebar.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Sidebar = () => {
    useEffect(() => {
    },[]);
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
            <li className="nav-item nav-profile">
                <a href="#" className="nav-link">
                    <div className="nav-profile-image">
                        <img src={`${images_path}user_profile.png`} alt="profile"/>
                        <span className="login-status online"></span>

                    </div>
                    <div className="nav-profile-text d-flex flex-column">
                        <span className="font-weight-bold mb-2">Name</span>
                        <span className="text-secondary text-small">Project Manager</span>
                    </div>
                    <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/admin/myprofile">
                    <span className="menu-title">My Profile</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/igl">
                    <span className="menu-title">i-GL</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/adminglive">
                    <span className="menu-title">G-Live</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/jigyasha">
                    <span className="menu-title">Jigyasha</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/gsamadhan">
                    <span className="menu-title">G-Samadhan</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/garchive">
                    <span className="menu-title">G-Archive</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/attendance">
                    <span className="menu-title">Attendance</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/abhyasdpp">
                    <span className="menu-title">Abhyas-DPP</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/myperformance">
                    <span className="menu-title">My Performance</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/test">
                    <span className="menu-title">Test</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/performancereport">
                    <span className="menu-title">Performance Report</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/admin/ourcourses">
                    <span className="menu-title">Explore our courses</span>
                </Link>
            </li>

            <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="#downloads" aria-expanded="false" aria-controls="downloads">
                    <span className="menu-title">Downloads</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="downloads">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <Link className="nav-link" to="/admin/paper"> Paper </Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/admin/solution"> Solutions </Link></li>
                    </ul>
                </div>
            </li>
        </ul>
        </nav>
     );
}

export default Sidebar