import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import './Supersidebar.scss';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 250,
		backgroundColor: theme.palette.background.paper,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));
const items = [
	{
		id: 'tab1',
		title: 'Global Setting',
		routeId: '',
		icon: 'fa fa-cog',
		subNav: [
			{
				title: 'Manage Course category',
				routeId: '/global/coursecategory',
			},
			{
				title: 'Manage Stream',
				routeId: '/global/stream',
			},
			{
				title: 'Manage Class',
				routeId: '/global/classes',
			},
			{
				title: 'Manage Exam Type',
				routeId: '/global/addexam',
			},
			{
				title: 'Manage Sub Exam Type',
				routeId: '/global/subexamtype',
			},
			{
				title: 'Manage Subject',
				routeId: '/global/subject',
			},
			{
				title: 'Manage Chapter',
				routeId: '/global/addtopic',
			},
			{
				title: 'Manage Topic',
				routeId: '/global/addsubtopic',
			},
			{
				title: 'Manage Sub Topic',
				routeId: '/global/addsubsubtopic',
			},
			{
				title: 'Manage Test type',
				routeId: '/global/testtype',
			},
			{
				title: 'Manage Courses',
				routeId: '/global/addcourse',
			},
			{
				title: 'Manage Problem Actule Type',
				routeId: '/global/problemactuletype',
			},
			{
				title: 'Manage Question',
				routeId: '/global/addquestion',
			},
			// {
			//   title: "Test Series",
			//   routeId: "/global/testseries",
			// },
			// {
			//   title: "Test",
			//   routeId: "/global/test",
			// },
			{
				title: 'Final Test Series',
				routeId: '/global/finaltestseries',
			},
		],
	},
	{
		id: 'tab4',
		title: 'Generate Course activation',
		routeId: '/global/generatecourseactivation',
		icon: 'fa fa-book',
		subNav: [],
	},
	// {
	//   id: "tab5",
	//   title: "Exam",
	//   routeId: "",
	//   icon: "fa fa-list-alt",
	//   subNav: [
	//     {
	//       title: "Exam",
	//       routeId: "/global/exam",
	//     },
	//   ],
	// },
	{
		id: 'tab6',
		title: 'Registration',
		routeId: '/global/registration',
		icon: 'fa fa-book',
		subNav: [],
	},
	// {
	//   id: "tab10",
	//   title: "Test 4",
	//   routeId: "/global/test4",
	//   icon: "fa fa-book",
	//   subNav: [],
	// },
];

const Supersidebar = () => {
	const [isopen, setIsopen] = useState('');

	useEffect(() => {}, []);

	const openmenu = (idd) => {
		setIsopen(idd);
	};
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				className={`${classes.root} super-admin-sidebar sideMenuElm`}
			>
				{items.map((menu, no) => (
					<>
						{menu.subNav.length > 0 ? (
							<>
								<ListItem button onClick={handleClick} className="has-sub-menu">
									<i className={`${menu.icon} pr-2`} aria-hidden="true"></i>
									<ListItemText primary={menu.title} />
									{open ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={open} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										{menu.subNav.map((subNavItem, y) => (
											<ListItem button className={classes.nested}>
												<NavLink
													activeClassName="active"
													to={subNavItem.routeId}
													className="menu-item"
												>
													<div className="d-flex">
														<i
															className={`${subNavItem.icon} pr-2`}
															aria-hidden="true"
														></i>
														<ListItemText primary={subNavItem.title} />
													</div>
												</NavLink>
											</ListItem>
										))}
									</List>
								</Collapse>
							</>
						) : (
							<ListItem button>
								<NavLink
									activeClassName="active"
									className="menu-item"
									to={menu.routeId}
								>
									<div className="d-flex">
										<i className={`${menu.icon} pr-2`} aria-hidden="true"></i>
										<ListItemText primary={menu.title} />
									</div>
								</NavLink>
							</ListItem>
						)}
					</>
				))}
			</List>
			{/* <nav className="sidebar">
        <ul className="row_full sideMenuElm">
          {items.map((index, no) => (
            <li>
              <NavLink
                activeClassName="active"
                onClick={() => {
                  openmenu(index.id);
                }}
                to={index.routeId != "" && index.routeId}
              >
                <i class={index.icon} aria-hidden="true"></i> {index.title}{" "}
                {index.routeId == "" ? (
                  <i
                    class={
                      index.id == isopen
                        ? "fa fright fa-chevron-up"
                        : "fa fright fa-chevron-down"
                    }
                    aria-hidden="true"
                  ></i>
                ) : null}
              </NavLink>
              {index.subNav.length > 0 && index.id == isopen ? (
                <div className="row_full innerMenuElm">
                  <ul className="row_full">
                    {index.subNav.map((x, y) => (
                      <li>
                        Hello
                        <NavLink activeClassName="active" to={x.routeId}>
                          {x.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </nav> */}
		</>
	);
};

export default Supersidebar;
