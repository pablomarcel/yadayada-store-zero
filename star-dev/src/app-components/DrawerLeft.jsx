import React, {useState} from 'react'
import { makeStyles, styled, useTheme} from '@mui/styles'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router'
import {useLocation} from 'react-router-dom'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { LocalOffer, Home, Menu} from '@mui/icons-material'
import {IconButton, ListItemButton, Toolbar} from "@mui/material";
import { ChevronLeft } from '@mui/icons-material'
import { ChevronRight } from '@mui/icons-material'
import MuiAppBar from '@mui/material/AppBar';

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
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleDrawerOpen = () =>{
    setOpen(true)
  }

  const handleDrawerClose = () =>{
    setOpen(false)
  }

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))

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
      text: 'Shopping Cart',
      icon: <LocalOffer color="secondary" />,
      path: '/shoppingcart'
    },
  ];

  return (
    <div className={classes.root}>

      <AppBar
        position="fixed"
        open={open}
        elevation={0}
        style={{
          backgroundColor:"#E0F2F1"
        }}

      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
            style={{
              color: "#009688",

            }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            noWrap component="div"
            style={{
              color:"#009688"
            }}

          >
            Menu
          </Typography>
        </Toolbar>
      </AppBar>

      {/* side drawer */}


      <Drawer
        color="primary"
        className={classes.drawer}
        variant="persistent"
        // classes={{ paper: classes.drawerPaper }}
        classes={{ paper: classes.paper }}
        anchor="left"
        open={open}
      >




        <DrawerHeader>
          <IconButton onClick = {handleDrawerClose}>
            {/*{theme.direction==='ltr' ? <ChevronLeft /> : <ChevronRight/>}*/}
            {theme.direction==='ltr' ? <ChevronLeft /> : <ChevronRight/>}
          </IconButton>
        </DrawerHeader>
        <div style={{
          backgroundColor: "#009688"
        }}>
          <Typography
            variant="h5"
            className={classes.title}
            color="white"
          >
            {/*Menu*/}
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
