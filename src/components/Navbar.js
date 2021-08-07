import React from 'react'
import {useState} from 'react'
import girl from "../images/girl.jpeg"
import { makeStyles } from '@material-ui/core/styles'
import MobileRightMenuSlider  from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    listIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    Assignment,
    Home,
    Apps,
    ContactMail,
    AssignmentInd,
    Dehaze
    
} from "@material-ui/icons"

import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

//style
const  useStyles = makeStyles(theme =>({
    menuSliderContainer:{
        width:250,
        background:"#222",
        height:"100%"
    },
    Avatar:{
        display:"block",
        margin:"0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13), 
    },
    listItem:{
        color:"white"
    }
}));

const menuIcon = [
    {
        listIcon: <Home/>,
        listText:"Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Resume"
    },
    {
        listIcon: <Apps/>,
        listText:"Porfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText:"Contacts"
    }

]

const Navbar = () => {
    const [state,setState] = useState({
        right: false
    })
    const toggleSlider = (slider,open)=> () =>{
        setState({...state,[slider]:open})
    }
    const classes = useStyles();
    const SideList = slider =>(
        <Box className={classes.menuSliderContainer}  component="div">
        <Avatar className={classes.Avatar} src={girl} alt="Dulanjali"/>
        <Divider />
        <List>
           
                {menuIcon.map((isItem,key) =>
                        <ListItem button key={key}>
                            <ListItemIcon className={classes.listItem}>{isItem.listIcon}</ListItemIcon>
                            <ListItemText className={classes.listItem}>{isItem.listText}</ListItemText>
                        </ListItem>
                ) 
                }
            
        </List>
    </Box>
    )

    
    return (
        <div>
           
            <Box component="nav">
                <AppBar position='static' style={{background:"#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>
                        <Dehaze style={{color: '#448aff'}}/>
                        </IconButton>
                        <Typography varient="h5" style={{color:"#b2ebf2"}}>
                                Portfolio
                        </Typography>
                        <MobileRightMenuSlider 
                        anchor="right"
                        open={state.right}>
                         {SideList("right")}
                        </MobileRightMenuSlider>                      
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar
