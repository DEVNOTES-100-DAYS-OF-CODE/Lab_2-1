import React from 'react';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const Glowing_Gradient_Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Loader></Loader>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Loader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
  animation: animate 2s linear infinite;

  @keyframes animate {
    0% {
      transform: rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: ${({ theme }) => theme.body};
    border-radius: 50%;
    z-index: 1000;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 1000;
    z-index: 1;
    filter: blur(20px);
  }
`;

export default Glowing_Gradient_Loader;
