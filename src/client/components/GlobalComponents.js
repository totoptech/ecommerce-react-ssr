import React from 'react';
import { withStyles, Box } from '@material-ui/core';

export const ImageBox = withStyles(theme => ({
  root: {
    backgroundImage: props => 'url(' + props.imageSrc + ')',
    height: '400px',
    backgroundSize: 'cover',
    backgroundRepeat: 'round',
    position: 'relative',
    cursor: 'pointer'
  }
}))(Box);