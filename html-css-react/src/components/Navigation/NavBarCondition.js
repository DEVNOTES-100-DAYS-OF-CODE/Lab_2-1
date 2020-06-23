import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NavBarMobile from './NavBar/NavBar-mobile';

const NavCondition = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <NavBarMobile toggleTheme={props.toggleTheme} />
      </Container>
      <hr style={{ opacity: 0.2 }} />
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'sticky',
    top: 0,
  },
}));

export default NavCondition;
