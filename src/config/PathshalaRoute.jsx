import Abhyasdpp from '../containers/views/Pathshala/components/abhyasdpp_component/Abhyasdpp';
import Attendance from '../containers/views/Pathshala/components/attendance_component/Attendance';
import Garchive from '../containers/views/Pathshala/components/garchive_component/Garchive';
import Glive from '../containers/views/Pathshala/components/glive_component/Glive';
import Gsamadhan from '../containers/views/Pathshala/components/gsamadhan_component/Gsamadhan';
import Igl from '../containers/views/Pathshala/components/igl_component/Igl';
import Jigyasha from '../containers/views/Pathshala/components/jigyasha_component/Jigyasha';
import Myperformance from '../containers/views/Pathshala/components/myperformance_component/Myperformance';
import Myprofile from '../containers/views/Pathshala/components/myprofile_component/Myprofile';
import Ourcourses from '../containers/views/Pathshala/components/ourcourses_component/Ourcourses';
import Paper from '../containers/views/Pathshala/components/paper_component/Paper';
import Performancereport from '../containers/views/Pathshala/components/performancereport_component/Performancereport';
import Solution from '../containers/views/Pathshala/components/solution_component/Solution';
import Test from '../containers/views/Pathshala/components/test_component/Test';
import Dashboard from '../containers/views/Pathshala/dashboard_component/Dashboard';
import { Roles } from './index';

export default [
	{
		component: Dashboard,
		path: '/pathshala',
		title: '',
		permission: [Roles.PATHSHALA],
	},

	{
		component: Myprofile,
		path: '/pathshala/myprofile',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Abhyasdpp,
		path: '/pathshala/abhyasdpp',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Attendance,
		path: '/pathshala/attendance',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Garchive,
		path: '/pathshala/garchive',
		title: '',
		permission: [Roles.PATHSHALA],
	},

	{
		component: Glive,
		path: '/pathshala/glive',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Gsamadhan,
		path: '/pathshala/gsamadhan',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Igl,
		path: '/pathshala/igl',
		title: '',
		permission: [Roles.PATHSHALA],
	},

	{
		component: Jigyasha,
		path: '/pathshala/jigyasha',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Myperformance,
		path: '/pathshala/myperformance',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Ourcourses,
		path: '/pathshala/ourcourses',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Performancereport,
		path: '/pathshala/performancereport',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Paper,
		path: '/pathshala/paper',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Solution,
		path: '/pathshala/solution',
		title: '',
		permission: [Roles.PATHSHALA],
	},
	{
		component: Test,
		path: '/pathshala/test',
		title: '',
		permission: [Roles.PATHSHALA],
	},
];
