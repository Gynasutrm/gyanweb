import  React, { useState , useRef, useEffect } from 'react';
import './Engineering.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Engineering = () => {
  const engineeringJson = [
    {rank:1,name:'Indian Institute Of Technology, Madras',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'88.26'},
        {percentage:'94.02'},
        {percentage:'81.81'},
        {percentage:'86.11'},
        {percentage:'98'}
      ],
      city:'City - Chennai',
      state:'State - Tamil Nadu',
      score:'Score - 89.41'
    },
    {rank:2,name:'Indian Institute Of Technology, Bombay',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'85.93'},
        {percentage:'94.14'},
        {percentage:'84.97'},
        {percentage:'74.84'},
        {percentage:'99'}
      ],
      city:'City - Bombay',
      state:'State - Maharashtra',
      score:'Score - 87.66'
    },
  {rank:3,name:'Indian Institute Of Technology, Kharagpur',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'76.23'},
        {percentage:'92.68'},
        {percentage:'83.95'},
        {percentage:'78.05'},
        {percentage:'97'}
      ],
      city:'City - Kharagpur',
      state:'State - West Bengal',
      score:'Score - 83.91'
    },
  {rank:4,name:'Indian Institute Of Technology, Delhi',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'80.27'},
        {percentage:'91.62'},
        {percentage:'74.72'},
        {percentage:'66.17'},
        {percentage:'98'}
      ],
      city:'City - New Delhi',
      state:'State - Delhi',
      score:'Score - 82.02'
    },
  {rank:5,name:'Indian Institute Of Technology, Kanpur',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'66.08'},
        {percentage:'93.52'},
        {percentage:'85.62'},
        {percentage:'70.59'},
        {percentage:'98'}
      ],
      city:'City - Kanpur',
      state:'State - Uttar Pradesh',
      score:'Score - 81.07'
    },
  {rank:6,name:'Indian Institute Of Technology, Roorkee',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'67.83'},
        {percentage:'83.5'},
        {percentage:'81.61'},
        {percentage:'76.59'},
        {percentage:'96'}
      ],
      city:'City - Roorkee',
      state:'State - Uttarakhand',
      score:'Score - 78.68'
    },
  {rank:7,name:'Indian Institute Of Technology, Hyderabad',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'76.76'},
        {percentage:'76.83'},
        {percentage:'80.89'},
        {percentage:'63.76'},
        {percentage:'95'}
      ],
      city:'City - Hyderabad',
      state:'State - Telangana',
      score:'Score - 77.22'
    },
  {rank:8,name:'Indian Institute Of Technology, Gandhinagar',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'80.36'},
        {percentage:'72.09'},
        {percentage:'64.91'},
        {percentage:'71.94'},
        {percentage:'96'}
      ],
      city:'City - Ahmedabad',
      state:'State - Gujarat',
      score:'Score - 75.2'
    },
  {rank:9,name:'Indian Institute Of Technology, Ropar-Rupnagar, Gandhinagar',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'89.96'},
        {percentage:'73.56'},
        {percentage:'86.42'},
        {percentage:'60.67'},
        {percentage:'38'}
      ],
      city:'City - Rupnagar',
      state:'State - Punjab',
      score:'Score - 74.88'
    },
  {rank:10,name:'Indian Institute Of Technology, Patna',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'79.8'},
        {percentage:'68.29'},
        {percentage:'74.13'},
        {percentage:'68.78'},
        {percentage:'93'}
      ],
      city:'City - Patna',
      state:'State - Bihar',
      score:'Score - 74.68'
    },
  {rank:11,name:'Indian Institute Of Technology, North Guwahati',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'71.92'},
        {percentage:'78.66'},
        {percentage:'71.82'},
        {percentage:'65.62'},
        {percentage:'94'}
      ],
      city:'City - Guwahati',
      state:'State - Assam',
      score:'Score - 74.62'
    },
  {rank:12,name:'National Institute Of Technology, Tiruchirappalli',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'56.99'},
        {percentage:'78.66'},
        {percentage:'81.5'},
        {percentage:'79.5'},
        {percentage:'92'}
      ],
      city:'City - Tiruchirappalli',
      state:'State - Tamil Nadu',
      score:'Score - 74.45'
    },
  {rank:13,name:'Vellore Institute Of Technology',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'66.95'},
        {percentage:'74.72'},
        {percentage:'77.38'},
        {percentage:'77.11'},
        {percentage:'91'}
      ],
      city:'City - Vellore',
      state:'State - Tamil Nadu',
      score:'Score - 74.4'
    },
  {rank:14,name:'Indian Institute Of Technology (Banaras Hindu University), Varanasi',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'59.08'},
        {percentage:'80.63'},
        {percentage:'96.8'},
        {percentage:'56.73'},
        {percentage:'96'}
      ],
      city:'City - Varanasi',
      state:'State - Uttar Pradesh',
      score:'Score - 74.39'
    },
  {rank:15,name:'Sardar Vallabhbhai National Institute Of Technology',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'59.02'},
        {percentage:'85.24'},
        {percentage:'96.8'},
        {percentage:'68.81'},
        {percentage:'83'}
      ],
      city:'City - Surat',
      state:'State - Gujarat',
      score:'Score - 73.13'
    },
  {rank:16,name:'Indian Institute Of Technology, Indore',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'86.75'},
        {percentage:'75.78'},
        {percentage:'89.85'},
        {percentage:'39.23'},
        {percentage:'46'}
      ],
      city:'City - Indore',
      state:'State - Madhya Pradesh',
      score:'Score -72'
    },
  {rank:17,name:'Birla Institute Of Technology ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'55.39'},
        {percentage:'81.06'},
        {percentage:'82.47'},
        {percentage:'65.5'},
        {percentage:'90'}
      ],
      city:'City - RANCHI',
      state:'State - Jharkhand',
      score:'Score -71.8'
    },
  {rank:18,name:'Visvesvaraya National Institute Of Technology, Nagpur (Deemed University)-Nagpur ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'59.98'},
        {percentage:'73.64'},
        {percentage:'69.05'},
        {percentage:'82.7'},
        {percentage:'85'}
      ],
      city:'City - Nagpur',
      state:'State - Maharashtra',
      score:'Score -71.29'
    },
  {rank:19,name:'National Institute Of Technology, Rourkela-Rourkela',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'60.78'},
        {percentage:'75.69'},
        {percentage:'81.49'},
        {percentage:'73.21'},
        {percentage:'74'}
      ],
      city:'City - Rourkela',
      state:'State - Odisha',
      score:'Score -70.8'
    },
  {rank:20,name:'Indian Institute Of Engineering Science And Technology,ShibPur',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'57.76'},
        {percentage:'83.07'},
        {percentage:'76.07'},
        {percentage:'59.5'},
        {percentage:'87'}
      ],
      city:'City - Howrah',
      state:'State - West Bengal',
      score:'Score -70.35'
    },
  {rank:21,name:'Indian Institute Of Technology, Mandi ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'85.83'},
        {percentage:'70.35'},
        {percentage:'81.05'},
        {percentage:'47.29'},
        {percentage:'43'}
      ],
      city:'City - Mandi',
      state:'State - Himachal Pradesh',
      score:'Score -70.32'
    },
  {rank:22,name:'College Of Engineering, Pune ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'58.61'},
        {percentage:'66.4'},
        {percentage:'82.92'},
        {percentage:'74.67'},
        {percentage:'95'}
      ],
      city:'City - PUNE',
      state:'State - Maharashtra',
      score:'Score -69.71'
    },
  {rank:23,name:'National Institute Of Technology, Karnataka-Mangalore',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'60.26'},
        {percentage:'67.86'},
        {percentage:'77.29'},
        {percentage:'70.22'},
        {percentage:'88'}
      ],
      city:'City - Mangalore',
      state:'State - Karnataka',
      score:'Score - 68.95'
    },
  {rank:24,name:'Motilal Nehru National Institute Of Technology',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'54.63'},
        {percentage:'72.07'},
        {percentage:'74.08'},
        {percentage:'75.04'},
        {percentage:'82'}
      ],
      city:'City - Allahabad',
      state:'State - Uttar Pradesh',
      score:'Score -67.94'
    },
  {rank:25,name:'Psg College Of Technology-Coimbatore ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'56.72'},
        {percentage:'64.67'},
        {percentage:'77.3'},
        {percentage:'72.1'},
        {percentage:'94'}
      ],
      city:'City - COIMBATORE',
      state:'State - Tamil Nadu',
      score:'Score - 67.8'
    },
  {rank:26,name:'Indian Institute Of Technology, Jodhpur ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'73.02'},
        {percentage:'66.41'},
        {percentage:'60.71'},
        {percentage:'60.11'},
        {percentage:'86'}
      ],
      city:'City - Jodhpur',
      state:'State - Rajasthan',
      score:'Score - 67.68'
    },
  {rank:27,name:'Indian Institute Of Technology, Bhubaneswar',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'67.4'},
        {percentage:'75.73'},
        {percentage:'61.06'},
        {percentage:'51.57'},
        {percentage:'85'}
      ],
      city:'City - Bhubaneswar',
      state:'State - Odisha',
      score:'Score - 67.58'
    },
  {rank:28,name:'Thapar University-Patiala ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'49.43'},
        {percentage:'78.7'},
        {percentage:'77.69'},
        {percentage:'64.58'},
        {percentage:'83'}
      ],
      city:'City - PATIALA',
      state:'State - Punjab',
      score:'Score - 67.51'
    },
  {rank:29,name:'National Institute Of Technology, Warangal',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'58.2'},
        {percentage:'71.82'},
        {percentage:'75.41'},
        {percentage:'61.2'},
        {percentage:'82'}
      ],
      city:'City - Warangal',
      state:'State - Telangana',
      score:'Score - 67.12'
    },
  {rank:30,name:'Thiagarajar College Of Engineering-Madurai ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'57.93'},
        {percentage:'75.86'},
        {percentage:'80.94'},
        {percentage:'57.91'},
        {percentage:'63'}
      ],
      city:'City - MADURAI',
      state:'State - Tamil Nadu',
      score:'Score - 66.51'
    },
  {rank:31,name:'National Institute Of Technology, Durgapur ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'49.24'},
        {percentage:'79.62'},
        {percentage:'65.86'},
        {percentage:'66.15'},
        {percentage:'78'}
      ],
      city:'City - Durgapur',
      state:'State - West Bengal',
      score:'Score - 65.4'
    },
  {rank:32,name:'Amrita School Of Engineering',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'56.81'},
        {percentage:'63.75'},
        {percentage:'74.02'},
        {percentage:'62.08'},
        {percentage:'75'}
      ],
      city:'City - KARUNAGAPALLY',
      state:'State - Kerala',
      score:'Score - 63.94'
    },
  {rank:33,name:'Shanmugha Arts Science Technology & Research Academy (Sastra)',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'60.21'},
        {percentage:'65.55'},
        {percentage:'81'},
        {percentage:'58.4'},
        {percentage:'51'}
      ],
      city:'City - Thanjavur',
      state:'State - Tamil Nadu',
      score:'Score - 63.77'
    },
  {rank:34,name:'Kalinga Institue Of Industrial Technology',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'60.63'},
        {percentage:'73.91'},
        {percentage:'83.55'},
        {percentage:'70.31'},
        {percentage:'1'}
      ],
      city:'City - BHUBANESWAR',
      state:'State - Odisha',
      score:'Score - 63.4'
    },
  {rank:35,name:'M. S. Ramaiah Institute Of Technology-Bangalore',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'40.32'},
        {percentage:'72.19'},
        {percentage:'95.08'},
        {percentage:'66.33'},
        {percentage:'61'}
      ],
      city:'City - BANGALORE',
      state:'State - Karnataka',
      score:'Score - 63.39'
    },
  {rank:36,name:'Coimbatore Institute Of Technology-Coimbatore',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'48.31'},
        {percentage:'62.54'},
        {percentage:'82.91'},
        {percentage:'68.54'},
        {percentage:'74'}
      ],
      city:'City - COIMBATORE',
      state:'State - Tamil Nadu',
      score:'Score - 62.58'
    },
  {rank:38,name:'R.V. College Of Engineering-Bengaluru ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'55.4'},
        {percentage:'65.31'},
        {percentage:'77.86'},
        {percentage:'48.75'},
        {percentage:'76'}
      ],
      city:'City - BENGALURU',
      state:'State - Karnataka',
      score:'Score - 62.26'
    },
  {rank:39,name:'National Institute Of Technology, Calicut',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'56.09'},
        {percentage:'71.53'},
        {percentage:'72.03'},
        {percentage:'64.42'},
        {percentage:'40'}
      ],
      city:'City - Calicut',
      state:'State - Kerala',
      score:'Score - 62.26'
    },
  {rank:40,name:'Malaviya National Institute Of Technology, Jaipur',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:55.13},
        {percentage:'71.63'},
        {percentage:'74.32'},
        {percentage:'62.16'},
        {percentage:'41'}
      ],
      city:'City - Jaipur',
      state:'State - Rajasthan',
      score:'Score - 62.14'
    },
  {rank:41,name:'Pec University Of Technology-Chandigarh ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'62.21'},
        {percentage:'55.58'},
        {percentage:'70.83'},
        {percentage:'55.49'},
        {percentage:'77'}
      ],
      city:'City - CHANDIGARH',
      state:'State - Chandigarh',
      score:'Score - 61.32'
    },
  {rank:42,name:'Manipal Institute Of Technology ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:62.58},
        {percentage:'67.06'},
        {percentage:'65.34'},
        {percentage:'61.72'},
        {percentage:'33'}
      ],
      city:'City - MANIPAL',
      state:'State - Karnataka',
      score:'Score - 61.15'
    },
  {rank:43,name:'Jamia Millia Islamia (A Central University)',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:'47.68'},
        {percentage:'76.73'},
        {percentage:'56.87'},
        {percentage:'47.6'},
        {percentage:'72'}
      ],
      city:'City - NEW DELHI',
      state:'State - Delhi',
      score:'Score - 60.18'
    },
  {rank:45,name:'Dr. B R Ambedkar National Institute Of Technology',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:46.65},
        {percentage:'74.56'},
        {percentage:'81.02'},
        {percentage:'61.7'},
        {percentage:'25'}
      ],
      city:'City - Jalandhar',
      state:'State - Punjab',
      score:'Score - 59.91'
    },
  {rank:47,name:'Indian Institute Of Science Education & Research, Mohali',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:59.29},
        {percentage:'82.22'},
        {percentage:'13.39'},
        {percentage:'50.12'},
        {percentage:'83'}
      ],
      city:'City - Mohali',
      state:'State - Punjab',
      score:'Score - 59.58'
    },
  {rank:48,name:'Karunya Institute Of Technology And Sciences ',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:55.1},
        {percentage:'68.79'},
        {percentage:'60.61'},
        {percentage:'78.6'},
        {percentage:'19'}
      ],
      city:'City - Coimbatore',
      state:'State - Tamil Nadu',
      score:'Score - 59.29'
    },
  {rank:49,name:'Institute Of Technology, Nirma University',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:48.41},
        {percentage:'54.52'},
        {percentage:'67.95'},
        {percentage:'69.27'},
        {percentage:'81'}
      ],
      city:'City - Ahmedabad',
      state:'State - Gujarat',
      score:'Score - 59.23'
    },
  {rank:50,name:'Kongu Engineering College',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:47.51},
        {percentage:'66.33'},
        {percentage:'77.98'},
        {percentage:'72.56'},
        {percentage:'32'}
      ],
      city:'City - PERUNDURAI',
      state:'State - Tamil Nadu',
      score:'Score - 59.06'
    },
  {rank:51,name:'sona College Of Technology-Salem',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:39.04},
        {percentage:'58.23'},
        {percentage:'66.94'},
        {percentage:'77.41'},
        {percentage:'86'}
      ],
      city:'City - SALEM',
      state:'State - Tamil Nadu',
      score:'Score - 58.97'
    },
  {rank:52,name:'National Institute Of Technology, Kurukshetra',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:53.15},
        {percentage:'64.82'},
        {percentage:'78.28'},
        {percentage:'53.95'},
        {percentage:'41'}
      ],
      city:'City - Kurukshetra',
      state:'State - Haryana',
      score:'Score - 58.89'
    },
  {rank:53,name:'Pondicherry Engineering College',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:58.68},
        {percentage:'57.67'},
        {percentage:'71.2'},
        {percentage:'77.49'},
        {percentage:'19'}
      ],
      city:'City - PUDUCHERRY',
      state:'State - Pondicherry',
      score:'Score - 58.79'
    },
  {rank:54,name:'Amrita Viswa Vidyapeetham-Amrita Nagar (Po) ,Ettimadai',info:'NIRF Parametric Score (out of 100)',details:
      [
        {percentage:57.04},
        {percentage:'53.42'},
        {percentage:'81.38'},
        {percentage:'65.7'},
        {percentage:'36'}
      ],
      city:'City - AMRITA NAGAR (PO) ,ETTIMADAI',
      state:'State - Tamil Nadu',
      score:'Score - 58.78'
    },
  ];
  useEffect(() => {
    
  },[]);

  return (
    <section className="row_full">
      <div className="row_full medicalTagarea text-center">
        <div className="container">
          <div className="row_full">
              <h2 className="row_full">Collage Ranking</h2>
              <p className="row_full">Top Engineering Colleges in India</p>
          </div>
        </div>
      </div>
      <div className="row_full medicalBox">
        <div className="container">
          <div className="row_full disp_flex">
            <div className="medicalItem">
              {engineeringJson.map((item) =>
                <div key={item.rank} className="row_full collageRankList">
                <div className="row_full">
                  <div className="rankList"><a className="rank">Rank {item.rank}</a></div>
                  <div className="rankList">
                    <div className="row_full colrankTitle">
                      <div className="row_full collageName">{item.name}</div>
                      <div style={{float:'left'}} className="collageInfo">{item.info} <i className="fa fa-info-circle" aria-hidden="true"></i>
                        <div className="infoHover">National Institutional Ranking Framework</div>
                      </div>
                    </div>
                    <u className="row_full tlrList">
                      <li><span><strong>TLR (100)</strong></span><span><strong>RPC (100)</strong></span><span><strong>GO (100)</strong></span><span><strong>OI (100)</strong></span><span><strong>PERCEPTION (100)</strong></span></li>
                      <li>{item.details.map((item1) =><span>{item1.percentage}</span>)}</li>
                    </u>
                    <div className="row_full collageCity">
                      <span>{item.city}</span>
                      <span>{item.state}</span>
                      <span>{item.score}</span>
                    </div>
                  </div>
                </div>
              </div> 
              )}
            </div>
          </div>
        </div>
      </div>
      
     
    </section>
  );
}

export default Engineering