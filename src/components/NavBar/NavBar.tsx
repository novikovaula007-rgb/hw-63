import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const NavBar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' sx={{flexGrow: 1, textDecoration: 'none', color: 'white'}}>
                        My blog
                    </Typography>

                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Add</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Contacts</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;