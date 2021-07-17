import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './StudentPathshalaSidebar.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const StudentPathshalaSidebar = () => {
	useEffect(() => {}, []);
	return (
		<nav className="cd-side-nav js-cd-side-nav">
			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
					<Link className="nav-link active" to="/studentpathshala">
						{' '}
						Dashboard
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--comments js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/myprofile">
						My Profile
					</Link>
				</li>
			</ul>

			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--bookmarks js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/igl">
						i-GL
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--images js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/adminglive">
						G-Live
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/jigyasha">
						Jigyasha
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/gsamadhan">
						G-Samadhan
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/garchive">
						G-Archive
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/attendance">
						Attendance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/abhyasdpp">
						Abhyas-DPP
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/myperformance">
						My Performance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/test">
						Test
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/performancereport">
						Performance Report
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/ourcourses">
						Explore our courses
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/paper">
						Download Paper
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentpathshala/solution">
						Solution
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default StudentPathshalaSidebar;
