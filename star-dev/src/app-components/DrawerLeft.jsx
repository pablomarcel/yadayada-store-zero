import React from 'react'
import { makeStyles } from '@mui/styles'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import {useLocation} from 'react-router-dom'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { LocalOffer, Home} from '@mui/icons-material'
import {ListItemButton} from "@mui/material";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#E0F2F1',
      backgroundColor: '#E0F2F1',
    },
    root: {
      "& .MuiPaper-root": {
        background: "#009688"
      }
    },
    drawer: {
      width: drawerWidth,
    },
    paper:{
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#E0F2F1',
      backgroundColor: '#E0F2F1',
    },
    title: {
      color:"white",
      paddingLeft: theme.spacing(9),
      paddingTop: theme.spacing(2)
    },

    date: {
      flexGrow: 1
    },

  }
})

export default function DrawerLeft({ children }) {

  const classes = useStyles()
  const history = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      text: 'Home',
      icon: <Home color="secondary" />,
      path: '/',
      color: "secondary"
    },
    {
      text: 'Cameras',
      icon: <LocalOffer color="secondary" />,
      path: '/cameras'
    },
    {
      text: 'Headphones',
      icon: <LocalOffer color="secondary" />,
      path: '/headphones'
    },
    {
      text: 'Handbags',
      icon: <LocalOffer color="secondary" />,
      path: '/handbags'
    },
    {
      text: 'Gaming',
      icon: <LocalOffer color="secondary" />,
      path: '/gaming'
    },
    {
      text: 'Cart',
      icon: <LocalOffer color="secondary" />,
      path: '/shoppingcart'
    },
  ];

  return (
    <div className={classes.root}>

      {/* side drawer */}
      <Drawer
        color="primary"
        className={classes.drawer}
        variant="permanent"
        // classes={{ paper: classes.drawerPaper }}
        classes={{ paper: classes.paper }}
        anchor="left"
      >
        <div style={{
          backgroundColor: "#009688"
        }}>
          <Typography
            variant="h5"
            className={classes.title}
            color="white"
          >
            Menu
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              // ListItemButton
              key={item.text}
              onClick={() => history(item.path)}
              className={location.pathname == item.path ? classes.active : null}
              sx = {{
                backgroundColor: "#009688",
                color: "white"

              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}
