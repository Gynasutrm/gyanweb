import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './StudentEgyanSidebar.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const StudentEgyanSidebar = () => {
	useEffect(() => {}, []);
	return (
		<nav className="cd-side-nav js-cd-side-nav">
			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
					<Link className="nav-link active" to="/studentegyan">
						{' '}
						Dashboard
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--comments js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/myprofile">
						My Profile
					</Link>
				</li>
			</ul>

			<ul className="cd-side__list js-cd-side__list">
				<li className="cd-side__item cd-side__item--has-children cd-side__item--bookmarks js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/igl">
						i-GL
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--images js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/adminglive">
						G-Live
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/jigyasha">
						Jigyasha
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/gsamadhan">
						G-Samadhan
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/garchive">
						G-Archive
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/attendance">
						Attendance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/abhyasdpp">
						Abhyas-DPP
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/myperformance">
						My Performance
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/test">
						Test
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/performancereport">
						Performance Report
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/ourcourses">
						Explore our courses
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/paper">
						Download Paper
					</Link>
				</li>

				<li className="cd-side__item cd-side__item--has-children cd-side__item--users js-cd-item--has-children">
					<Link className="nav-link" to="/studentegyan/solution">
						Solution
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default StudentEgyanSidebar;
