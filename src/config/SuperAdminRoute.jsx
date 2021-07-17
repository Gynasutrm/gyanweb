import Addcourses from '../containers/views/Global/components/addcourses_component/Addcourses';
import Addexam from '../containers/views/Global/components/addexam_component/Addexam';
import Addquestion from '../containers/views/Global/components/addquestion_component/Addquestion';
import Addsubexam from '../containers/views/Global/components/addsubexam_component/Addsubexam';
import Addsubsubtopic from '../containers/views/Global/components/addsubsubtopic_component/Addsubsubtopic';
import Addsubtopic from '../containers/views/Global/components/addsubtopic_component/Addsubtopic';
import Addtopic from '../containers/views/Global/components/addtopic_component/Addtopic';
import Classes from '../containers/views/Global/components/classes_component/Classes';
import Coursecategory from '../containers/views/Global/components/coursecategory_component/Coursecategory';
import Finaltestseries from '../containers/views/Global/components/finaltestseries_component/Finaltestseries';
import GenerateCourseactivation from '../containers/views/Global/components/generate_courseactivation_component/GenerateCourseactivation';
import Problemactuletype from '../containers/views/Global/components/problemactuletype_component/Problemactuletype';
import AddUser from '../containers/views/Global/components/registration_component/AddUser';
import CourseActivation from '../containers/views/Global/components/registration_component/courseActivation/courseActivation';
import EditUser from '../containers/views/Global/components/registration_component/EditUser';
import Registration from '../containers/views/Global/components/registration_component/Registration';
import ViewUser from '../containers/views/Global/components/registration_component/ViewUser';
import Stream from '../containers/views/Global/components/stream_component/Stream';
import Subject from '../containers/views/Global/components/subject_component/Subject';
import Test4 from '../containers/views/Global/components/test4_component/Test4';
import Testseries from '../containers/views/Global/components/testseries_component/Testseries';
import Testtype from '../containers/views/Global/components/testtype_component/Testtype';
import Test from '../containers/views/Global/components/test_component/Test';
import Superdashboard from '../containers/views/Global/superdashboard_component/Superdashboard';
import Roles from './Roles';

export default [
	{
		component: Superdashboard,
		path: '/global',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},

	{
		component: Stream,
		path: '/global/stream',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Classes,
		path: '/global/classes',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Subject,
		path: '/global/subject',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addexam,
		path: '/global/addexam',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addsubexam,
		path: '/global/subexamtype',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addtopic,
		path: '/global/addtopic',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addsubtopic,
		path: '/global/addsubtopic',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},

	{
		component: Addsubsubtopic,
		path: '/global/addsubsubtopic',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Coursecategory,
		path: '/global/coursecategory',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Testtype,
		path: '/global/testtype',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addquestion,
		path: '/global/addquestion',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Problemactuletype,
		path: '/global/problemactuletype',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Addcourses,
		path: '/global/addcourse',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Registration,
		path: '/global/registration',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: AddUser,
		path: '/global/registration/adduser',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: ViewUser,
		path: '/global/registration/viewuser',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: CourseActivation,
		path: '/global/registration/courseactivation',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: EditUser,
		path: '/global/registration/edituser',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: GenerateCourseactivation,
		path: '/global/generatecourseactivation',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Testseries,
		path: '/global/testseries',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Finaltestseries,
		path: '/global/finaltestseries',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Test4,
		path: '/global/finaltestseries/test4',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
	{
		component: Test,
		path: '/global/test',
		title: '',
		permission: [Roles.SUPER_ADMIN],
	},
];
