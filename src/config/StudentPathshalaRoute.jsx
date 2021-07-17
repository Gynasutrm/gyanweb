import Abhyasdpp from '../containers/views/Studentpathshala/components/abhyasdpp_component/Abhyasdpp';
import Attendance from '../containers/views/Studentpathshala/components/attendance_component/Attendance';
import Garchive from '../containers/views/Studentpathshala/components/garchive_component/Garchive';
import Glive from '../containers/views/Studentpathshala/components/glive_component/Glive';
import Gsamadhan from '../containers/views/Studentpathshala/components/gsamadhan_component/Gsamadhan';
import Igl from '../containers/views/Studentpathshala/components/igl_component/Igl';
import Jigyasha from '../containers/views/Studentpathshala/components/jigyasha_component/Jigyasha';
import Myperformance from '../containers/views/Studentpathshala/components/myperformance_component/Myperformance';
import Myprofile from '../containers/views/Studentpathshala/components/myprofile_component/Myprofile';
import Ourcourses from '../containers/views/Studentpathshala/components/ourcourses_component/Ourcourses';
import Paper from '../containers/views/Studentpathshala/components/paper_component/Paper';
import Performancereport from '../containers/views/Studentpathshala/components/performancereport_component/Performancereport';
import Solution from '../containers/views/Studentpathshala/components/solution_component/Solution';
import Test from '../containers/views/Studentpathshala/components/test_component/Test';
import TestIntroduction from '../containers/views/Studentpathshala/components/test_component/test-introduction/testIntroduction';
import TestListCard from '../containers/views/Studentpathshala/components/test_component/test-list-card/testListCard';
import Dashboard from '../containers/views/Studentpathshala/Dashboard/Dashboard';
import { Roles } from './index';

export default [
	{
		component: Dashboard,
		path: '/studentpathshala',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},

	{
		component: Myprofile,
		path: '/studentpathshala/myprofile',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Abhyasdpp,
		path: '/studentpathshala/abhyasdpp',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Attendance,
		path: '/studentpathshala/attendance',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Garchive,
		path: '/studentpathshala/garchive',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},

	{
		component: Glive,
		path: '/studentpathshala/glive',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Gsamadhan,
		path: '/studentpathshala/gsamadhan',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Igl,
		path: '/studentpathshala/igl',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},

	{
		component: Jigyasha,
		path: '/studentpathshala/jigyasha',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Myperformance,
		path: '/studentpathshala/myperformance',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Ourcourses,
		path: '/studentpathshala/ourcourses',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Performancereport,
		path: '/studentpathshala/performancereport',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Paper,
		path: '/studentpathshala/paper',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Solution,
		path: '/studentpathshala/solution',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: Test,
		path: '/studentpathshala/test',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: TestListCard,
		path: '/studentpathshala/testlist',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
	{
		component: TestIntroduction,
		path: '/studentpathshala/instruction',
		title: '',
		permission: [Roles.STUDENT_PATHSHALA],
	},
];
