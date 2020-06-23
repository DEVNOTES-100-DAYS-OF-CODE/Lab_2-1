import React from 'react';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/core/styles';

const NavBarMobile = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton color='inherit' onClick={props.toggleTheme}>
        <RadioButtonUncheckedIcon style={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    textDecoration: 'none',
  },
}));

export default NavBarMobile;
