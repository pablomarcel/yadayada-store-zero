import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import { format } from 'date-fns'

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
        <center><img src="https://fontmeme.com/permalink/220610/2f6798e0ac6e2a6f38e4f3769a208d66.png" alt="Yada Yada"/></center>
        <br/>
        <br />
        <AppBar
          position="bottom"
          className={classes.appBar}
          elevation={0}
          color="primary"
        >
          <Toolbar>
              <Typography
                className={classes.date}
                textAlign="center"
                color="#009688"
              >
                {format(new Date(), 'do MMMM Y')}
              </Typography>

          </Toolbar>
        </AppBar>

      </div>

    </nav>
  );
}

export default Navbar;
