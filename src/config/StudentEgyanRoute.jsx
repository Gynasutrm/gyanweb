import Abhyasdpp from '../containers/views/Studentegyan/components/abhyasdpp_component/Abhyasdpp';
import Attendance from '../containers/views/Studentegyan/components/attendance_component/Attendance';
import Garchive from '../containers/views/Studentegyan/components/garchive_component/Garchive';
import Glive from '../containers/views/Studentegyan/components/glive_component/Glive';
import Gsamadhan from '../containers/views/Studentegyan/components/gsamadhan_component/Gsamadhan';
import Igl from '../containers/views/Studentegyan/components/igl_component/Igl';
import Jigyasha from '../containers/views/Studentegyan/components/jigyasha_component/Jigyasha';
import Myperformance from '../containers/views/Studentegyan/components/myperformance_component/Myperformance';
import Myprofile from '../containers/views/Studentegyan/components/myprofile_component/Myprofile';
import Ourcourses from '../containers/views/Studentegyan/components/ourcourses_component/Ourcourses';
import Paper from '../containers/views/Studentegyan/components/paper_component/Paper';
import Performancereport from '../containers/views/Studentegyan/components/performancereport_component/Performancereport';
import Solution from '../containers/views/Studentegyan/components/solution_component/Solution';
import Test from '../containers/views/Studentegyan/components/test_component/Test';
import TestIntroduction from '../containers/views/Studentegyan/components/test_component/test-introduction/testIntroduction';
import TestList from '../containers/views/Studentegyan/components/test_component/test-list/testList';
import Dashboard from '../containers/views/Studentegyan/Dashboard/Dashboard';
import { Roles } from './index';

export default [
	{
		component: Dashboard,
		path: '/studentegyan',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Myprofile,
		path: '/studentegyan/myprofile',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Abhyasdpp,
		path: '/studentegyan/abhyasdpp',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Attendance,
		path: '/studentegyan/attendance',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Garchive,
		path: '/studentegyan/garchive',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},

	{
		component: Glive,
		path: '/studentegyan/adminglive',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Gsamadhan,
		path: '/studentegyan/gsamadhan',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Igl,
		path: '/studentegyan/igl',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},

	{
		component: Jigyasha,
		path: '/studentegyan/jigyasha',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Myperformance,
		path: '/studentegyan/myperformance',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Ourcourses,
		path: '/studentegyan/ourcourses',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Performancereport,
		path: '/studentegyan/performancereport',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Paper,
		path: '/studentegyan/paper',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Solution,
		path: '/studentegyan/solution',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: Test,
		path: '/studentegyan/test',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: TestList,
		path: '/studentegyan/testlist',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
	{
		component: TestIntroduction,
		path: '/studentegyan/instruction',
		title: '',
		permission: [Roles.STUDENT_EGYAN],
	},
];
