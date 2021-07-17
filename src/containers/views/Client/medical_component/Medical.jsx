import React, { useState, useRef, useEffect } from 'react';
import './Medical.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const medicalJson = [
	{
		rank: 1,
		name: 'All India Institute of Medical Sciences, Ropar-Rupnagar',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '92.69' },
			{ percentage: '96.57' },
			{ percentage: '83.25' },
			{ percentage: '72.56' },
			{ percentage: '100' },
		],
		city: 'City - New Delhi',
		state: 'State - Delhi',
		score: 'Score - 90.69',
	},
	{
		rank: 2,
		name: 'Post Graduate Institute of Medical Education and Research',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '81.14' },
			{ percentage: '82.46' },
			{ percentage: '86.16' },
			{ percentage: '66.08' },
			{ percentage: '71.44' },
		],
		city: 'City - Chandigarh',
		state: 'State - Chandigarh',
		score: 'Score - 80.06',
	},
	{
		rank: 3,
		name: 'Christian Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '82.96' },
			{ percentage: '46.37' },
			{ percentage: '97.02' },
			{ percentage: '64.2' },
			{ percentage: '89.35' },
		],
		city: 'City - Vellore',
		state: 'State - Tamil Nadu',
		score: 'Score - 73.56',
	},
	{
		rank: 4,
		name: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '83.18' },
			{ percentage: '58.05' },
			{ percentage: '90.81' },
			{ percentage: '51.24' },
			{ percentage: '45.59' },
		],
		city: 'City - Lucknow',
		state: 'State - Uttar Pradesh',
		score: 'Score - 70.21',
	},
	{
		rank: 5,
		name: 'Banaras Hindu University',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '72.09' },
			{ percentage: '52.73' },
			{ percentage: '89.09' },
			{ percentage: '57.44' },
			{ percentage: '37.07' },
		],
		city: 'City - Varanasi',
		state: 'State - Uttar Pradesh',
		score: 'Score - 64.72',
	},
	{
		rank: 6,
		name: 'Amrita Institute of Medical Sciences & Research',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '75.74' },
			{ percentage: '44.82' },
			{ percentage: '84.59' },
			{ percentage: '70.59' },
			{ percentage: '42.39' },
		],
		city: 'City - Kochi',
		state: 'State - Kerala',
		score: 'Score - 64.39',
	},
	{
		rank: 7,
		name: 'Jawaharlal Institute of Post Graduate Medical Education & Research',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '75.64' },
			{ percentage: '38.35' },
			{ percentage: '71.93' },
			{ percentage: '69.55' },
			{ percentage: '76.32' },
		],
		city: 'City - Puducherry',
		state: 'State - Puducherry',
		score: 'Score - 63.17',
	},
	{
		rank: 8,
		name: 'Kasturba Medical College ',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '67.41' },
			{ percentage: '39.78' },
			{ percentage: '84.42' },
			{ percentage: '72.01' },
			{ percentage: '66.14' },
		],
		city: 'City - Manipal',
		state: 'State - Karnataka',
		score: 'Score - 62.84',
	},
	{
		rank: 8,
		name: 'King Georges Medical University',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '74.03' },
			{ percentage: '39.78' },
			{ percentage: '90.23' },
			{ percentage: '43.53' },
			{ percentage: '43.21' },
		],
		city: 'City - Lucknow',
		state: 'State - Uttar Pradesh',
		score: 'Score - 62.2',
	},
	{
		rank: 9,
		name: 'Institute of Liver and Biliary Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '88.82' },
			{ percentage: '34.6' },
			{ percentage: '77.57' },
			{ percentage: '58.31' },
			{ percentage: '32.06' },
		],
		city: 'City - New Delhi',
		state: 'State - Delhi',
		score: 'Score - 61.58',
	},
	{
		rank: 10,
		name: 'Madras Medical College and Government General Hospital',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '72.68' },
			{ percentage: '17.49' },
			{ percentage: '98.06' },
			{ percentage: '55.61' },
			{ percentage: '66.14' },
		],
		city: 'City - Chennai',
		state: 'State - Tamil Nadu',
		score: 'Score - 58.84',
	},
	{
		rank: 11,
		name: 'Sri Ramachandra Institute of Higher Education And Research',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '72.29' },
			{ percentage: '27.29' },
			{ percentage: '83.3' },
			{ percentage: '66.91' },
			{ percentage: '46.73' },
		],
		city: 'City - Chennai',
		state: 'State - Tamil Nadu',
		score: 'Score - 57.9',
	},
	{
		rank: 12,
		name: 'St. Johns Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '72.22' },
			{ percentage: '29.16' },
			{ percentage: '84.98' },
			{ percentage: '65.68' },
			{ percentage: '38.47' },
		],
		city: 'City - Bengaluru',
		state: 'State - Karnataka',
		score: 'Score - 57.83',
	},
	{
		rank: 13,
		name: 'Aligarh Muslim University',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '66.9' },
			{ percentage: '37.56' },
			{ percentage: '87' },
			{ percentage: '56.48' },
			{ percentage: '18.3' },
		],
		city: 'City - Aligarh',
		state: 'State - Uttar Pradesh',
		score: 'Score - 56.22',
	},
	{
		rank: 14,
		name: 'Vardhman Mahavir Medical College & Safdarjung Hospital',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '74.25' },
			{ percentage: '25.25' },
			{ percentage: '89.28' },
			{ percentage: '59.03' },
			{ percentage: '25.12' },
		],
		city: 'City - New Delhi',
		state: 'State - Delhi',
		score: 'Score - 56.12',
	},
	{
		rank: 15,
		name: 'Maulana Azad Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '69.43' },
			{ percentage: '26.43' },
			{ percentage: '80.4' },
			{ percentage: '55.08' },
			{ percentage: '49.62' },
		],
		city: 'City - Delhi',
		state: 'State - Delhi',
		score: 'Score - 55.31',
	},
	{
		rank: 16,
		name: 'Christian Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '74.87' },
			{ percentage: '20.34' },
			{ percentage: '85.79' },
			{ percentage: '65.89' },
			{ percentage: '26.97' },
		],
		city: 'City - Ludhiana',
		state: 'State - Punjab',
		score: 'Score - 55.01',
	},
	{
		rank: 17,
		name: 'University College of Medical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '65.59' },
			{ percentage: '37.94' },
			{ percentage: '74.63' },
			{ percentage: '61.41' },
			{ percentage: '28.73' },
		],
		city: 'City - Delhi',
		state: 'State - Delhi',
		score: 'Score - 55',
	},
	{
		rank: 18,
		name: 'JSS Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '67.75' },
			{ percentage: '18.25' },
			{ percentage: '85.8' },
			{ percentage: '68.37' },
			{ percentage: '45.2' },
		],
		city: 'City - Mysore',
		state: 'State - Karnataka',
		score: 'Score - 54.32',
	},
	{
		rank: 19,
		name: 'Kasturba Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '66.91' },
			{ percentage: '21.12' },
			{ percentage: '82.32' },
			{ percentage: '69.77' },
			{ percentage: '39.81' },
		],
		city: 'City - Mangaluru',
		state: 'State - Karnataka',
		score: 'Score - 53.83',
	},
	{
		rank: 20,
		name: 'Jamia Hamdard',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '65.91' },
			{ percentage: '41.49' },
			{ percentage: '60' },
			{ percentage: '68.94' },
			{ percentage: '17.55' },
		],
		city: 'City - New Delhi',
		state: 'State - Delhi',
		score: 'Score - 52.87',
	},
	{
		rank: 21,
		name: 'Siksha O Anusandhan',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '71.83' },
			{ percentage: '18.65' },
			{ percentage: '83.4' },
			{ percentage: '63.2' },
			{ percentage: '25.75' },
		],
		city: 'City - Bhubaneswar',
		state: 'State - Odisha',
		score: 'Score - 52.72',
	},
	{
		rank: 22,
		name: 'Dr. D. Y. Patil Vidyapeeth',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '71.73' },
			{ percentage: '20.49' },
			{ percentage: '78.6' },
			{ percentage: '69.79' },
			{ percentage: '16.8' },
		],
		city: 'City - Pune',
		state: 'State - Maharashtra',
		score: 'Score - 52.05',
	},
	{
		rank: 23,
		name: 'Govt. Medical College & Hospital',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '69.66' },
			{ percentage: '19.06' },
			{ percentage: '84' },
			{ percentage: '58.92' },
			{ percentage: '26.97' },
		],
		city: 'City - Chandigarh',
		state: 'State - Chandigarh',
		score: 'Score - 52.01',
	},
	{
		rank: 24,
		name: 'Dayanand Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '77.05' },
			{ percentage: '15.27' },
			{ percentage: '87.32' },
			{ percentage: '53' },
			{ percentage: '12.77' },
		],
		city: 'City - Ludhiana',
		state: 'State - Punjab',
		score: 'Score - 51.74',
	},
	{
		rank: 25,
		name: 'Sawai Man Singh Medical College',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '74.89' },
			{ percentage: '12.31' },
			{ percentage: '88.67' },
			{ percentage: '49.49' },
			{ percentage: '16.02' },
		],
		city: 'City - Jaipur',
		state: 'State - Rajasthan',
		score: 'Score - 50.44',
	},
	{
		rank: 25,
		name: 'PSG Institute of Medical Sciences & Research',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '72.58' },
			{ percentage: '8' },
			{ percentage: '79.75' },
			{ percentage: '62.86' },
			{ percentage: '40.25' },
		],
		city: 'City - Coimbatore',
		state: 'State - Tamil Nadu',
		score: 'Score - 50.44',
	},
	{
		rank: 26,
		name: 'Datta Meghe Institute of Medical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '70.47' },
			{ percentage: '15.11' },
			{ percentage: '82.59' },
			{ percentage: '68.35' },
			{ percentage: '11.91' },
		],
		city: 'City - Wardha',
		state: 'State - Maharashtra',
		score: 'Score - 50.21',
	},
	{
		rank: 27,
		name: 'M. S. Ramaiah Medical College Close',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '75.28' },
			{ percentage: '10.16' },
			{ percentage: '74.57' },
			{ percentage: '60.71' },
			{ percentage: '34.14' },
		],
		city: 'City - Bengaluru',
		state: 'State - Karnataka',
		score: 'Score - 50.02',
	},
	{
		rank: 28,
		name: 'S. R. M. Institute of Science and Technology',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '68.9' },
			{ percentage: '28.13' },
			{ percentage: '61.8' },
			{ percentage: '59.9' },
			{ percentage: '16.02' },
		],
		city: 'City - Chennai',
		state: 'State - Tamil Nadu',
		score: 'Score - 49.06',
	},
	{
		rank: 29,
		name: 'Kalinga Institute of Industrial Technology',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '68.99' },
			{ percentage: '16.49' },
			{ percentage: '69.8' },
			{ percentage: '61.98' },
			{ percentage: '23.19' },
		],
		city: 'City - Bhubaneswar',
		state: 'State - Odisha',
		score: 'Score - 48.18',
	},
	{
		rank: 30,
		name: 'Maharishi Markandeshwar',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '68.99' },
			{ percentage: '16.49' },
			{ percentage: '69.8' },
			{ percentage: '61.98' },
			{ percentage: '23.19' },
		],
		city: 'City - Ambala',
		state: 'State - Haryana',
		score: 'Score - 48.13',
	},
	{
		rank: 31,
		name: 'Saveetha Institute of Medical and Technical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '69.69' },
			{ percentage: '20.51' },
			{ percentage: '58' },
			{ percentage: '66.4' },
			{ percentage: '11.91' },
		],
		city: 'City - Chennai',
		state: 'State - Tamil Nadu',
		score: 'Score - 46.49',
	},
	{
		rank: 32,
		name: 'Annamalai University',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '59.48' },
			{ percentage: '23.66' },
			{ percentage: '73.12' },
			{ percentage: '46.6' },
			{ percentage: '22.53' },
		],
		city: 'City - Annamalainagar',
		state: 'State - Tamil Nadu',
		score: 'Score - 46.47',
	},
	{
		rank: 33,
		name: 'K. S. Hegde Medical Academy',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '69.62' },
			{ percentage: '7.71' },
			{ percentage: '67.45' },
			{ percentage: '69.19' },
			{ percentage: '26.97' },
		],
		city: 'City - Mangaluru',
		state: 'State - Karnataka',
		score: 'Score - 46.31',
	},
	{
		rank: 34,
		name: 'Krishna Institute of Medical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '70.04' },
			{ percentage: '13.65' },
			{ percentage: '68.86' },
			{ percentage: '63.93' },
			{ percentage: '7.35' },
		],
		city: 'City - Karad',
		state: 'State - Maharashtra',
		score: 'Score - 46',
	},
	{
		rank: 35,
		name: 'Sri Venkateswara Institute of Medical Sciences',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '69.83' },
			{ percentage: '6.74' },
			{ percentage: '78.12' },
			{ percentage: '52.19' },
			{ percentage: '21.17' },
		],
		city: 'City - Tirupati',
		state: 'State - Andhra Pradesh',
		score: 'Score - 45.93',
	},
	{
		rank: 36,
		name: 'Mahatma Gandhi Medical College and Research Institute',
		info: 'NIRF Parametric Score (out of 100)',
		details: [
			{ percentage: '67.64' },
			{ percentage: '10.5' },
			{ percentage: '67.26' },
			{ percentage: '74.49' },
			{ percentage: '12.77' },
		],
		city: 'City - Puducherry',
		state: 'State - Pondicherry',
		score: 'Score - 45.62',
	},
];
const Medical = () => {
	useEffect(() => {}, []);
	return (
		<section className="row_full">
			<div className="row_full medicalTagarea text-center">
				<div className="container">
					<div className="row_full">
						<h2 className="row_full">Collage Ranking</h2>
						<p className="row_full">Top Medical Colleges in India</p>
					</div>
				</div>
			</div>
			<div className="row_full medicalBox">
				<div className="container">
					<div className="row_full disp_flex">
						<div className="medicalItem">
							{medicalJson.map((item) => (
								<div key={item.rank} className="row_full collageRankList">
									<div className="row_full">
										<div className="rankList">
											<a className="rank">Rank {item.rank}</a>
										</div>
										<div className="rankList">
											<div className="row_full colrankTitle">
												<div className="row_full collageName">{item.name}</div>
												<div style={{ float: 'left' }} className="collageInfo">
													{item.info}{' '}
													<i
														className="fa fa-info-circle"
														aria-hidden="true"
													></i>
													<div className="infoHover">
														National Institutional Ranking Framework
													</div>
												</div>
											</div>
											<u className="row_full tlrList">
												<li>
													<span>
														<strong>TLR (100)</strong>
													</span>
													<span>
														<strong>RPC (100)</strong>
													</span>
													<span>
														<strong>GO (100)</strong>
													</span>
													<span>
														<strong>OI (100)</strong>
													</span>
													<span>
														<strong>PERCEPTION (100)</strong>
													</span>
												</li>
												<li>
													{item.details.map((item1) => (
														<span>{item1.percentage}</span>
													))}
												</li>
											</u>
											<div className="row_full collageCity">
												<span>{item.city}</span>
												<span>{item.state}</span>
												<span>{item.score}</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Medical;
