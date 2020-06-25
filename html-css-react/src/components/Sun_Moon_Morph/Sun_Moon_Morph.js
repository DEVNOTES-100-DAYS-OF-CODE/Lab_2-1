import React, { useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

const SunMoon = (props) => {
  // ------------------------------------------------------------

  const sunPath =
    'M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z';

  const moonPath =
    'M29.5 50C29.5 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 29.5 22.3858 29.5 50Z';

  let toggle = false;

  // ------------------------------------------------------------

  const runAnimation = () => {
    const timeline = anime.timeline({
      duration: 750,
      easing: 'easeOutExpo',
    });
    timeline
      .add({
        targets: '.sun',
        d: [{ value: toggle ? sunPath : moonPath }],
      })
      .add(
        {
          targets: '#darkMode',
          rotate: 320,
        },
        '-= 350'
      )
      .add(
        {
          targets: 'div',
          backgroundColor: toggle ? '#ffffff' : '#141414',
          color: toggle ? '#141414' : '#ffffff',
        },
        '-= 700'
      );
    if (!toggle) {
      toggle = true;
    } else {
      toggle = false;
    }
  };

  return (
    <MOOD>
      <div>
        <p>
          {props.theme === 'light'
            ? 'Mood: hello world - goodnight moon'
            : 'Mood: sleep tight world'}
        </p>
        <br />
        <br />
        <svg
          id='darkMode'
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            // props.toggleTheme();
            runAnimation();
          }}
        >
          <path
            className='sun'
            d='M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z'
            fill='#E0E0E0'
          />
        </svg>
      </div>
    </MOOD>
  );
};

const MOOD = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-item: center;
  align-content: center;
  text-align: center;

  svg {
    cursor: pointer;
    // fill: red;
    fille ${({ toggle }) => (toggle ? 'red' : 'blue')}
  }
`;

export default SunMoon;
