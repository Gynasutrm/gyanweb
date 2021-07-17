import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Grid } from "@material-ui/core";
import Pagination from '../pagination/Pagination';
import './Cards.css';

const sLogo = process.env.PUBLIC_URL + '/assets/images/';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 300,
//       margin:"10px",
//     backfaceVisibility:"hidden",
//     transition: "transform 0.25s ease-out",

//     '&:hover, &:focus': {
//       transform:"scale(1.05)"
//     },

//     },
//     gridContainer: {
//         paddingLeft: "20px",
//         paddingRight: "20px",
//         marginTop:"50px"
//       },
//     media: {
//       height: 140,
//     },
//     newcard :{
//         display:"flex",
//         position : "absolute",
//         // right:"10px"

//     }
//   });

const Cards = (props) => {
	// const classes = useStyles();

	const [showPerPage, setShowPerPage] = React.useState(8);
	const [pagination, setPagination] = React.useState({
		start: 0,
		end: showPerPage,
	});
	props.details.map((dt) => console.log(dt.imageUrl));

	const filtermap = props.details.filter(
		(detail) =>
			detail.year.toString().includes(props.data) &&
			detail.city.includes(props.city) &&
			detail.title.toLowerCase().includes(props.nameinput.toLowerCase())
	);
	// const filtermap=details.filter(detail => detail.city.includes(city) && detail.title.toLowerCase().includes(nameinput.toLowerCase()) );

	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};

	return (
		//   <div className={classes.newcard}>
		<>
			<div className="col-sm-4">
				{filtermap.slice(pagination.start, pagination.end).map((detail) => (
					<div className="card">
						<div className="image">
							<img src={`${sLogo}${detail.imageUrl}`} alt="" />
						</div>
						<div className="card-inner">
							<div className="header">
								<h2>{detail.title}</h2>
								<h3>{detail.desc}</h3>
							</div>
							<div className="content">
								<p>{detail.city}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<Pagination
				showPerPage={showPerPage}
				onPaginationChange={onPaginationChange}
				total={filtermap.length}
			/>
		</>
	);
};

export default Cards;
