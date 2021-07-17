import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Sidebar.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Sidebar = () => {
	useEffect(() => {}, []);
	return (
		<nav className="cd-side-nav js-cd-side-nav">
			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
					<Link className="nav-link active" to="/pathshala">
						{' '}
						Dashboard
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--comments js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/myprofile">
						My Profile
					</Link>
				</li>
			</ul>

			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--bookmarks js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/igl">
						i-GL
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--images js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/adminglive">
						G-Live
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/jigyasha">
						Jigyasha
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/gsamadhan">
						G-Samadhan
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/garchive">
						G-Archive
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/attendance">
						Attendance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/abhyasdpp">
						Abhyas-DPP
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/myperformance">
						My Performance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/test">
						Test
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/performancereport">
						Performance Report
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/ourcourses">
						Explore our courses
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/paper">
						Download Paper
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/pathshala/solution">
						Solution
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;
