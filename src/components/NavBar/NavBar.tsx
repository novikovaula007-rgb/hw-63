import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' sx={{backgroundColor: '#171717'}}>
                <Toolbar>
                    <Typography variant='h6'
                                sx={{flexGrow: 1, textDecoration: 'none', color: 'white'}}
                                component={NavLink}
                                to='/posts'>
                        My blog
                    </Typography>

                    <Button color='inherit' to='/' component={NavLink}>Home</Button>
                    <Button color='inherit' to='/posts/add' component={NavLink}>Add</Button>
                    <Button color='inherit' to='/about' component={NavLink}>About</Button>
                    <Button color='inherit' to='/contacts' component={NavLink}>Contacts</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;