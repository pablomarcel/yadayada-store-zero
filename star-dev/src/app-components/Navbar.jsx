import React from 'react';
import {makeStyles} from "@mui/styles";

// const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {

    appBar: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    date: {
      "& .MuiPaper-root": {
        background: "#009688"
      },
      flexGrow: 1,
      color: "secondary",
      alignContent: "center"
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

const Navbar = () => {

  const classes = useStyles()

  return (

    <nav className="navbar">

      <div className="navbar-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

    </nav>
  );
}

export default Navbar;
