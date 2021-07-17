import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./Searchbar.css";

const useStyles = makeStyles((theme) => ({
    root: {


    },
    formControl: {
      

      margin: theme.spacing(1),
      minWidth: 120,
    },
    textfd1 :{
      position:"absolute",
      right:"-50rem",
      paddingRight:"60px"
    },
    textfd2 :{
      position:"absolute",
      right:"-55rem",
      // paddingRight:"60px"
    },
    textfd3 :{
      position:"absolute",
      right:"-69.5rem"
    },
    // inputroot:{
    //     position:"relative",
    //     right:"-50rem"
    // },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Searchbar = ({data,handleChange}) => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl variant="filled" className={classes.formControl}>
            <TextField 
            className={classes.textfd1}
          id="filled-select-year-native"
          select
          label="Year"
          name="year"
          // value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Please select your currency"
          variant="filled"
        >
        <option aria-label="None" value="" />
          <option value={data}>2021</option>
          <option value={data}>2020</option>
          <option value={data}>2019</option>
          <option value={data}>2018</option>
        </TextField>
            {/* <InputLabel htmlFor="filled-year-native-simple"      
                >Year</InputLabel>
        <Select
          native
          // name="year"
        //   value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'year',
            id: 'filled-year-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={data}>2020</option>
          <option value={data}>2019</option>
          <option value={data}>2018</option>
        </Select> */}

        {/* <InputLabel htmlFor="filled-city-native-simple" 
                >City</InputLabel>
        <Select
          native
        //   value={state.age}
          onChange={handleChange}
          name="city"
          inputProps={{
            name: 'city',
            id: 'filled-city-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={data}>Mumbai</option>
          <option value={data}>Hyderabad</option>
          <option value={data}>Chennai</option>
          <option value={data}>Bangalore</option>
          <option value={data}>Mysore</option>
          <option value={data}>Delhi</option>
        </Select> */}

        <TextField
          className={classes.textfd2}
          id="filled-select-city-native"
          select
          label="city"
          name="city"
          // value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Please select your currency"
          variant="filled"
          color="primary"
        >
        <option aria-label="None" value="" />
          <option value={data}>Mumbai</option>
          <option value={data}>Hyderabad</option>
          <option value={data}>Chennai</option>
          <option value={data}>Bangalore</option>
          <option value={data}>Mysore</option>
          <option value={data}>Delhi</option>
        </TextField>
        <TextField id="filled-basic" 
                   label="Type to search" 
                   variant="filled"
                   className={classes.textfd3} 
                   onChange={handleChange}
                  //  value={}
                   name="searchInput"  
                   />
          </FormControl>
        </div>
    )
}

export default Searchbar

