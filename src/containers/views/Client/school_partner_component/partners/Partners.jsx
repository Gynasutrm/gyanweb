import React , { useEffect } from 'react';
import Cards from '../cards/Cards';
import slogo from '../../../Signlogo.jpg';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Searchbar from '../searchbar/Searchbar';
import Typography from '@material-ui/core/Typography';
// import splogo from '../../../school_partners.PNG';
import './Partners.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  toolbar: {
    // minHeight: 128,
    minHeight: 200,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background:"#6f6ff1"
   
  },
  heading :{
    marginTop:"50px",
    textTransform:"none"
  }


}))

const Partners = () => {
  const classes = useStyles();
  


  

//   const data = [
//     {
//         id: 1,
//         imageUrl:{slogo},
//         title:"ABC",
//         desc:"This is a Abc partner",
//         city:"Bangalore",
//         regisDate:"01/01/2020",
//         year:"2020"
//     },
//     {
//       id: 2,
//      imageUrl:{slogo},
//       title:"Test",
//       desc:"This is a test partner",
//       city:"Chennai",
//       regisDate:"01/01/2020",
//       year:"2020"
//   },
//   {
//     id: 3,
//     imageUrl:{slogo},
//     title:"XYZ",
//     desc:"This is a xyz partner",
//     city:"Mumbai",
//     regisDate:"01/02/2019",
//     year:"2019"
// },

// {
//   id: 4,
//   imageUrl:{slogo},
//   title:"Silicon",
//   desc:"This is a Silicon partner",
//   city:"Delhi",
//   regisDate:"01/06/2018",
//   year:"2018"
  
// },
// {
// id: 5,
// imageUrl:{slogo},
// title:"Mary",
// desc:"This is a Mary partner",
// city:"Hyderabad",
// regisDate:"01/01/2018",
// year:"2018"
// },
// {
// id: 6,
// imageUrl:{slogo},
// title:"Resilience",
// desc:"This is a Resilience partner",
// city:"Mysore",
// regisDate:"01/12/2018",
// year:"2018"
// },
// ]

  const [ctr, setctr] = React.useState({
      partnerData: []

  })
    


    const [carddata,setcarddata] = React.useState({

        
        searchyear:"",
        searchcity:"",
        searchinput:""
    
    });

    React.useEffect(() => {
      axios.get('/spartners')
      .then(res => setctr({partnerData:res.data}) );
        // console.log(carddata.partnerdata);
        
    },[]);
   
    
    
    // },[])

    const handleChange = (e) => {
       
      const newValue = e.target.value;
      const inputName = e.target.name; 

        setcarddata(prevValue => {
          if(inputName === "year"){
            return {
              searchyear : newValue,
              searchcity :prevValue.searchcity,
              searchinput : prevValue.searchinput,
              // partnerdata: prevValue.partnerdata



            }
          }
          else if(inputName === "city"){
              return {
                searchyear : prevValue.searchyear,
                searchcity :newValue,
                searchinput : prevValue.searchinput,
                // partnerdata: prevValue.partnerdata
              }
          }
          else if(inputName === "searchInput"){
            return {
              searchyear : prevValue.searchyear,
              searchcity : prevValue.searchcity,
              searchinput : newValue,
              // partnerdata: prevValue.partnerdata
            }

          }
          
        })
        

        // console.log(newValue)

    }

  


    return (
     
    <> 
  <div > 
    <AppBar position="static"/>
    <Toolbar className={classes.toolbar} >
        <Typography 
                    className={classes.heading}
                    variant="h3" 
                    align="center"
                    color="textPrimary"
                    >Gyansutrm Partners</Typography>
    </Toolbar>
  </div>
      <Searchbar 
 
      handleChange={handleChange}/>

      <Cards 
      data={carddata.searchyear}
      city={carddata.searchcity}
      nameinput={carddata.searchinput}
      // details={carddata.partnerdata} 
      details={ctr.partnerData} 
      />
    </>
    )
}

export default Partners
